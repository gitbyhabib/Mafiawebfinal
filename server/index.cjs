const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const data = require('./data/leaderboard');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/leaderboard', (req, res) => {
  res.json(data);
});

const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), function(err){
    if(err){
      res.status(404).send('Not found');
    }
  });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
