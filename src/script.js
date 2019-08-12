

var arrayPrice =[];

function createObj(){
  var y = document.getElementById("BB").value;
  if( y === "bigbertha"){
    arrayPrice.push(100);
  } 
}

var priceArrayMaster = [{bigbertha: 100} ];
var price = priceArrayMaster.bigbertha;
 var array1 =[];
var x = 0;
function addDriver(){
  
  array1.push(document.getElementById("BB").value);
  x++;
  
  
}


function addPrice(){
  
  arrayPrice.push(priceArrayMaster[document.getElementById("BB").value2].bigbertha);
  x++;
}






function display_array2(){
 
  
  var x;
  for (x = 0; x < array1.length; x++){
    var e;
    var text = array1[x] + "<br>" + text;
    document.getElementById("Result").innerHTML += "<p>" + array1[x] + "</p><br>";
  }
}

function display_arrayPrice(){
 
   
  var x;
  for (x = 0; x < arrayPrice.length; x++){
    var e;
    var text = arrayPrice[x] + "<br>" + text;
    document.getElementById("display").innerHTML += "<p>" + arrayPrice[x] + "</p><br>";
  }
}