var userName = document.getElementById('username');
var password = document.getElementById('password');
var loginUser = document.getElementById('btn');
let link = document.getElementById('link');


// login.addEventListener('click',postUser);
loginUser.addEventListener('click',login);

function login(){
    userName = document.getElementById('username').value;
    password =parseInt(document.getElementById('password').value);
    if(userName === 'ADMIN' && password === 1234){
        alert("Successfull");
        var path = window.location.pathname;
        var loc = path.substring(0, path.lastIndexOf('/'));
         window.location.href = loc + "/admin.html";
        
      }
   
}
