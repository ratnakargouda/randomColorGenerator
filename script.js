'use strict';

var colors = ['white','red','blue','green','yellow','violet']
var len = colors.length -1;


var buttonControl = document.getElementById('btn');
var spanControl = document.querySelector('.color');

buttonControl.addEventListener('click',() =>{
    var index = generateRandomNumber();
    document.body.style.backgroundColor = colors[index];
    spanControl.textContent = colors[index];

})

function generateRandomNumber(){
   return Math.round(Math.random() * len);
}

