import express from 'express';
import routesCar from './Routes/Car.route';
import routesMotorcycles from './Routes/Motorcycles.route';
import ErrorHandler from './middlewares/ErrorHandles';

const app = express();

app.use(express.json());
app.use(routesCar);
app.use(routesMotorcycles);
app.use(ErrorHandler.handle);

export default app;
