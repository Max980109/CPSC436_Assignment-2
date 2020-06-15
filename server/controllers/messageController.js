const Message = require('../models/messageModel');

// create new Message
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const message = new Message({
        message: req.body.message, 
        content: req.body.messageTime
    });

    // Save Note in the database
    message.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Message."
        });
    });

};

// find and return all messages
exports.findAll = (req, res) => {
    Message.find()
    .then(messages => {
        res.send(messages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// find single message with message id
exports.findOne = (req, res) => {
    Message.findById(req.params.messageId)
    .then(msg => {
        if(!msg) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.messageId
            });            
        }
        res.send(msg);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.messageId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.messageId
        });
    });

};

// update a message
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "message content can not be empty"
        });
    }

    // Find note and update it with the request body
    Message.findByIdAndUpdate(req.params.messageId, {
        message: req.body.message,
        messageTime: req.body.messageTime
    }, {new: true})
    .then(msg => {
        if(!msg) {
            return res.status(404).send({
                msg: "message not found with id " + req.params.messageId
            });
        }
        res.send(msg);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.messageId
        });
    });

};

// delete a message
exports.delete = (req, res) => {
    Message.findByIdAndRemove(req.params.messageId)
    .then(msg => {
        if(!msg) {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });
        }
        res.send({message: "message deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.messageId
        });
    });
};

exports.deleteAll = (req, res) => {
    Message.deleteMany()
    .then(messages => {
        res.send(messages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting all messages."
        });
    });
};

