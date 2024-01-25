## Yeelight ![Yeelight2](https://img.shields.io/npm/v/yeelight2.svg)

> A Node.js lib for the yeelight bulb

### Installation

```bash
$ npm i yeelight2 --save
```

### Simple example

```js
const Yeelight = require('yeelight2');

(async () => { 
  const light = await Yeelight.find();
  console.log(light.name);
  light.toggle();
})();
```

Discover all devices in the network.

```js
const Yeelight = require('yeelight2');

Yeelight.discover(function(light){

  console.log(light.name);

  function blink(){
    light.toggle();
  }

  setInterval(blink, 2000);

  // `Yeelight.discover` can discover multiple devices untill the ssdp close.
  // So you need to close it manually. DO NOT FORGET IT.
  // Here is an example to close it after find the first device.
  // const discover = this;
  // discover.close(); // stop searching
});
```

Here is an example to close it after 10 seconds.

```js
const discover = Yeelight.discover(light => {
  console.log(light.name);
});

setTimeout(() => {
  discover.close(); // stop searching
}, 10000);
```

For a complete example look at <example/index.js> .


### Debug

```shell
NODE_DEBUG=yeelight
```

Then start your app.

### Documentation

see https://lsong.org/node-yeelight

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

Copyright (c) 2016 Lsong &lt;song940@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---

