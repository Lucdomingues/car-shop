import express from 'express';
import routes from './Routes/Car.route';
import ErrorHandler from './middlewares/ErrorHandles';

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;
