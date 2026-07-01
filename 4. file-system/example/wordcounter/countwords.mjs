import { isUtf8 } from 'buffer';
import { ChildProcess } from 'child_process';
import { readFile } from 'fs'
import fs from 'fs/promises'
const dynamicefilepath = process.argv[2];
const data = await fs.readFile(dynamicefilepath, isUtf8);
// console.log(data.toString())
const data2 = data.toString().split(' ');
let count = {totalcount : 0,};
data2.forEach((elem,index) => {
    if (elem in count)
    {
        count[elem] += 1;
    }
    else {
        count[elem] = 1;
    }
    count.totalcount += 1;
})

console.log(count);
