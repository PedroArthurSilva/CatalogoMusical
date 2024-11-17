module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define("Genero", {
    nome: DataTypes.STRING,
  });

  Genero.associate = (models) => {
    Genero.belongsToMany(models.Album, { through: 'AlbumGeneros' });
    Genero.belongsToMany(models.Artista, { through: 'ArtistaGeneros' });
  };

  return Genero;
};
