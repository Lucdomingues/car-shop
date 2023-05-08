import { Model, model, models, Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';

export default class MotorcyclesODM {
  private schema: Schema;
  private model: Model<IMotorcycles>;

  constructor() {
    this.schema = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycles || model('Motorcycle', this.schema);
  }

  public async create(objMotorcycles: IMotorcycles): Promise<IMotorcycles> {
    return this.model.create({ ...objMotorcycles });
  }
}