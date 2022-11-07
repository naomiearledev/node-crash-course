const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');

// Routing
app.listen(3000);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/blogs/create', (req, res) => {
  res.render('create')
});

app.use((req, res) => {
  res.status(404).render('404');
})