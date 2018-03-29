const Benchmark = require('benchmark')

let suite = new Benchmark.Suite()

suite.add('Date.now()', function testA(){
  Date.now()
})
suite.add('seconds', function testmessage(){
  Math.floor( Date.now() / 1000 )
})
suite.add('string seconds', function testmessage(){
  let d = Date.now().toString()
  d.substr(0,d.length-2)
})

.on('cycle', event => console.log(String(event.target)) )
.on('error', error => console.error('error', error.target.error) )
.on('complete', function(){ 
  console.log('Fastest is ' + this.filter('fastest').map('name')) 
})
.run({ 'async': false })
