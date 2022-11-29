const { Server } = require('socket.io');

interface Message {
  author: string;
  data: string;
  date: string;
}

const socket = (server: any) => {
  const io = new Server(server);

  return io.on('connection', (socket: any) => {
    console.log('a user connected');

    socket.on('message', (msg: Message) => {
      io.emit('message feed', msg);
    });
  });
};

export default socket;
