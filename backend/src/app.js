const express = require('express');
const cors = require('cors');

const testRoutes = require('./routes/test.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(testRoutes);
app.use(authRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API funcionando'
  });
});

module.exports = app;