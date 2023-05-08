import { Response, Request, NextFunction } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycle';
import ServiceMotorcycles from '../Services/Motorcycles.service';

export default class ControllerMotorcycles {
  private service: ServiceMotorcycles;

  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this.service = new ServiceMotorcycles();
  }

  public async create() {
    const motorcycles: IMotorcycles = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycles = await this.service.create(motorcycles);      
      return this.res.status(201).json(newMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const motorcycles = await this.service.find();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const motorcycles = await this.service.findById(id);
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }
}