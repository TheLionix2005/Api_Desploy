const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');
const productoRoutes = require('./routes/productosRoutes');
const perfilRoutes = require('./routes/perfilRoutes');

// Puerto de tu aplicación
const port = process.env.PORT || 3000;

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

// Rutas
clienteRoutes(app);
productoRoutes(app);
perfilRoutes(app);

// Configuración del servidor
server.listen(port, () => {
    console.log(`Aplicacion Tecnoventas ${process.pid} inició en el puerto ${port}`);
});

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Ruta raiz del Backend');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});
