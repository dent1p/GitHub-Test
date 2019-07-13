
"use strict"


const x = [];
document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  x.push({ FirstName: e.target.elements.firstname.value, 
  LastName: e.target.elements.lastname.value });
})
console.log(x)
