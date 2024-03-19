const express = require('express');
const app = express();

app.use(express.static('statics'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/statics/index.html');
});

const server = app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});