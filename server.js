const express = require('express');
const cors = require('cors');
const db = require('./models');
db.sequelize.sync();
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

// Sincroniza o banco de dados e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('API rodando na porta 3000 (MySQL)');
  });
});
