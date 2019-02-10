const express = require('express');
const mongoose = require('mongoose');

const app = express();

/*mongoose.connect('mongodb+srv://admin:admin123@goweek-backend-j0i7g.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});*/

app.get('/', (req, res) => {
  return res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server start on port 3000');
});
