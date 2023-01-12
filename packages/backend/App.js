const express = require('express');
const helmet = require('helmet');
// const rescue = require('express-rescue');
const swaggerUi = require('swagger-ui-express');
const limiter = require('./limiter');
require('dotenv').config();
const errorMiddleware = require('./middlewares/error');

const swaggerDocs = require('./swagger.json');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());

// app.use('/login', rescue(loginRouter));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorMiddleware);

module.exports = app;