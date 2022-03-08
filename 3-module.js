const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
console.log(john,peter);
const data =require('./6-alt-flavour')
require('./7-mind-grenade')

console.log(data);

sayHi("Abba")
sayHi(john)
sayHi(peter)