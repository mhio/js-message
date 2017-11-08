const {
  message,
  Message,
  MessageError,
  MessageData } = require('../../Message')

describe('Message', function(){

  it('should load nessage', function(){
    expect( message ).to.be.ok    
  })
  
  it('should load Message', function(){
    expect( Message ).to.be.ok    
  })
  
  it('should load MessageError', function(){
    expect( MessageError ).to.be.ok    
  })
  
  it('should load MessageData', function(){
    expect( MessageData ).to.be.ok    
  })
  
})
