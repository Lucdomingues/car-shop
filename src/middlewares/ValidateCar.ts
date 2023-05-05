import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ErrorHandler from './ErrorHandles';
import CarODM from '../Models/Car.model';

const validateCar = async (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new ErrorHandler(422, 'Invalid mongo id');
  }

  const carODM = new CarODM();

  const car = await carODM.findById(id);

  if (!car) {
    throw new ErrorHandler(404, 'Car not found');
  }
    
  next();
};
 
export default validateCar;