import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
    
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }
    
  public async create(objCar: ICar): Promise<ICar> {
    return this.model.create({ ...objCar });
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async update(id: string, updateCar: ICar) {
    return this.model.findOneAndUpdate({ id }, updateCar, { new: true });
  }
}