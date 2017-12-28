
const { Message, SocketMessage, MessageError } = require('../../')

describe('module', function(){

  it('should load the module', function(){
    expect( Message ).to.be.ok
  })

  it('should load the module', function(){
    expect( SocketMessage ).to.be.ok
  })

  it('should load the module', function(){
    expect( MessageError ).to.be.ok
  })

})
