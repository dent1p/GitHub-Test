// function intdivide(){
//     if(b===0){
//         throw new Error()
//     }
// }

// try{
//     let c = divide(3,0)
//     console.log(c)
// }
// catch(e){
//     console.log("Cannot divide through 0")
// }


// function concat(name1,name2){
//     if(name2 !== "Maxima"){
//         return `${name1},${name2}`;
//     }
//     else {
//       throw new Error()
//     }
// }

// try{
//    console.log(concat("mark","Maxima"));
// }
// catch(e){
//      console.log("Fout");
// }

let srt = ['March','February','May','April','December','January',
'June','August','July','September','October','November']
srt.sort((a,b)=> {
    if(b < a){
        return -1;
    }
    if(b > a){
        return 1;
    }
    return 0;
})

console.log(srt)