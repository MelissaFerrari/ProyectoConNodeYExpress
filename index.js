const express = require('express');
const app = express();

// Puerto
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
