var sketchProc=function(processingInstance){ with (processingInstance){

size(600, 600);

frameRate(100);





var i = 600;




draw = function()

{

background(66,127,171);
noStroke();

fill(65,139,171);


rect(0,0,i,600);
fill(33,10,171);
text("WELCOME TO VANTAGEPOINT", 150, 300);






i=i-1;




if(i<0)



{
exit();

}





};


}};