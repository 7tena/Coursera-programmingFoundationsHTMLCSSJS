function dolime(){
  var d1element= document.getElementById("div1");
  d1element.style.backgroundColor="lime";
}

function doyellow(){
  var d1element= document.getElementById("div1");
  d1element.style.backgroundColor="white";
  var ctx=d1element.getContext("2d");
  ctx.fillStyle="yellow";
  ctx.fillRect(20,20,80,40);
  
  ctx.fillStyle="black";
  ctx.font="30px arial";
  ctx.fillText("Hello",20,90);
  
}

function makeorange(){
  var d1element= document.getElementById("div1");
  var ctx=d1element.getContext("2d");
  ctx.clearRect(20,20,80,40);
  ctx.fillText("athena",20,90,);
  d1element.style.backgroundColor="orange";
  
}