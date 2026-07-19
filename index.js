const a = require('express');

const app = a();

app.get('/', (req, res) => {
  res.send('Prateek Bhadwa hai');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});