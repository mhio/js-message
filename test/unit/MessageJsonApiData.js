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

    it('should create a MessageJsonApiData message', function(){
      md = MessageJsonApiData.message({ id: 'msg' }, ['inc'])
      expect( md ).to.have.property('data').and.eql({ id: 'msg' })
      expect( md ).to.have.property('included').and.eql(['inc'])
      expect( md ).to.have.property('meta')
      expect( md.meta.id ).to.be.a('string').and.match(/^[0-9a-zA-Z]{18}$/)
      expect( md.meta.ts ).to.be.a('number')
    })

    it('should create a MessageJsonApiData message with metadata', function(){
      md = MessageJsonApiData.message({ id: 'msg' }, null, { extra: 'to' })
      expect( md ).to.have.property('meta')
      expect( md.meta.id ).to.be.a('string').and.match(/^[0-9a-zA-Z]{18}$/)
      expect( md.meta.ts ).to.be.a('number')
      expect( md.meta.extra ).to.equal('to')
    })

    it('should get some data', function(){
      expect( md.get('id') ).to.equal( 1 )
    })

    it('should set some data', function(){
      expect( md.set('id', 2) ).to.equal( 2 )
      expect( md.get('id') ).to.equal( 2 )
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
