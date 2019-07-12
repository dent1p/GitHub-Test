// function getAgeBasedOnCurrentandBirthYearPromise(current,birth){
//     if(current-birth>0){
//         return Promise.resolve(current-birth)
//     } 
//     else{
//         return Promise.reject()
//     }
// }

// function ok(){
//     console.log("Dat is ok!")
// }

// function fail(){
//     console.log("Fout!")
// }

// function getAge(current,birth){
//     let promisedAge = getAgeBasedOnCurrentandBirthYearPromise(current, birth);
//     console.log(promisedAge)

//     promisedAge.then(ok,fail)
// }

// getAge(1968,2018)

async function getAgeBasedOnCurrentandBirthYearPromise(current,birth){
    if(current-birth > 0){
        return current-birth
    } 
    else{
        return `Dat is fout!`
    }
}

async function getAge(current,birth){
    let promisedAge = await getAgeBasedOnCurrentandBirthYearPromise(current, birth);
    console.log(promisedAge)
}

getAge(2018,1968)