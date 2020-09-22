import { currying } from "./function/curry";

const multiply = (x: number, y: number, z: number) => x*y*z;

const curryMul = currying(multiply);
const result = curryMul(1)(2)(3); // 1*2*3 = 6console.log(curryPlus(1)(2)())
console.log(result);
