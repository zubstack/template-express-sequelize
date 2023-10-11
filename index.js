const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send({
    content: 'Bla',
    important: false,
    createdAt: '00/00/00',
  });
});

app.listen(port, () => {
  console.log('My port: ' + port);
});
