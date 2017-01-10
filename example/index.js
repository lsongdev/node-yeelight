const Yeelight = require('..');

Yeelight.discover(function(light){

  console.log(light.name);

  // light.set_name('Yeelight');
  // light.set_rgb(0xff00ff);
  // light.set_ct_abx(1700);
  // light.set_bright(50);
  
  function blink(){
    light.toggle();
  }
  setInterval(blink, 2000);
  
});

