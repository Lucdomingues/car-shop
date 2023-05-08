import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  public id: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public status: boolean;
  public buyValue: number;

  constructor(objVehicle: IVehicle) {
    this.id = objVehicle.id;
    this.model = objVehicle.model;
    this.year = objVehicle.year;
    this.color = objVehicle.color;
    this.status = objVehicle.status || false;
    this.buyValue = objVehicle.buyValue;
  }
}
