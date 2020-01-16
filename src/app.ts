import express, { Application } from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app: Application = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(helmet());


// Routes
app.use('/api/auth', authRoutes);

// Static files

export default app;