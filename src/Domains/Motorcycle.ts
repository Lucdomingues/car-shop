import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycles extends Vehicle {
  public id: string | undefined;
  public model: string;
  public year: number;
  public color: string;
  public status: boolean;
  public buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(objMotorcycles: IMotorcycles) {
    super(objMotorcycles);
    this.id = objMotorcycles.id;
    this.model = objMotorcycles.model;
    this.year = objMotorcycles.year;
    this.color = objMotorcycles.color;
    this.status = objMotorcycles.status || false;
    this.buyValue = objMotorcycles.buyValue;
    this.category = objMotorcycles.category;
    this.engineCapacity = objMotorcycles.engineCapacity;
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

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}
