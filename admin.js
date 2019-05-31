var addFood = document.getElementById('foodName');
var addPrice = document.getElementById('price');
var foodBtn = document.getElementById('foodBtn');
// var tbody = document.getElementById('tbody');

foodBtn.addEventListener('click',createFood);

function createFood() {
    addFood = document.getElementById('foodName').value;
    addPrice = parseInt(document.getElementById('price').value);
    if (addFood === '' || addPrice === '') {
        alert('please fill the boxes')
    }else {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/food";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            var json = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
        }
    };
    var data = JSON.stringify({"food": addFood, "price":addPrice});
    // console.log(data);
    xhr.send(data);
    // document.getElementById('foodForm').reset();
    // return false;
}
}

var check = document.getElementById('check');
check.addEventListener('click',checkOrders);

function checkOrders() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/order";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json =JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
    document.write(this.responseText);

}