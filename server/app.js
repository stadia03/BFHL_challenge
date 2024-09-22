import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import { errorHandler } from './middleware/errorHandler.js';

import bfhlRoutes from './routes/bfhlRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Use routes
app.use('/bfhl', bfhlRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
