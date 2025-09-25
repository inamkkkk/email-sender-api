const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', emailRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});