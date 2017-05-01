const Yeelight = require('..');


function sleep(time){
  time = time || 3000;
  return function(o){
    return new Promise(fn => setTimeout(() => fn(o), time));
  };
}

Promise.resolve()
.then(() => new Promise(accept => {
  Yeelight.discover(function(light){
    this.close();
    accept(light);
  });
}))
.then(light => {
  light // get name
  .get_prop('name')
  .then(response => console.log('Your bulb name is: [%s]', response.name))
  return light;
})
.then(light => {
  light // turn on light
  .set_power('on')
  .then(response => console.log('turn on light succeed'))
  return light;
})
.then(light => {
  light // set color to white
  .set_rgb(0xffffff)
  .then(response => console.log('set color to white(0xffffff) succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light // set brightness to 30%
  .set_bright(30)
  .then(response => console.log('set brightness to 30% succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light
  .toggle()
  .then(response => console.log('toggle succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light
  .toggle()
  .then(response => console.log('toggle succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light // set brightness to 100%
  .set_bright(100)
  .then(response => console.log('set brightness to 100% succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light // set color to red
  .set_rgb(0xff0000)
  .then(response => console.log('set color to red(0xff0000) succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light // set color to green
  .set_rgb(0x00ff00)
  .then(response => console.log('set color to green(0x00ff00) succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light // set color to blue
  .set_rgb(0x0000ff)
  .then(response => console.log('set color to blue(0x0000ff) succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light // turn off light
  .set_power('off')
  .then(response => console.log('turn off light succeed'))
  return light;
})
.then(sleep())
.then(light => {
  light.exit();
  console.log('Bye! have a nice day :)');
})