
"use strict"


let x = [];
document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  x.push({ FirstName: e.target.elements.firstname.value, 
  LastName: e.target.elements.lastname.value });
  e.target.elements.firstname.value = '';
  e.target.elements.lastname.value = '';
})
console.log(x)


document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let x = [];
  x.push({
    FirstName: e.target.elements.firstname.value,
    LastName: e.target.elements.lastname.value
  });

  for (let o of x){
    console.log(o)
  }
  e.target.elements.firstname.value = '';
  e.target.elements.lastname.value = '';
})

