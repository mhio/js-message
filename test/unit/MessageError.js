const { MessageError } = require('../../Message')

describe('MessageError', function(){

  it('should load MessageError', function(){
    expect( MessageError ).to.be.ok
  })

  it('should create a MessageError instance', function(){
    let md = new MessageError()
    expect( md ).to.be.ok
  })

})
