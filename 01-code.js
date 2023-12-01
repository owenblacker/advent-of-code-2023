"use script";
import { open } from 'node:fs/promises';

const file = await open('./01-input.txt');
let gt = 0;
// let counter = 0;

for await (const line of file.readLines()) {
    let first = line.match(/^[a-z]*(\d)/);
    let last = line.match(/(\d)[a-z]*$/);

    console.log(`${line} -> (${first[1]}, ${last[1]}) -> ${String(first[1]) + String(last[1])}`);

    // counter++;
    // if (counter > 10)
    // {
    //     break;
    // }

    gt += Number(String(first[1]) + String(last[1]));
}

console.log(`Grand total is ${gt}`);