console.log('Loaded!');

//var element = document.getElementById('phrase');

//element.innerHTML = 'Jesus is God';

var img = document.getElementById('pup');

var marginLeft = 0;
function moveRight(){ 

marginLeft = marginLeft+0.5;
pup.style.marginLeft = marginLeft + 'px';

};

img.onclick = function (){

var interval = setInterval(moveRight, 100); 

};