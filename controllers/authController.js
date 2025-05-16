const db = require('../models');
const sequelize = db.sequelize;

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const query = `
    SELECT * FROM Users
    WHERE email = '${email}' AND senha = '${senha}'
`;

    const [users] = await sequelize.query(query);

    if (users.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    res.json({ message: 'Login realizado com sucesso'});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
