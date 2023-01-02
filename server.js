const express = require('express');
const path = require('path');
const app = express();
const PORT = 1234;
const assetsRouter = require('./server/assets-router');

app.use('/src', assetsRouter);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'src')));

// app.get('/api/v1', (req, res) => {
//   res.json({
//     project: 'React and Express Boilerplate',
//     from: 'Vanaldito',
//   });
// });

// app.get('/feed', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/login.html'));
});

app.get('/', (req, res) => {
  console.log('Hello from express');
  res.sendFile(path.join(__dirname, '/public/login.html'));
});

app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
});
