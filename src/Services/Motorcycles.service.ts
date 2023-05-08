import { isValidObjectId } from 'mongoose';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/Motorcycles.model';
import ErrorHandler from '../middlewares/ErrorHandles';

export default class ServiceMotorcycles {
  private createMotorcyclesDomain(motorcyclesODM: IMotorcycles | null): Motorcycles | null {
    if (motorcyclesODM) {
      return new Motorcycles(motorcyclesODM);
    }
    return null;
  }

  public async create(objMotorcycles: IMotorcycles): Promise<Motorcycles | null> {
    const motorcyclesODM = new MotorcyclesODM();

    const newMotorcycles = await motorcyclesODM.create(objMotorcycles);

    return this.createMotorcyclesDomain(newMotorcycles);
  }

  public async find() {
    const motorcyclesODM = new MotorcyclesODM();

    const motorcycles = await motorcyclesODM.find();

    const motorcyclesArr = motorcycles.map((elements) => this.createMotorcyclesDomain(elements));

    return motorcyclesArr;
  }

  public async findById(id: string): Promise<Motorcycles | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHandler(422, 'Invalid mongo id');
    }

    const motorcyclesODM = new MotorcyclesODM();

    const motorcycles = await motorcyclesODM.findById(id);

    if (!motorcycles) {
      throw new ErrorHandler(404, 'Motorcycle not found');
    }

    return this.createMotorcyclesDomain(motorcycles);
  }

  public async update(id: string, updateMotorcycles: IMotorcycles): Promise<Motorcycles | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHandler(422, 'Invalid mongo id');
    }

    const motorcyclesODM = new MotorcyclesODM();

    const motorcycles = await motorcyclesODM.findById(id);

    if (!motorcycles) {
      throw new ErrorHandler(404, 'Motorcycle not found');
    }

    const motorcyclesUpdate = await motorcyclesODM.update(updateMotorcycles);

    return this.createMotorcyclesDomain(motorcyclesUpdate);
  }
}