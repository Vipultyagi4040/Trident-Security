import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { generalLimiter } from './middleware/rateLimiter.js';
import { securitySanitizer } from './middleware/sanitize.js';
import apiRouter from './routes/api.js';
import { initDatabase } from './config/db.js';

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security Hardening: Disable Express signature header
app.disable('x-powered-by');

// Security Middleware: Helmet with comprehensive hardening
app.use(helmet({
  contentSecurityPolicy: false, // Dev/hybrid mode compatibility for external maps & fonts
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  crossOriginEmbedderPolicy: false,
  frameguard: { action: 'deny' }, // Prevent Clickjacking attacks
  noSniff: true, // Prevent MIME-type sniffing
  hsts: {
    maxAge: 31536000, // 1 Year Strict Transport Security
    includeSubDomains: true,
    preload: true
  },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));

// Performance: Response compression
app.use(compression());

// CORS Configuration (Strict Whitelist + Development Fallback)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'https://tridentsecuritys.com',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server or local tools
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('CORS blocked by Trident Security Gateway.'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
}));

// Request Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Request Body Parsers with safe payload limits
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Apply Automatic Input Sanitization & Injection Defense across all requests
app.use(securitySanitizer);

// Trust proxy when behind reverse proxy / load balancer (Nginx / Cloudflare)
app.set('trust proxy', 1);

// Apply General Rate Limiter across all APIs
app.use('/api', generalLimiter);

// Mount API Gateway
app.use('/api', apiRouter);

// Locate Client Production Build (supports multiple deployment folder structures in cPanel)
const potentialStaticPaths = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../dist'),
  path.join(__dirname, '../../client/dist'),
  path.join(__dirname, '../../public_html'),
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'dist'),
  path.join(process.cwd(), 'client/dist'),
  path.join(process.cwd(), 'public_html'),
  path.join(process.cwd(), '../public_html'),
  path.join(__dirname, '../../dist')
];

const clientDistPath = potentialStaticPaths.find(p => fs.existsSync(p) && fs.existsSync(path.join(p, 'index.html')));

if (clientDistPath) {
  console.log(`🌐 Serving static frontend from: ${clientDistPath}`);
  app.use(express.static(clientDistPath));

  // SPA Fallback for all non-API GET requests
  app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  // Root Welcome (API Gateway Fallback when frontend build not present)
  app.get('/', (req, res) => {
    res.json({
      name: 'TRIDENT SECURITY SERVICES API GATEWAY',
      version: '2.0.0',
      status: 'ONLINE',
      documentation: '/api/health'
    });
  });

  // 404 Handler for API-only mode
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: `Resource ${req.originalUrl} not found on Trident Security Server.`
    });
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Gateway Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Security Gateway Server Error'
  });
});

// Start Server
async function startServer() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`🛡️ Trident Security Gateway Server running on http://localhost:${PORT}`);
    console.log(`🔒 Security active: Helmet, Bcrypt, Rate Limiting, JWT Auth`);
  });
}

startServer();

export default app;
