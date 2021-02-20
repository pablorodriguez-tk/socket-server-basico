const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", payload); //Envia mensaje a todos los demas clientes, menos a el mismo
  }); //Escucha el mensaje emitido por el cliente y emite un mensaje al cliente
};

module.exports = { socketController };
