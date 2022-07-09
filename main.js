var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
block.Image.object="";
function new_image()
{
	fabric.Image.fromURL('birthdayImage.jpg', function(img){
        block.Image.object=img;
        block.Image.object.scaleToWidth(700);
        block.Image.object.scaleToHeight(510);
        block.Image.object.set({
            top:0,
            left:0
        });
        canvas.add(block.Image.object);
    });
	
}

	function play(){
        x.play();
    }
