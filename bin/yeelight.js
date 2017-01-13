#!/usr/bin/env node

const Yeelight = require('..');

var argv = process.argv.slice(2);
var params = argv.slice(1);
var method = argv[0];

if(typeof method === 'undefined'){
  return console.error('[Yeelight] method are required!');
}

Yeelight.discover(function(light){

  light.exec(method, params).then(function(res){
    process.exit(0);
  });

});