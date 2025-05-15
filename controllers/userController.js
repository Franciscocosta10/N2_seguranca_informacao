const db = require('../models');
const sequelize = db.sequelize;

exports.getAllUsers = async (req, res) => {
  try {
    const nome = req.query.nome;
    let query = 'SELECT * FROM Users';

    if (nome) {
      query += ` WHERE nome = '${nome}'`;
    }

    const [users] = await sequelize.query(query);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    const user = await db.User.create({ nome, email, senha });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, email, senha } = req.body;

    const query = `
      UPDATE Users
      SET nome = '${nome}', email = '${email}', senha = '${senha}'
      WHERE id = ${id}
    `;

    const [result] = await sequelize.query(query);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const [users] = await sequelize.query(`SELECT * FROM Users WHERE id = ${id}`);
    res.status(200).json(users[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const query = `DELETE FROM Users WHERE id = ${id}`;
    const [result] = await sequelize.query(query);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};