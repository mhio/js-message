const { MessageJsonApiError } = require('../../src/Message')

describe('MessageJsonApiError', function(){

  it('should load MessageJsonApiError', function(){
    expect( MessageJsonApiError ).to.be.ok
  })
 
  describe('instance', function () {
    
    let md = null

    beforeEach(function () {
      md = new MessageJsonApiError(new Error('blarp'), { ts: 1 }, { links: { self: 'url' }}, { v: '1' })
    });

    it('should create a MessageJsonApiError instance', function(){
      md = new MessageJsonApiError()
      expect( md ).to.be.ok
    })

    it('should create a blank MessageJsonApiError', function(){
      md = new MessageJsonApiError()
      expect( md ).to.have.property('meta').and.eql(undefined)
      expect( md ).to.have.property('links').and.eql(undefined)
      expect( md ).to.have.property('jsonapi').and.eql(undefined)
      expect( md ).to.have.property('errors').and.eql([])
    })

    it('should create a MessageJsonApiError', function(){
      expect( md ).to.have.property('meta').and.eql({ ts: 1 })
      expect( md ).to.have.property('links').and.eql({ links: { self: 'url' } })
      expect( md ).to.have.property('jsonapi').and.eql({ v: '1' })
      expect( md ).to.have.property('errors')
      expect( md.errors ).to.have.length(1)
      expect( md.errors[0] ).to.be.instanceOf( Error )
    })
  
    it('should JSON to nothing', function(){
      md = new MessageJsonApiError()
      expect( JSON.stringify(md) ).to.equal('{"errors":[]}')
    })

    it('should JSON to something', function(){
      expect( JSON.stringify(md) ).to.equal('{"meta":{"ts":1},"links":{"links":{"self":"url"}},"jsonapi":{"v":"1"},"errors":[{}]}')
    })

  })

})
