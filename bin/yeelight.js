#!/usr/bin/env node

const Yeelight = require('..');

var argv = process.argv.slice(2);
var params = argv.slice(1);
var method = argv[0];

if(typeof method === 'undefined'){
  return console.error('[Yeelight] method are required!');
}

Yeelight.discover(function(light, response){

  if(method in light){
    light[ method ].apply(light, params).then(function(res){
      process.exit(0);
    }, function(err){
      console.error(err);
      process.exit(1);
    });  
  }else{
    console.error('method `%s` not exists', method)
    process.exit(2);
  }

});