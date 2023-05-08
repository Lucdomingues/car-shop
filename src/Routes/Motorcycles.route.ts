import { Router } from 'express';
import ControllerMotorcycles from '../Controllers/Motorcycles.controller';

const routesMotorcycles = Router();

routesMotorcycles.post(
  '/motorcycles',
  (req, res, next) => new ControllerMotorcycles(req, res, next).create(),
);

export default routesMotorcycles;