function getSize(){
    return document.getElementById("pizzasize").value;
}

function getMeat(){
    var array = [];
    var checkboxes = document.querySelectorAll('#meat input[type=checkbox]:checked');

    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].name);
    }
    console.log(array);
    return array;
}

function getVeg(){
    var array = [];
    var checkboxes = document.querySelectorAll('#veg input[type=checkbox]:checked');

    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].name);
    }
    console.log(array);
    return array;
}

function getCheese(){
    var ans = 0;
    var radios = document.querySelectorAll('input[name="cheese"]:checked');
    if (radios[0].value == 'Regular'){
        ans=1;
    }
    else if (radios[0].value == 'No'){
        ans=2;
    }
    else if (radios[0].value == 'Extra'){
        ans=3;
    }
    console.log(ans);
    return ans;
}

function ChangePizzaSize(){
    size=getSize();
    if (size == 1){
        document.getElementById("pizzaimg").style.width = "100px";
        document.getElementById("imglabel").innerHTML = "Small 6$";
    }
    else if (size == 2){
        document.getElementById("pizzaimg").style.width = "150px";
        document.getElementById("imglabel").innerHTML = "Medium 10$";
    }
    else if (size == 3){
        document.getElementById("pizzaimg").style.width = "200px";
        document.getElementById("imglabel").innerHTML = "Large 14$";
    }
    else if (size == 4){
        document.getElementById("pizzaimg").style.width = "250px";
        document.getElementById("imglabel").innerHTML = "X-Large 16$";
    }
}

function calculateTotal(){
    size=getSize() ;
    sizeprice=0;
    meat = getMeat().length;
    veg = getVeg().length;
    cheese = getCheese();
    if (size == 1){
       sizeprice=6;
    }
    else if (size == 2){
        sizeprice=10;
    }
    else if (size == 3){
        sizeprice=14;
    }
    else if (size == 4){
        sizeprice=16;
    }

    price = sizeprice + meat*2 + veg;
    if (cheese == 3 ){
        price += 3;
    }
    console.log(price);
    return price;
}

function fillSummary() {
    var first="";
    var last="";
    var number="";
    var country="";
    var address="";
    var sizeprice='';
    var total= calculateTotal();

    first = document.getElementById("first").value;
    last = document.getElementById("last").value;
    mail = document.getElementById("mail").value;
    number = document.getElementById("phone").value;
    country = document.getElementById("country").value;
    address = document.getElementById("address").value;
    document.getElementById("dlvrTo").innerHTML = first + " " + last + " " + number + " " + country + ' - ' + address;

    document.getElementById("total").innerHTML = 'Total: ' + total + ' $';

    size=getSize() ;
    meat = getMeat();
    veg = getVeg();
    cheese = getCheese();

    var ul = document.getElementById("orderList");
    var sizeli = document.createElement("li");
    var cheeseli = document.createElement("li");
    

    if (size == 1){
        sizeprice='Small';
     }
     else if (size == 2){
         sizeprice='Medium';
     }
     else if (size == 3){
         sizeprice='Large';
     }
     else if (size == 4){
         sizeprice='X-Large';
     }
    sizeli.appendChild(document.createTextNode('-' + sizeprice + ' size'));
    ul.appendChild(sizeli)

    if (cheese == 1){
        cheeseli.appendChild(document.createTextNode('Regular Cheese'));
    }
    else if (cheese == 2){
        cheeseli.appendChild(document.createTextNode('No Cheese'));
    }
    else if (cheese == 3){
        cheeseli.appendChild(document.createTextNode('Extra Cheese'));
    }

    for (var i = 0; i < meat.length; i++) {
        var singlemeat = document.createElement("li");
        singlemeat.appendChild(document.createTextNode(meat[i]));
        ul.appendChild(singlemeat);
    }

    for (var i = 0; i < veg.length; i++) {
        var singleveg = document.createElement("li");
        singleveg.appendChild(document.createTextNode(veg[i]));
        ul.appendChild(singleveg);
    }
}

function checkInfo() {
    var first= document.getElementById("first");
    var last= document.getElementById("last");
    var mail= document.getElementById("mail");
    var phone= document.getElementById("phone");
    var country= document.getElementById("country");
    var address= document.getElementById("address");

    if (first.value.length == 0 || last.value.length == 0 || mail.value.length == 0 || phone.value.length == 0 || country.options.length == 0 || address.value.length == 0 ){
        alert('WARNING! EMPTY FIELD');
    }
    else{
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "none";
        document.getElementById("OrderSummary").style.display = "block";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#3fc38e";
    }
}

function gotoPage (pagenum) {
    console.log(pagenum)
    if (pagenum == 1){
        document.getElementById("section1").style.display = "block";
        document.getElementById("section2").style.display = "none";
        document.getElementById("OrderSummary").style.display = "none";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#01dddd";
    }
    else if (pagenum == 2){
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "block";
        document.getElementById("OrderSummary").style.display = "none";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#e93a57";
    }
}