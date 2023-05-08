import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(objMotorcycles: IMotorcycles) {
    super(objMotorcycles);
    this.category = objMotorcycles.category;
    this.engineCapacity = objMotorcycles.engineCapacity;
  }
}
