const url          = require('url');
const tcp          = require('net');
const util         = require('util');
const EventEmitter = require('events');
/**
 * [Yeelight description]
 * @docs http://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf
 */
function Yeelight(address, port){
  this.queue = [];
  EventEmitter.call(this);
  this.socket = new tcp.Socket();
  this.socket
  .on('data', this.parse.bind(this))
  .on('end', function(){
    this.connected = false;
    this.emit('disconnected');
  }.bind(this))
  .connect(port, address, function(err){
    this.connected = true;
    this.emit('connected');
  }.bind(this))
  return this;
};

util.inherits(Yeelight, EventEmitter);

Yeelight.prototype.parse = function(data){
  var message = JSON.parse(data.toString());
  console.log(message);
};

Yeelight.prototype.command = function(method, params){
  var id = parseInt(Math.random() * 1000, 10);
  var request = {
    id    : id,
    method: method,
    params: params
  };
  var message = JSON.stringify(request);
  this.socket.write(message + '\r\n');
  request.promise = new Promise(function(accept, reject){
    request.accept = accept;
    accept.reject  = reject;
  });
  this.queue.push(request);
  return request.promise;
};

Yeelight.prototype.get_prop = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_name = function (name){
  return this.command('set_name', arguments);
};

Yeelight.prototype.set_ct_abx = function (name){
  return this.command('set_ct_abx', arguments);
};

Yeelight.prototype.set_rgb = function (name){
  return this.command('set_rgb', arguments);
};

Yeelight.prototype.set_hsv = function (name){
  return this.command('set_hsv', arguments);
};

Yeelight.prototype.set_bright = function (name){
  return this.command('set_bright', arguments);
};

Yeelight.prototype.set_power = function (power, effect, duration){
  power =  (!!power || power === 'on') ? 'on' : 'off';
  effect = effect || 'smooth';
  duration = duration || 500;
  return this.command('set_bright', [ power, effect, duration  ]);
};

Yeelight.prototype.toggle = function (){
  return this.command('toggle');
};

Yeelight.prototype.set_default = function (name){
  return this.command('set_default', arguments);
};

Yeelight.prototype.start_cf = function (name){
  return this.command('start_cf', arguments);
};

Yeelight.prototype.stop_cf = function (name){
  return this.command('stop_cf', arguments);
};

Yeelight.prototype.set_scene = function (name){
  return this.command('set_scene', arguments);
};

Yeelight.prototype.cron_add = function (name){
  return this.command('cron_add', arguments);
};

Yeelight.prototype.cron_get = function (name){
  return this.command('cron_get', arguments);
};

Yeelight.prototype.cron_del = function (name){
  return this.command('cron_del', arguments);
};

Yeelight.prototype.set_adjust = function (name){
  return this.command('set_adjust', arguments);
};

Yeelight.prototype.set_music = function (name){
  return this.command('set_music', arguments);
};

Yeelight.prototype.close = function(){
  this.socket.end();
  return this;
};

module.exports = Yeelight;