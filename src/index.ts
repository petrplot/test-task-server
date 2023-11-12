import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import log4js from 'log4js';
import router from './router';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocs from './swagger/openapi.json'


dotenv.config();

export const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

const app = express();
const port = process.env.PORT || 5000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors({
  methods: ["POST","GET"],
  credentials: true,
}));


app.use(express.json());

app.use('/api', router);

app.listen(port, () => logger.info(`Running on port ${port}`));



    





