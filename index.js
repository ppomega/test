const a = require('express');
const app = a();
require('dotenv').config()

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
