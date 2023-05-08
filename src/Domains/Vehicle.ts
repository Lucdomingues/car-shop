import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle implements IVehicle {
  public id: string | undefined;
  public model: string;
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

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}
