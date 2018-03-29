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


/** Simple Error Mesage */
class MessageError extends Message {
  constructor( error ){
    super()
    this.error = error
  }
}


/** Simple Data Message */
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


/** Base class for JSON:API messages */
class MessageJsonApi {
  constructor( meta, links, jsonapi ){
    this.meta = meta         // Object
    this.links = links       // Object
    this.jsonapi = jsonapi   // Object
  }
}

/** JSON:API Data */
class MessageJsonApiData extends MessageJsonApi {
  static message( data, included, meta, links, jsonapi ){
    if (!meta) meta = {}
    meta.id = base62(this.constructor.id_length)
    meta.ts = Date.now()
    return new this(data, included, meta, links, jsonapi)
  }
  constructor( data, included, meta, links, jsonapi ){
    super(meta, links, jsonapi)
    this.data = data         // Any
    this.included = included // Array
  }
  set(name, val){
    return this.data[name] = val
  }
  get(name){
    return this.data[name]
  }
}

/** JSON:API Error */
class MessageJsonApiError extends MessageJsonApi {
  constructor( error, meta, links, jsonapi ){
    super(meta, links, jsonapi)
    this.errors = (error) ? [ error ] : []
  }
  addError(error){
    this.errors.push(error)
  }
}

module.exports = {
  Message,
  MessageError,
  MessageData,
  MessageJsonApi,
  MessageJsonApiError,
  MessageJsonApiData,
}
