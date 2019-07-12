"use strict"

// async function foo(){
//     return 42;
// }

// async function bar(){
//     let r = await foo()
//     console.log(r)
// }

// bar()

// console.log("Einde programma")

// function* getList (start, end){
//     for(let i = start; i < end; i++)
//     if(i % 3 === 0){
//         yield i;
//     }
// }

// for (let n of getList(0,50)){
//     console.log(n)
// }

// SYNCHRONOUS

// function square(start, end){
//     let r = [];
//     for(let i = start; i < end; i++){
//         console.log("Yielding ... ");       
//          r.push(Math.pow(i,2));
//     }
//     return r;
// }

// for (let n of square(1,25)){
//     console.log(n)
// }

// ASYNCHRONOUS

function * square(start, end){
    for(let i = start; i < end; i++){
        console.log("yielding")
          yield Math.pow(i,2);
    }
}

setTimeout(function print(){
    for (let n of square(1,25)){
    console.log(n)}
}, 1500)

