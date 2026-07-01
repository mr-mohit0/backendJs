
const funcs = require('./module1');
// or
// const { add, division } = require('./module1');
//or
// const [add,sub,division,] = require('./module1');
console.log(funcs.add(0,5));
console.log(funcs.division(5,0));
// import { add } from "./module"
// console.log(funcs);
// console.log(funcs.add(2, 5))
// console.log(funcs.sub(2, 5))
// try { console.log(funcs.division(5, 0)) } catch (error) {
//     console.log(error)
// }
// console.log(add(1,2))
// console.log(require);