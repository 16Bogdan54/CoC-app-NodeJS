import express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

