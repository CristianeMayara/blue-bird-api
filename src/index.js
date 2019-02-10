const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

/*mongoose.connect('mongodb+srv://admin:admin123@goweek-backend-j0i7g.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});*/

mongoose.connect("mongodb://localhost:27017/goweek-backend",
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('Server start on port 3000');
});
