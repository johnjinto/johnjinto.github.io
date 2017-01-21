
//var userName = 'Danny';
//var myAge = 6;

var go= document.getElementById('go-btn');


    go.onclick = function () {
 //     var userName = document.getElementById('userName').value;
      var myAge = document.getElementById('myAge').value;
      var monthsDone = myAge*12;
      // total months for 75 years =900
      var monthsYet = 900-monthsDone;
     document.getElementById("boxDone").innerHTML = " ";
     document.getElementById("boxYet").innerHTML = " ";
        // Create a request object
 /*  CODE TO ENTER IN DATABASE SUPPRESED NOW


      var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  go.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  go.value = '!!';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = '!!';
              }
              
          }  
          // Not done yet
*/
        var i=0;
        for (i=0;i<monthsDone;i++)
        {
            document.getElementById("boxDone").innerHTML += "&#9813";
        
        }
        

        var j=0;
         for (j=0;j<monthsYet;j++)
        {
            document.getElementById("boxYet").innerHTML += "&#9813";
        
        }
        };
        
        // Make the request
       // request.open('POST', '/reg-age', true);
       // request.setRequestHeader('Content-Type', 'application/json');
       // request.send(JSON.stringify({userName: userName, myAge: myAge}));  

   // };
