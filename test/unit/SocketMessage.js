const {
  MessageData,
  SocketMessage,
  SocketMessageAction,
  SocketMessageReply,
} = require('../../src/SocketMessage')


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

  describe('SocketMessage', function(){
    it('should create a SocketMessage instance', function(){
      let sm = new SocketMessage()
      expect( sm ).to.be.ok
    })
  })

  describe('SocketMessageAction', function(){
    it('should create a SocketMessageAction instance', function(){
      let sma = new SocketMessageAction(
        "evname",
        { some: 'data' },
        { action: "something" }
      )
      expect( sma ).to.be.ok
    })

    it('should error when no options', function(){
      let fn = ()=> {
        new SocketMessageAction(
          "evname",
          { some: 'data' },
        )
      }
      expect( fn ).to.throw( /SocketMessageAction options required/ )
    })

    it('should error when no options.action', function(){
      let fn = ()=> {
        new SocketMessageAction(
          "evname",
          { some: 'data' },
          { bction: "something" }
        )
      }
      expect( fn ).to.throw( /SocketMessageAction options.action required/ )
    })

  })

  describe('SocketMessageReply', function(){

    it('should create a SocketMessageReply instance', function(){
      let smr = new SocketMessageReply(
        "event",
        { some: 'data' },
        { replyid: "uuid" }
      )
      expect( smr ).to.be.ok
    })

    it('should create a Reply from incoming message', function () {
      let smr = SocketMessageReply.fromIncoming(
        {id: 2, data: { wakka:true}},
        { newmessage: 'data'}
      )
    })

    it('should error when no options', function(){
      let fn = ()=> {
        new SocketMessageReply(
          "evname",
          { some: 'data' },
        )
      }
      expect( fn ).to.throw( /SocketMessageReply options required/ )
    })

    it('should error when no options.replyid', function(){
      let fn = ()=> {
        new SocketMessageReply(
          "evname",
          { some: 'data' },
          { bplyid: "something" }
        )
      }
      expect( fn ).to.throw( /SocketMessageReply options.replyid required/ )
    })

  })

})
