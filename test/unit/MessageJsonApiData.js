const { MessageJsonApiData } = require('../../src/Message')

describe('MessageJsonApiData', function(){

  it('should load MessageJsonApiData', function(){
    expect( MessageJsonApiData ).to.be.ok
  })
 
  describe('instance', function () {
    
    let md = null

    beforeEach(function () {
      md = new MessageJsonApiData({ id: 1, type: 'me' }, ['inc'],{ ts: 1 }, { links: { self: 'url' }}, { v: '1' })
    });

    it('should create a MessageJsonApiData instance', function(){
      md = new MessageJsonApiData()
      expect( md ).to.be.ok
    })

    it('should create a blank MessageJsonApiData', function(){
      md = new MessageJsonApiData()
      expect( md ).to.have.property('data').and.eql(undefined)
      expect( md ).to.have.property('included').and.eql(undefined)
      expect( md ).to.have.property('meta').and.eql(undefined)
      expect( md ).to.have.property('links').and.eql(undefined)
      expect( md ).to.have.property('jsonapi').and.eql(undefined)
    })

    it('should create a MessageJsonApiData', function(){
      expect( md ).to.have.property('data').and.eql({ id: 1, type: 'me' })
      expect( md ).to.have.property('included').and.eql(['inc'])
      expect( md ).to.have.property('meta').and.eql({ ts: 1 })
      expect( md ).to.have.property('links').and.eql({ links: { self: 'url' } })
      expect( md ).to.have.property('jsonapi').and.eql({ v: '1' })
    })
  
    it('should JSON to nothing', function(){
      md = new MessageJsonApiData()
      expect( JSON.stringify(md) ).to.equal('{}')
    })

    it('should JSON to nothing', function(){
      let str = '{"meta":{"ts":1},"links":{"links":{"self":"url"}},"jsonapi":{"v":"1"},"data":{"id":1,"type":"me"},"included":["inc"]}'
      expect( JSON.stringify(md) ).to.equal( str )
    })

  })

})
