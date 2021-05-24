function docolor(){
  var element=document.getElementById("canvas");
  var colorinput=document.getElementById("clr");
  var color=colorinput.value;
  element.style.backgroundColor=color;
}

 function dosquare(){
   var d1 = document.getElementById("canvas");
   var sizeinput = document.getElementById("sldr");
   var size = sizeinput.value;
   var ctx = d1.getContext("2d");
   ctx.clearRect(0,0,d1.width,d1.height);
   ctx.fillStyle = " yellow ";
   ctx.fillRect(30,30,size,size);
}