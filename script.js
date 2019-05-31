
var fullName = document.getElementById('name');
var food = document.getElementById('food');
var quantity = document.getElementById('quantity');
var locate = document.getElementById('locate');


var btn =  document.getElementById('order');
var btn2 = document.getElementById('update');
var btn3 = document.getElementById('get');
var btn4 = document.getElementById('delete');

btn.addEventListener('click',post);

function post(){

    fullName = document.getElementById('name').value;
    food = document.getElementById('food').value;
    quantity = document.getElementById('quantity').value;
    locate = document.getElementById('locate').value;
    if (fullName == "" || food == "" || quantity == "" || locate == "") {
        alert('Pleases fill all boxes');
    }
    else{
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/order";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            var json = JSON.parse(xhr.responseText);
        }
    };
    var data = JSON.stringify({"name": fullName, "food": food, "quantity":quantity,"place":locate});
    xhr.send(data);
    console.log(food,locate,quantity,fullName);
    document.getElementById('addPost').reset();
    // return false;
    }
}









