const a = require('express');
const app = a();

app.get('/', (req, res) => {
  res.send('Hello Deepak Welcomne Back buddy');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
