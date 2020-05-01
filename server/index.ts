import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.static('ui/build'));
app.use(express.json());
app.use(cors());
// eslint-disable-next-line no-undef
require('dotenv').config();


app.get('/ping', (_req, res) => { 
      res.send("yolo");

});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});