const Yeelight = require('..');

Yeelight.discover(function(light){
  
  function blink(){
    light.toggle();
  };
  
  setInterval(blink, 5000);
  
});

