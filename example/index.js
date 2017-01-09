const Yeelight = require('..');

const light = new Yeelight('localhost', 55443);

light
.on('connected', function(){
  console.log('connected');
  
  light.set_power(true);
  
  // this.close();
  
})
.on('disconnected', function(){
  console.log('disconnected');
});