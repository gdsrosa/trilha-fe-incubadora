// CommonJS
const modulo = require('modulo');
modulo.print();

module.exports

// ES6+ 
import Modulo from 'modulo'
modulo.print()


//Default

// a.js
const sum = (x, y) => x + 2

export default sum;

// b.js 
import Abobrinha from './a'


//Named exports

// x.js 
export const subtract = (x, y) => x - y

// export { subtract };


//y.js
import { subtract } from './x'

subtract(1,2);
