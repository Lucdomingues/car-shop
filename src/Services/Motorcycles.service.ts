import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/Motorcycles.model';

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
}