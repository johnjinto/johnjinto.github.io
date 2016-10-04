/* move angel to right
var img = document.getElementById('pup');


var marginLeft = 0;
function moveRight(){ 

marginLeft = marginLeft+0.5;
pup.style.marginLeft = marginLeft + 'px';

};

img.onclick = function (){

var interval = setInterval(moveRight, 100); 

};
*/
var img = document.getElementById('angel');

var flydwn = document.getElementById('downbutton');
var flyup = document.getElementById('upbutton');
var flyryt = document.getElementById('rightbutton');
var flyleft = document.getElementById('leftbutton');


var topinc = parseInt(img.style.top, 10);
var leftinc = parseInt(img.style.left, 10);

flydwn.onclick = function(){	
topinc = topinc+5;
img.style.top = topinc + 'px';
}

flyup.onclick = function(){	
topinc = topinc-5;
img.style.top = topinc + 'px';
}

flyryt.onclick = function(){	
leftinc = leftinc+5;
img.style.left = leftinc + 'px';

}

flyleft.onclick = function(){	
leftinc = leftinc-5;
img.style.left = leftinc + 'px';

}