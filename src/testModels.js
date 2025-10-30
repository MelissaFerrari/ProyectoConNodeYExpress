const sequelize = require('./models/sequelize');

// Importar modelos
const Usuario = require('./models/User');
const Comunidad = require('./models/Community');
const Publicacion = require('./models/Post');
const Comentario = require('./models/Comment');

(async () => {
  try {
    console.log('⏳ Probando conexión y modelos...');

    // 1️⃣ Verificar conexión
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa con MySQL.');

    // 2️⃣ Sincronizar modelos (no borra datos)
    await sequelize.sync({ alter: true });
    console.log('✅ Modelos sincronizados correctamente.');

    // 3️⃣ Crear un usuario de prueba
    const usuario = await Usuario.create({
      nombre_usuario: 'melissa',
      email: 'melissa@test.com',
      password: '123456',
      fecha_registro: new Date()
    });
    console.log('👤 Usuario creado:', usuario.toJSON());

    // 4️⃣ Crear una comunidad
    const comunidad = await Comunidad.create({
      nombre: 'Programadores Tandil',
      descripcion: 'Comunidad para compartir conocimientos de desarrollo.',
      creador_id: usuario.id,
      fecha_creacion: new Date()
    });
    console.log('🌐 Comunidad creada:', comunidad.toJSON());

    // 5️⃣ Crear una publicación
    const publicacion = await Publicacion.create({
      contenido: 'Hola a todos, esta es mi primera publicación!',
      usuario_id: usuario.id,
      comunidad_id: comunidad.id,
      fecha_publicacion: new Date()
    });
    console.log('📝 Publicación creada:', publicacion.toJSON());

    // 6️⃣ Crear un comentario
    const comentario = await Comentario.create({
      contenido: 'Bienvenida al grupo!',
      usuario_id: usuario.id,
      publicacion_id: publicacion.id,
      fecha_comentario: new Date()
    });
    console.log('💬 Comentario creado:', comentario.toJSON());

    // 7️⃣ Cerrar conexión
    await sequelize.close();
    console.log('🔒 Conexión cerrada correctamente.');

  } catch (error) {
    console.error('❌ Error al probar modelos:', error);
  }
})();
