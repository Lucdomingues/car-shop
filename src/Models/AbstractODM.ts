import { Model, model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  private model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(objAbs: T): Promise<T> {
    return this.model.create({ ...objAbs });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async update(id: string, updateAbs: T) {
    return this.model.findOneAndUpdate({ id }, { updateAbs }, { new: true });
  }
}