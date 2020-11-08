const express = require('express');
const path = require('path');
// const os = require('os');

const app = express();

app.use(express.static('public'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/*', function(req, res) {
    console.log(path.join(__dirname, 'public/index.html'))
    res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));