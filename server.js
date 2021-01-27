const io = require('socket.io')(3000); //server on port 3000

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World!')
});