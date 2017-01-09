const Yeelight = require('..');

const light = new Yeelight('localhost', 55443);

light.set_power(true);