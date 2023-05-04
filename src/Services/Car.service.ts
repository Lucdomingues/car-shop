import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/Car.model';

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
}