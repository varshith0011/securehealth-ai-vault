import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import admin from 'firebase-admin';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Auth Routes
import authRouter from './routes/auth';
app.use('/api/auth', authRouter);

// Medical Records Routes
import recordsRouter from './routes/records';
app.use('/api/records', recordsRouter);

// AI Assistant Routes
import aiRouter from './routes/ai';
app.use('/api/ai', aiRouter);

// Diagnostic Centers Routes
import diagnosticRouter from './routes/diagnostic';
app.use('/api/diagnostic', diagnosticRouter);

// Emergency Consultation Routes
import emergencyRouter from './routes/emergency';
app.use('/api/emergency', emergencyRouter);

// Healthcare Ads Routes
import adsRouter from './routes/ads';
app.use('/api/ads', adsRouter);

// Teleconsultation Routes
import teleconsultRouter from './routes/teleconsult';
app.use('/api/teleconsult', teleconsultRouter);

// Payments Routes
import paymentsRouter from './routes/payments';
app.use('/api/payments', paymentsRouter);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!', message: err.message });
});

app.listen(PORT, () => {
  console.log(`🔥 SecureHealth AI Vault Backend running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
});
