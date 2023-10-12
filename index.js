const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 4000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('My port: ' + port);
});
