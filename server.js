import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { toBuffer } from 'qrcode';
import fetch from 'node-fetch';

function connect(conn, PORT, opts = {}) {
  // Crear una instancia de Express y HTTP Server
  const app = express();
  const server = createServer(app);

  // Variable para almacenar el código QR
  let _qr = 'El código QR es invalido, posiblemente ya se escaneo el código QR.';

  // Escuchar actualizaciones de la conexión
  conn.ev.on('connection.update', function appQR({ qr }) {
    if (qr) _qr = qr; // Actualizar el código QR si está disponible
  });

  // Middleware para servir el código QR como imagen PNG
  app.use(async (req, res) => {
    try {
      const qrBuffer = await toBuffer(_qr); // Convertir el QR a un buffer
      res.setHeader('content-type', 'image/png');
      res.end(qrBuffer);
    } catch (error) {
      console.error('Error al generar el código QR:', error);
      res.status(500).send('Error al generar el código QR');
    }
  });

  // Iniciar el servidor
  server.listen(PORT, () => {
    console.log(`[ ℹ️ ] La aplicación está escuchando el puerto ${PORT} (ignorar si ya escaneo el código QR)`);
    if (opts['keepalive']) keepAlive(); // Activar keepAlive si está habilitado
  });

  // Configuración de Socket.io (opcional)
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);
    socket.on('disconnect', () => {
      console.log('Usuario desconectado:', socket.id);
    });
  });
}

// Función para redirigir eventos entre dos instancias de EventEmitter
function pipeEmit(event, event2, prefix = '') {
  const old = event.emit;
  event.emit = function (event, ...args) {
    old.emit(event, ...args);
    event2.emit(prefix + event, ...args);
  };
  return {
    unpipeEmit() {
      event.emit = old;
    },
  };
}

// Función para mantener activo el servidor
function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
  if (/(\/\/|\.)undefined\./.test(url)) {
    console.error('URL de keepAlive no válida:', url);
    return;
  }

  setInterval(() => {
    fetch(url).catch((error) => {
      console.error('Error en keepAlive:', error.message);
    });
  }, 5 * 1000 * 60); // Realizar una solicitud cada 5 minutos
}

// Exportar las funciones principales
export { connect, pipeEmit, keepAlive };