// node js buffer is a uintArray () typed buffer array
import { Buffer } from 'buffer'
 const a = new ArrayBuffer(4)
const buffer =  Buffer.alloc(4);
const buffer1 =  Buffer.from(a);
console.log(buffer.buffer)
console.log(buffer1.buffer,"\n")
console.log(Buffer.poolSize )
