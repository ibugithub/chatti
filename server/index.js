import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();
const port = process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log('listening on port ' + port);
});