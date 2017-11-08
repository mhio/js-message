const {
  MessageData,
  SocketMessage,
  SocketMessageAction,
  SocketMessageReply,
} = require('../../SocketMessage')


describe('SocketMessage', function(){

  it('should load SocketMessage', function(){
    expect( SocketMessage ).to.be.ok    
  })

  it('should load SocketMessageAction', function(){
    expect( SocketMessageAction ).to.be.ok    
  })

  it('should load SocketMessageReply', function(){
    expect( SocketMessageReply ).to.be.ok    
  })

  it('should load MessageData', function(){
    expect( MessageData ).to.be.ok    
  })
  
})
