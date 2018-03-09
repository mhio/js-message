const {
  Message,
  MessageError,
  MessageData
} = require('../../src/Message')

describe('Message', function(){

  it('should load Message', function(){
    expect( Message ).to.be.ok    
  })
  
  it('should create a Message', function(){
    expect( new Message() ).to.be.ok
  })

  it('should create a Message with debug', function(){
    let msg = new Message()
    expect( msg.debug ).to.be.a('function')
    expect( msg.debug() ).to.be.undefined
  })

  it('should load MessageError', function(){
    expect( MessageError ).to.be.ok
  })

  it('should create a MessageError', function(){
    expect( new MessageError(new Error("blargh")) ).to.be.ok    
  })

  it('should load MessageData', function(){
    expect( MessageData ).to.be.ok
  })

  it('should create a MessageData', function(){
    expect( new MessageData({ some: "data" }) ).to.be.ok
  })
  
})
