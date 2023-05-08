import { Router } from 'express';
import ControllerMotorcycles from '../Controllers/Motorcycles.controller';

const routesMotorcycles = Router();

routesMotorcycles.post(
  '/motorcycles',
  (req, res, next) => new ControllerMotorcycles(req, res, next).create(),
);

routesMotorcycles.get(
  '/motorcycles',
  (req, res, next) => new ControllerMotorcycles(req, res, next).find(),
);

routesMotorcycles.get(
  '/motorcycles/:id',
  (req, res, next) => new ControllerMotorcycles(req, res, next).findById(),
);

routesMotorcycles.put(
  '/motorcycles/:id',
  (req, res, next) => new ControllerMotorcycles(req, res, next).update(),
);

export default routesMotorcycles;