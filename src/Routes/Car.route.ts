import { Router } from 'express';
import ControllerCar from '../Controllers/Car.controller';

const routesCar = Router();

routesCar.post(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).create(),
);

routesCar.get(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).find(),
);

routesCar.get(
  '/cars/:id',
  (req, res, next) => new ControllerCar(req, res, next).findById(),
);

routesCar.put(
  '/cars/:id',
  (req, res, next) => new ControllerCar(req, res, next).update(),
);

export default routesCar;