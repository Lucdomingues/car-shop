export default interface IMotorcycles {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean | undefined;
  buyValue: number;
  category: string;
  engineCapacity: number;
}
