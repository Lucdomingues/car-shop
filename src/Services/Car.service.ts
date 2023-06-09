import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/Car.model';
import ErrorHandler from '../middlewares/ErrorHandles';

enum StatusCode {
  errorId = 'Invalid mongo id',
  errorCar = 'Car not found',
}

export default class ServiceCar {
  private createCarDomain(carODM: ICar | null): Car | null {
    if (carODM) {
      return new Car(carODM);
    }
    return null;
  }

  public async create(objCar: ICar): Promise<Car | null> {    
    const carODM = new CarODM();

    const newCar = await carODM.create(objCar);
      
    return this.createCarDomain(newCar);
  }

  public async find() {
    const carODM = new CarODM();

    const cars = await carODM.find();

    const carsArr = cars.map((elements) => this.createCarDomain(elements));

    return carsArr;
  }

  public async findById(id: string): Promise<Car | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHandler(422, StatusCode.errorId);
    }

    const carODM = new CarODM();

    const car = await carODM.findById(id);

    if (!car) {
      throw new ErrorHandler(404, StatusCode.errorCar);
    }

    return this.createCarDomain(car);
  }

  public async update(id: string, updateCar: ICar): Promise<Car | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHandler(422, StatusCode.errorId);
    }

    const carODM = new CarODM();

    const car = await carODM.findById(id);

    if (!car) {
      throw new ErrorHandler(404, StatusCode.errorCar);
    }

    const carUpdate = await carODM.update(updateCar);

    return this.createCarDomain(carUpdate);
  }

  public async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new ErrorHandler(422, StatusCode.errorId);
    }

    const carODM = new CarODM();

    const car = await carODM.findById(id);

    if (!car) {
      throw new ErrorHandler(404, StatusCode.errorCar);
    }
    await carODM.remove(id);
  }
}