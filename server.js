const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const Users = [{id: 'Qover', password: 'Ninja'}];

app.post('/login', function(req, res){
  if(!req.body.id || !req.body.password){
    res.status(500).json({error: "Internal server error"});
  } else {
    const user = Users.find(u => {
      return u.id === req.body.id && u.password === req.body.password;
    });
    if (user) {
      res.sendStatus(200);
    } else {
      res.status(500).json({error: "Internal server error"});
    }
  }
});

app.listen(process.env.PORT || 8080);
