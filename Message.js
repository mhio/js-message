const debug = require('debug')('mh:Api:Message')

const base62 = require('base62-random')

// ## Message

class Message {
  constructor(){
    this.id = base62(18)
    this.ts = Date.now()
  }
  debug(message){
    debug(message)
  }
}


// ## MessageError

class MessageError extends Message {
  constructor( error ){
    super()
    this.error = error
  }
}


// ## Message

class MessageData extends Message {
  constructor( data ){
    super()
    this.data = data
  }
}



module.exports = {
  Message,
  MessageError,
  MessageData,
}