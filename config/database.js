const { Sequelize } = require('sequelize'); 

module.exports = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '99712003',
    database: 'catalogoMusical',
    define: {
        timestamps: true,
        underscored: true
    }
});