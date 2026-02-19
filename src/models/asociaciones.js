const Usuario = require("./User");
const Comunidad = require("./Community");
const Publicacion = require("./Post");
const Comentario = require("./Comment");

Comentario.belongsTo(Usuario, { foreignKey: "usuario_id", as: "usuario" });
Comentario.belongsTo(Publicacion, { foreignKey: "publicacion_id", as: "publicacion" });

// Asociación: cada comunidad pertenece a un usuario creador
Comunidad.belongsTo(Usuario, { foreignKey: "creador_id", as: "creador" });

Comunidad.hasMany(Publicacion, {
  foreignKey: "comunidad_id",
  as: "publicaciones"
});


// Relaciones
Publicacion.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
Publicacion.belongsTo(Comunidad, { foreignKey: 'comunidad_id', as: 'comunidad' });

Publicacion.hasMany(Comentario, { 
  foreignKey: "publicacion_id", 
  as: "comentarios" 
});


Usuario.hasMany(Publicacion, {
  foreignKey: "usuario_id",
  as: "publicaciones"
});

Usuario.hasMany(Comentario, {
  foreignKey: "usuario_id",
  as: "comentarios"
});


module.exports = {
  Usuario,
  Comunidad,
  Publicacion,
  Comentario
};