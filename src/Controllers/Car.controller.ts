import { Response, Request } from 'express';
import ICar from '../Interfaces/ICar';
import ServiceCar from '../Services/Car.service';

export default class ControllerCar {
  private service: ServiceCar;

  constructor(
    private req: Request,
    private res: Response,
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
      return this.res.status(400).json('Could not create!');
    }
  }
}