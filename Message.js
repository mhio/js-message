const debug = require('debug')('mh:Api:Message')

const base62 = require('base62-random')

// ## Message

class Message {
  static classInit(){
    this.id_length = 18
  }
  constructor(){
    this.id = base62(this.constructor.id_length)
    this.ts = Date.now()
  }
  debug(...args){
    debug(this.id, ...args)
  }
}
Message.classInit()


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