import express, { Application } from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors'; 

const app: Application = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080',
    ],
    credentials: true
}));


// Routes
app.use('/api/auth', authRoutes);
/* app.use('/', (req, res) => {
    res.send('hello world');
}) */

// Static files

export default app;