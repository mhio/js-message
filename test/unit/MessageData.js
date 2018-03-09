const { MessageData } = require('../../src/Message')

describe('MessageData', function(){

  it('should load MessageData', function(){
    expect( MessageData ).to.be.ok
  })
 
  describe('instance', function () {
    
    let md = null

    beforeEach(function () {
      md = new MessageData({ some: 'data' })
    });

    it('should create a MessageData instance', function(){
      md = new MessageData()
      expect( md ).to.be.ok
    })

    it('should create a blank MessageData', function(){
      md = new MessageData()
      expect( md ).to.have.property('data').and.eql({})
    })

    it('should create a MessageData', function(){
      expect( md ).to.have.property('data').and.eql({some: 'data'})
    })

    it('should get data from MessageData', function(){
      expect( md.get('some') ).to.equal( 'data' )
    })

    it('should set data in MessageData', function(){
      let md = new MessageData()
      expect( md.set('some', 'data') ).to.equal( 'data' )
      expect( md.get('some') ).to.equal( 'data' )
    })

    it('should fail to set non object data on MessageData', function(){
      md = new MessageData('test')
      let fn = () => md.set('some')
      expect( fn ).to.throw(/set value on non object: string/)
    })

    it('should fail to get non object data on MessageData', function(){
      md = new MessageData('test')
      let fn = () => md.get('some')
      expect( fn ).to.throw(/get value from non object: string/)
    })

  })

})
