let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUp(firstName, prop){
for (let i = 0; i < contacts.length; i++){
  if(contacts[i].firstName === firstName){
      if(contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]
      } else {
        return 'No such property'
      }
    }
  }
  return 'No such contact'
}

console.log(lookUp("Harry", "likes"))

let n = 120;

for(let i = 23; i <= n; i++){
  if(i % 5 === 0){
    console.log(i);
  }
}

class CanaryCage{
  constructor(name, color){
    this.name = name
    this.color = color
  }
  getNameAndColor() {
    return `Canary '${this.name}' has the following color: ${this.color}`
  }
}

let canaryOne = new CanaryCage('Bert', 'blue')
let canaryTwo = new CanaryCage('Mark', 'white')
let canaryThree = new CanaryCage('Michael', 'grey')

let canaryCollection = [];
canaryCollection.push(canaryOne,canaryTwo,canaryThree)

for (let canary of canaryCollection) {
  console.log(canary.name)
}

for (let canary of canaryCollection){
  console.log(canary.getNameAndColor())
}

My solution:
function hundred(n1, n2){
  if (n1 === 100 || n2 === 100 || n1 + n2 === 100){
    return true
  } else {
    return false
  }
}

console.log(hundred(10, 10))

//Teacher's solution
const isEqualTo100 = (a,b) => a === 100 || b === 100 || a+b === 100;

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'))

const moveCharsForward = (str) => 
  str
  .split('')
  .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
  .join('')

  console.log(moveCharsForward('abcd'))

let numbers = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

 numbers.forEach(number => number * 2);

console.log(edc)

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd<10){
  dd = '0'+dd
}

if(mm<10){
  mm = '0'+mm
}
today = `${mm}/${dd}/${yyyy}`
console.log(today)

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`
}

console.log(formatDate())

const addNew = (str) => 
    str.startsWith('New!') ? str : `New! ${str}`;

console.log(addNew('New! Offers'))

// Class Canary with promise
class Canary {
    constructor (seed){
        this.seed = seed;
    }

  canarySeed () {
      if (this.seed > 0){
          return Promise.resolve(this.seed + 1)
      }
      else{
          return Promise.reject(`${this.seed}`)
      }
  } 

  ok(){
      console.log(`Canary is happy!`)
  }

  fail(){
      console.log(`Canary is not happy!`)
  }

  getCanarySeed(){
      let x = this.canarySeed()
      console.log(x)
      x.then(this.ok, this.fail)
  }
}

let canary = new Canary(0);
canary.getCanarySeed();

// Class Canary with anync await
class Canary {
    constructor(seed) {
        this.seed = seed;
    }

    async canarySeed() {
        if (this.seed > 0) {
            return `Canary is happy and 1 seed is added: ${this.seed + 1}`
        }
        else {
            return `Canary is not happy: she/he has got ${this.seed} seed`
        }
    }

    async getCanarySeed() {
        let x = await this.canarySeed()
        console.log(x)
    }
}

let canary = new Canary(0);
canary.getCanarySeed();


// Class Canary with anync await plus error handling
class Canary {
    constructor(seed) {
        this.seed = seed;
    }

    async canarySeed() {
        if (this.seed > 0) {
            return `Canary is happy and 1 seed is added: ${this.seed + 1}`
        }
        else {
            throw new Error()
        }
    }

    async getCanarySeed() {
        try {
            let x = await this.canarySeed()
            console.log(x)
        }
        catch(e){
            console.log(`Canary is not happy: she/he has got ${this.seed} seed`)
        }
    }
}

let canary = new Canary(0);
canary.getCanarySeed();
