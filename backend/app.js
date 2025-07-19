import express from 'express';;
const app = express();
import { nanoid } from 'nanoid';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});

app.get('/api/create', (req, res) => {
  const url=req.body;
  console.log(`Received URL: ${url}`);
  
  res.send(nanoid(10));
});