const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/users', (req, res) => {
  // res.send('respond with a resource');

  let users = { users: [
    {
      id: 1,
      username: "yenly"
    }, {
      id: 2,
      username: "hobbes"
    }
  ]
  };

  // res.json({
  //   "id": "1",
  //   "username": "yenly"
  // });
  res.send(users);
});

app.get('/api/food', (req, res) => {
  let food = {
    dinner: "Me hungry!"
  }
  console.log("hey");
  res.send(food);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
