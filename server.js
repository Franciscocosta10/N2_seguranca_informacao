const express = require('express');
const cors = require('cors');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/', authRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('API rodando na porta 3000 (MySQL)');
  });
});
