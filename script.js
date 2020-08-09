var image=null;
var blurImg = null;
var imgcanvas;
function loadimage(){
  var file=document.getElementById("imgfile");
  image=new SimpleImage(file);
  imgcanvas=document.getElementById("imgcanvas");
  image.drawTo(imgcanvas);
}
function dogray(){
  if(image==null || !image.complete()){
    alert('Image not loaded');
  }
  else{
    for(var pixel of image.values()){
      var out=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      pixel.setRed(out);
      pixel.setGreen(out);
      pixel.setBlue(out);
    }
  }
  image.drawTo(imgcanvas);
}

function dored(){
  if(image==null || !image.complete()){
    alert('Image not loaded');
  }
  for (var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128)
    {
    pixel.setRed(2*avg);
    }
    else{
     pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
       }
  }
  image.drawTo(imgcanvas);
}

function reset(){
  if(image==null ||!image.complete()){
    alert('Image not loaded')
  }
  var file=document.getElementById("imgfile");
  image=new SimpleImage(file);
  image.drawTo(imgcanvas);
}

function rainbow() {
  var w=image.getWidth();
  var h=image.getHeight();
   if (imageIsLoaded(image)==true){
   for (var pixel of image.values()) 
   {
   var x = pixel.getX();
   var y = pixel.getY();
   var avg = (pixel.getRed()+pixel.getGreen()
+pixel.getBlue())/3;
   if (y<h/7) {
   if (avg<128) {
     pixel.setRed(2*avg);
     pixel.setBlue(0);
     pixel.setGreen(0);
   }
     else{
     pixel.setRed(255);
     pixel.setBlue(2*avg-255);
     pixel.setGreen(2*avg-255);  
     }
   }
     else if (y>h/7 && y<2*h/7){
     if (avg<128) {
     pixel.setRed(2*avg);
     pixel.setBlue(0.8*avg);
     pixel.setGreen(0);
   }
     else{
     pixel.setRed(255);
     pixel.setBlue(1.2*avg-51);
     pixel.setGreen(2*avg-255);  
     }       
 }
     else if (y>2*h/7 && y<3*h/7){
    if (avg<128) {
     pixel.setRed(2*avg);
     pixel.setBlue(2*avg);
     pixel.setGreen(0);
   }
     else{
     pixel.setRed(255);
     pixel.setBlue(255);
     pixel.setGreen(2*avg-255);  
     }     
     }
     else if (y>3*h/7 && y<4*h/7){
    if (avg<128) {
     pixel.setRed(0);
     pixel.setBlue(2*avg);
     pixel.setGreen(0);
   }
     else{
     pixel.setRed(2*avg-255);
     pixel.setBlue(255);
     pixel.setGreen(2*avg-255);  
     }     
   }
     else if (y>4*h/7 && y<5*h/7){
    if (avg<128) {
     pixel.setRed(0);
     pixel.setBlue(0);
     pixel.setGreen(2*avg);
   }
     else{
     pixel.setRed(2*avg-255);
     pixel.setBlue(2*avg-255);
     pixel.setGreen(255);  
     }     
   }
     else if (y>5*h/7 && y<6*h/7){
    if (avg<128) {
     pixel.setRed(0.8*avg);
     pixel.setBlue(0);
     pixel.setGreen(2*avg);
   }
     else{
     pixel.setRed(1.2*avg-51);
     pixel.setBlue(2*avg-255);
     pixel.setGreen(255);  
     }     
   }
     else{
    if (avg<128) {
     pixel.setRed(1.6*avg);
     pixel.setBlue(0);
     pixel.setGreen(1.6*avg);
   }
     else{
     pixel.setRed(0.4*avg+153);
     pixel.setBlue(2*avg-255);
     pixel.setGreen(0.4*avg+153);  
     }     
   }
   }
 image.drawTo(imgcanvas);}
}
function imageIsLoaded(x){
 if (image == null || ! image.complete()) {
 alert("Image not loaded");
   return false;
 }
  else{
    return true;
  }
}



function doblur(){
  if(image != null){
  blurImg=new SimpleImage(image.getWidth(),image.getHeight())
  for( var pixel of image.values())
    {
      var random=  Math.random();
     if(random<0.5)
     {var x=pixel.getX();
      var y=pixel.getY();
       blurImg.setPixel(x,y,pixel);
      }
     if (random>0.5){
       getnearbyPixel();
 }}}
     function getnearbyPixel(){
         var x=pixel.getX();
         var y=pixel.getY();
       var add=Math.floor(Math.random()*10+1);
        var newx=x+add;
       var newy=y+add;
       if(x>=image.getWidth()-10)
         {
           newx=x;
         }
       if(y>=image.getHeight()-10)
         {newy=y;}
         var nearbyImg=image.getPixel(newx,newy);
         blurImg.setPixel(x,y,nearbyImg);
         return blurImg;
       }
        blurImg.drawTo(imgcanvas);
}