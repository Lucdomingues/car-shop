import { Response, Request, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import ServiceCar from '../Services/Car.service';

export default class ControllerCar {
  private service: ServiceCar;

  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this.service = new ServiceCar();
  }
    
  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const cars = await this.service.find();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.findById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const update = this.req.body;
      const updatedCar = await this.service.update(id, update);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}