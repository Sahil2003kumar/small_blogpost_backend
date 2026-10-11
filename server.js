
const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');
const connectDb = require('./src/db/db');

connectDb().then(() => {
  app.listen(3000, () => {
    console.log('Running on port 3000');
  });
}).catch((error) => {
  console.error('Database connection failed:', error.message);
});
