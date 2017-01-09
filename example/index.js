const Yeelight = require('..');

const light = new Yeelight('localhost', 55443);

light
.on('connected', function(){
  console.log('connected');
  
  light.set_power(true).then(function(res){
    console.log(res);
  });
  
})
.on('disconnected', function(){
  console.log('disconnected');
})
.on('props', function(params){
  console.log('xxxx->', params);
});