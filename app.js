const express = require('express');
const morgan = require('morgan');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Routing
app.listen(3000);

// Middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const blogs = [
    { title: 'Shih Tzu learns to skateboard', snippet: 'A smart dog in Leeds learned how to skateboard!' },
    { title: 'Goldendoodle saves a life', snippet: 'A cute Goldendoodle in Bournemouth saved a life today.' },
    { title: 'French Bulldog steals bed from owner', snippet: 'A spoilt Frenchie in Kent has stolen her owner\'s bed...' }
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create' })
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
})