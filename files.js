const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

console.log('last line');

// writing files
fs.writeFile('./docs/blog1.txt', 'Hello world', () => {
  console.log('file written');
});

fs.writeFile('./docs/myObject.json', '{"name": "Muranishi", "age": 45, "occupation": "kantoku"}', () => {
  console.log('file written!');
});

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('directory created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  })
}

// deleting files
const filepath = './docs/deleteme.txt';

if (fs.existsSync(filepath)) {
  fs.unlink(filepath, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}