const app = require('./app');

const port = +process.env.VIRTUAL_PORT || 3000;

app.listen(port, '127.0.0.1', () => {
  console.log(`Listening at 127.0.0.1:${port}`);
});

