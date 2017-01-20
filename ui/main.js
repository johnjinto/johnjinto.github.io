
//var userName = 'Danny';
//var myAge = 6;

var go= document.getElementById('go-btn');

console.log("In main");
        console.log(userName);
        console.log(myAge);

    go.onclick = function () {
      var userName = document.getElementById('userName').value;
      var myAge = document.getElementById('myAge').value;
        // Create a request object
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
        };
        
        // Make the request
        request.open('POST', '/reg-age', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({userName: userName, myAge: myAge}));  

    };
