import { Router } from 'express';
import ControllerCar from '../Controllers/Car.controller';

const routes = Router();

routes.post(
  '/cars',
  (req, res) => new ControllerCar(req, res).create(),
);

export default routes;