import { Router } from 'express';
import ControllerCar from '../Controllers/Car.controller';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).find(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new ControllerCar(req, res, next).findById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new ControllerCar(req, res, next).update(),
);

export default routes;