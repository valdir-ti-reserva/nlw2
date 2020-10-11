import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  
  const users = [
    {name: 'Valdir'},
    {name: 'Julia'},
    {name: 'Lila'},
    {name: 'Billy'},
  ]

  return res.json(users)

});

app.listen(3325);
