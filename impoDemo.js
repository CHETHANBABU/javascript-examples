// different kiinds of imports and require
import person from './expoDemo2'; // default exports
import { clean, baeData } from './expoDemo3'; //named exports
import * as bundled from './expoDemo3'; //exports all named as buldled property
const myModule = require('./expoDemo');
const myModule1 = require('./expoDemo1');
let val = myModule.hello(); // val is "Hello"

console.log('Expo', val);
console.log('Expo 1', myModule1.hello());
console.log('Expo 2', person.name);
console.log('Expo 3', clean, baeData);

