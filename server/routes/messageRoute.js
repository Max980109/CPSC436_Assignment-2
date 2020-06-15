module.exports = (app) => {
    const messages = require('../controllers/messageController.js');

    // Create a new Message
    app.post('/messages', messages.create);

    // Retrieve all Message
    app.get('/messages', messages.findAll);

    // Retrieve a single Message with messageId
    app.get('/messages/:messageId', messages.findOne);

    // Update a Message with messageId
    app.put('/messages/:messageId', messages.update);

    // Delete a Message with messageId
    app.delete('/messages/:messageId', messages.delete);

    // Delete all messages
    app.delete('/messages', messages.deleteAll);
}