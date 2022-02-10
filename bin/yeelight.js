#!/usr/bin/env node

const Yeelight = require('..');
const program = require('kelp-cli');

const getLight = ({ id, name, address, port }) => new Promise((resolve, reject) => {
  if(address) return resolve(new Yeelight(address, port));
  const r1 = new RegExp(id, 'i');
  const r2 = new RegExp(name, 'i');
  const discover = Yeelight.discover(light => {
    if(id && name && r1.test(light.id) && r2.test(light.name)) {
      discover.close();
      resolve(light);
    } else if(id && r1.test(light.id)) {
      discover.close();
      resolve(light);
    } else if(name && r2.test(light.name)) {
      discover.close();
      resolve(light);
    } else if (!id && !name) {
      discover.close();
      resolve(light);
    }
  });
});

program()
.command('search', async ({ timeout = 5 }) => {
  console.log('Searching ... [Press `ctrl-c` to exit]');
  console.log('	ID            NAME		ADDRESS');
  Yeelight.discover(light => {
    console.log(light.id, light.name || '[no name]', light.address);
  });
})
.command('power', async ({ _: [ state ], effect, duration, mode, ...opts }) => {
  const light = await getLight(opts);
  await light.set_power(state, effect, duration, mode);
  light.close();
})
.command('help', () => {

})
.parse();
