const light = require('yeelight2')('yeelight://192.168.31.123:55443')

let brightness = 30

console.log('opening connection...')

let getName = () => light.get_prop('name')
  .then((response) => console.log('bulb name is : ' + response.name))
  .catch(() => console.log('failed at getting name :('))

let getBrightness = () => light.get_prop('bright')
  .then((response) => console.log('brightness is : ' + response.bright + '%'))
  .catch(() => console.log('failed at getting brightness :('))

let setBrightness = () => light.set_bright(brightness)
  .then(() => {
    console.log('set brightness to ' + brightness + '% succeed :)')
  })
  .catch(() => console.log('failed at setting brightness to ' + brightness + '% :('))

let increaseBrightness = () => setBrightness(brightness = brightness + 30)

let decreaseBrightness = () => setBrightness(brightness = brightness - 30)

let delay = (time) => {
  time = time || 2000
  return new Promise((resolve) => setTimeout(resolve, time))
}

let shortDelay = () => delay(1000)

let longDelay = () => delay(4000)

let toggle = () => light.toggle()
  .then(() => console.log('toggle succeed :)'))
  .catch(() => console.log('failed at toggling light :('))

let close = () => {
  console.log('closing connection...')
  light.exit()
}

getName()
  .then(setBrightness)
  .then(longDelay)
  .then(getBrightness)
  .then(increaseBrightness)
  .then(delay)
  .then(getBrightness)
  .then(toggle)
  .then(shortDelay)
  .then(toggle)
  .then(close)