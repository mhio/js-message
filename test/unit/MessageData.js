const { MessageData } = require('../../Message')

describe('MessageData', function(){

  it('should load MessageData', function(){
    expect( MessageData ).to.be.ok    
  })
 
  it('should create a MessageData instance', function(){
    let md = new MessageData()
    expect( md ).to.be.ok
  })
  
})
