const tcp = require('net');
/**
 * [Yeelight description]
 * @docs http://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf
 */
function Yeelight(address, port){
  this.socket = tcp.createSocket();
}

Yeelight.prototype.get_prop = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_name = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_ct_abx = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_rgb = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_hsv = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_bright = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_default = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.start_cf = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.stop_cf = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_scene = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.cron_add = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.cron_get = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.cron_del = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_adjust = function (name){
  return this.command('get_prop', arguments);
};

Yeelight.prototype.set_music = function (name){
  return this.command('get_prop', arguments);
};

module.exports = Yeelight;