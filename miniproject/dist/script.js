var fileImage = null;
var canvas1 = document.getElementById("can1");
var canvas2 = document.getElementById("can2");

function loadFile(){
  var imgFile = document.getElementById("img");
  fileImage = new SimpleImage(imgFile);
  fileImage.drawTo(canvas1);
}

function makegray(){
  var grayimage = new SimpleImage(fileImage);
  for (var pixel of grayimage.values())
  {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  grayimage.drawTo(canvas2);
}

function clearCanvas() {
  doClear(canvas1);
  doClear(canvas2);
  fileImage=null;
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}