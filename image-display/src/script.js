//function upload(){
 // var fileinput = document.getElementById("fin");
  //var filenm = fileinput.value;
  //alert("You chose" + filenm);
  //var image = new SimpleImage(fileinput);
  //var canvas = document.getElementById("can");
  //image.drawTo(canvas);
  //}
var fileImage = null;

function loadImageFile(){
  var canvas1 = document.getElementById("can1");
  var imgFile = document.getElementById("imgfile");
  fileImage = new SimpleImage(imgFile);
  fileImage.drawTo(canvas1);
}

function makegrey(){
  var newImage = new SimpleImage(fileImage);
  for (var pixel of newImage.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas2 = document.getElementById("can2");
  newImage.drawTo(canvas2);
}