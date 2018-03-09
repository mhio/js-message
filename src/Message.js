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
  constructor( data = {} ){
    super()
    this.data = data
  }
  set(name, val){
    if (typeof this.data === 'object') return this.data[name] = val
    throw new Error(`Can't set value on non object: ${typeof this.data}`)
  }
  get(name){
    if (typeof this.data === 'object') return this.data[name]
    throw new Error(`Can't get value from non object: ${typeof this.data}`)
  }
}



module.exports = {
  Message,
  MessageError,
  MessageData,
}