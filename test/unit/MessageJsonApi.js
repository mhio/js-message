const { MessageJsonApi } = require('../../src/Message')

describe('MessageJsonApi', function(){

  it('should load MessageJsonApi', function(){
    expect( MessageJsonApi ).to.be.ok
  })
 
  describe('instance', function () {
    
    let md = null

    beforeEach(function () {
      md = new MessageJsonApi({ ts: 111 }, { links: { self: 'https://some.url/' }}, { version: 'v1' })
    });

    it('should create a MessageJsonApi instance', function(){
      md = new MessageJsonApi()
      expect( md ).to.be.ok
    })

    it('should create a blank MessageJsonApi', function(){
      md = new MessageJsonApi()
      expect( md ).to.have.property('meta').and.eql(undefined)
      expect( md ).to.have.property('links').and.eql(undefined)
      expect( md ).to.have.property('jsonapi').and.eql(undefined)
    })

    it('should create a MessageJsonApi', function(){
      expect( md ).to.have.property('meta').and.eql({ ts: 111 })
      expect( md ).to.have.property('links').and.eql({ links: { self: 'https://some.url/' } })
      expect( md ).to.have.property('jsonapi').and.eql({ version: 'v1' })
    })
  
    it('should JSON to nothing', function(){
      md = new MessageJsonApi()
      expect( JSON.stringify(md) ).to.equal('{}')
    })

    it('should JSON to nothing', function(){
      expect( JSON.stringify(md) ).to.equal('{"meta":{"ts":111},"links":{"links":{"self":"https://some.url/"}},"jsonapi":{"version":"v1"}}')
    })

  })

})
