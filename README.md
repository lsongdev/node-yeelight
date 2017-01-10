## Yeelight ![yeelight2@1.0.0](https://img.shields.io/npm/v/yeelight2.svg)

> A Node.js lib for the yeelight bulb

### Installation

```bash
$ npm i yeelight2
```

### Example

```js
const Yeelight = require('yeelight2');

Yeelight.discover(function(light){
  
  function blink(){
    light.toggle();
  };
  
  setInterval(blink, 5000);
  
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