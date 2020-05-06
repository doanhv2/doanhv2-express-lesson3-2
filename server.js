// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
app.set('view engine', 'pug')
app.set('views', './views')

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

app.get('/todos', (request, response) => {
  console.log(request.query);
  let todos = [
    'Đi chợ',
    'Nấu cơm',
    'Rửa bát',
    'Học code tại CodersX'
  ]
  if(request.query.q){
    todos = todos.filter(item => {
      return item.toLowerCase().indexOf(request.query.q) > -1
    })
  }
  response.render('todos', { todos: todos});
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
