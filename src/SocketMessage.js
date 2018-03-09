const { MessageData } = require('./Message')

// ## SocketMessage

class SocketMessage extends MessageData {
  constructor( event, data ){
    super(data)
    this.event = event
  }
}


// ## SocketMessageAction

// Adds `action` meta data to the message to allow one event listener
// to handle many types of messages/actions

class SocketMessageAction extends SocketMessage {
  constructor( event, data, options ){
    super(event, data)
    if (!options) throw new Error('SocketMessageAction options required')
    if (!options.action) throw new Error('SocketMessageAction options.action required')
    this.action = options.action
  }
}


// ## SocketMessageReply

// Adds a `replyid` for messages in response to a request.

class SocketMessageReply extends SocketMessage {

  static fromIncoming(original, data, options = {} ){
    options.replyid = original.id
    return new this(original.event, data, options)
  }

  constructor( event, data, options ){
    super(event, data)
    if (!options) throw new Error('SocketMessageReply options required')
    if (!options.replyid) throw new Error('SocketMessageReply options.replyid required')
    this.replyid = options.replyid
  }

}


module.exports = {
  MessageData,
  SocketMessage,
  SocketMessageAction,
  SocketMessageReply,
}