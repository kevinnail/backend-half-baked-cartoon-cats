const express = require('express');
const { cats } = require('./cats-data.js');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cats/:id', (req, res) => {
  let match;
  console.log(req.params.id);

  for (const cat of cats) {
    if (cat.id === req.params.id) {
      match = cat;
    }
  }
  return res.json(match);
});

app.use('/cats', require('./controllers/cats'));
module.exports = app;
