## yeelight ![yeelight@1.0.0](https://img.shields.io/npm/v/yeelight.svg)

> 

### Installation

```bash
$ npm install yeelight
```

### Example

```js
const Yeelight = require('yeelight2');

const light = new Yeelight('192.168.88.204', 55443);

light.set_power(true);

```

discover your blub

```js
const Discovery = require('ssdp2');

var ssdp = new Discovery();

ssdp.on('response', function(response){
  console.log(response.headers['Location']);
});

ssdp.listen(function(err){
  
  ssdp.search('*', {
    MAN: 'ssdp:discover',
    ST : 'wifi_bulb'
  });
  
});
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

---