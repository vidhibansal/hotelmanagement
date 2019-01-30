const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');

let img= new Image();
let fileName ='';

const downloadBtn =document.getElementById('download-btn');
const uploadFile =document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');
const CropBtn = document.getElementById('crop-btn');
const memeBtn=document.getElementById('meme');
const extra=document.getElementById("extras");

//TODO FILTERS
document.addEventListener('click', (e)=> {
	if (e.target.classList.contains('filter-btn')) {
		if ( e.target.classList.contains('brightness-add'))
		{
			Caman('#canvas',img, function() {
				this.brightness(5).render();
			});
		}
		else if (e.target.classList.contains('brightness-remove'))
		{
			Caman('#canvas',img,function() {
				this.brightness(-5).render();
			});
		}
		else if (e.target.classList.contains('saturation-remove'))
		{
			Caman('#canvas',img,function() {
				this.saturation(-5).render();
			});
		}
		else if (e.target.classList.contains('saturation-add'))
		{
			Caman('#canvas',img,function() {
				this.saturation(5).render();
			});
		}
		else if (e.target.classList.contains('contrast-remove'))
		{
			Caman('#canvas',img,function() {
				this.contrast(-5).render();
			});
		}
		else if (e.target.classList.contains('contrast-add'))
		{
			Caman('#canvas',img,function() {
				this.contrast(5).render();
			});
		}
		else if (e.target.classList.contains('vibrance-remove'))
		{
			Caman('#canvas',img,function() {
				this.vibrance(-5).render();
			});
		}
		else if (e.target.classList.contains('vibrance-add'))
		{
			Caman('#canvas',img,function() {
				this.vibrance(5).render();
			});
		}
		else if (e.target.classList.contains('vintage-add'))
		{
			Caman('#canvas',img,function() {
				this.vintage().render();
			});
		}
		else if (e.target.classList.contains('lomo-add'))
		{
			Caman('#canvas',img,function() {
				this.lomo().render();
			});
		}
		else if (e.target.classList.contains('clarity-add'))
		{
			Caman('#canvas',img,function() {
				this.clarity().render();
			});
		}
		else if (e.target.classList.contains('sincity-add'))
		{
			Caman('#canvas',img,function() {
				this.sinCity().render();
			});
		}
		else if (e.target.classList.contains('hermajesty-add'))
		{
			Caman('#canvas',img,function() {
				this.herMajesty().render();
			});
		}
		else if (e.target.classList.contains('nostalgia-add'))
		{
			Caman('#canvas',img,function() {
				this.nostalgia().render();
			});
		}
		else if (e.target.classList.contains('pinhole-add'))
		{
			Caman('#canvas',img,function() {
				this.pinhole().render();
			});
		}
		else if (e.target.classList.contains('crossprocess-add'))
		{
			Caman('#canvas',img,function() {
				this.crossProcess().render();
			});
		}


	}
	ctx.save()
});

//Coordinates X and Y
canvas.addEventListener('mousemove',(e)=>{
	var rect = canvas.getBoundingClientRect();
  x1= parseInt(e.clientX - rect.left);
  y1= parseInt(e.clientY - rect.top);
	wid=img.width;
	height=img.height;
	document.getElementById("extra1").innerHTML='Position:('+x1+','+y1+') Size:' +wid+'x'+height+'px' ;

});

canvas.addEventListener('mouseout',(e)=>
{
	wid=img.width;
	height=img.height;
	document.getElementById("extra1").innerHTML='Position:(-,-) Size:' +wid+'x'+height+'px';
});

function textBox(x,y) {
        document.getElementById("x").value=x;
				document.getElementById("y").value=y;
}

canvas.addEventListener('click', function(evt) {
  var rect = canvas.getBoundingClientRect();
  var xCoord = parseInt(evt.clientX - rect.left);
	var yCoord= parseInt(evt.clientY - rect.top);
  textBox(xCoord,yCoord);
}, false);


//Crop button
CropBtn.addEventListener('click',(e)=>{
	ctx.clearRect(0,0,canvas.width,canvas.height);

        // draw cropped image
        var sourceX = document.getElementById('x').value;
        var sourceY = document.getElementById("y").value;
        var sourceWidth = document.getElementById("width").value;
        var sourceHeight = document.getElementById("height").value;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = canvas.width / 2 - destWidth / 2;
        var destY = canvas.height / 2 - destHeight / 2;

        ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);


});

//Rotate and Scale
rotate = document.getElementById('rotate');
rotate.addEventListener('change', doTransform, false);

scale = document.getElementById('scale');
scale.addEventListener('change', scaleImg, false);
function doTransform() {
ctx.save()
	x = canvas.width/2 - img.width/2;
  y = canvas.height/2 - img.height/2;
	 // Clear canvas
	 ctx.clearRect(0, 0, canvas.width, canvas.height);
	 ctx.translate(canvas.width/2, canvas.height/2);
	 val = document.getElementById('rotate').value;
	 ctx.rotate(val*Math.PI/180);

	 // Reverse the earlier translation
	 ctx.translate(-canvas.width/2, -canvas.height/2);
	 ctx.drawImage(img, x, y);
ctx.restore()
 }
 function scaleImg() {
ctx.save()
 	x = canvas.width/2 - img.width/2;
   y = canvas.height/2 - img.height/2;
 	 // Clear canvas
 	 ctx.clearRect(0, 0, canvas.width, canvas.height);
 	 ctx.translate(canvas.width/2, canvas.height/2);
 	 var val = document.getElementById('scale').value;
 	 ctx.scale(val, val);
 	 //val = document.getElementById('rotate').value;
 	 //ctx.rotate(val*Math.PI/180);
 	 // Reverse the earlier translation
 	 ctx.translate(-canvas.width/2, -canvas.height/2);
 	 ctx.drawImage(img, x, y);
ctx.restore()
  }


 //text addition
memeBtn.addEventListener('change',(e)=>{
ctx.save()
	ctx.lineWidth  = 5;
	 ctx.font = '50pt sans-serif';
	 ctx.strokeStyle = 'black';
	 ctx.fillStyle = 'white';
	 ctx.textAlign = 'center';
	 ctx.lineJoin = 'round';

	 var text = document.getElementById('meme').value;
    text = text.toUpperCase();
    x = canvas.width/2;
    y = canvas.height - canvas.height/4.5;
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
		ctx.restore()
});

//Revert Filters

revertBtn.addEventListener('click', (e)=> {
	Caman('#canvas', img, function() {
		this.revert();
	});

});

//upload file
uploadFile.addEventListener('change', (e) => {

	const file= document.getElementById('upload-file').files[0];

	//Init FileReader

	const reader =new FileReader();

	if (file)
	{
		fileName =file.name;
		//read data as url

		reader.readAsDataURL(file);
	}

	//add image to canvas

	reader.addEventListener('load', () =>
	{
		img=new Image();

		img.src=reader.result;

		//on image load, add to canvas
		img.onload =function (){
			canvas.width =img.width;
			canvas.height=img.height;
			//ctx.drawImage(img,0,0,img.width,img.height);
			canvas.removeAttribute('data-caman-id');

ctx.drawImage(img,0,0,img.width,img.height);
		}
	},false);
});



downloadBtn.addEventListener('click', e => {
	//get the file ext
	const fileExtension =fileName.slice(-4);

	//initialize a new filename
	let newFileName;
	//check image type
	if (fileExtension === '.jpg' || fileExtension ==='.png')
	{
		newFileName =fileName.substring(0,fileName.length -4) + '-edited.jpg';

	}

	//call downlload
	download(canvas,newFileName);
});

function download (canvas, filename)
{
	//init event
	let e;

	const link =document.createElement('a');

	//set props
	link.download=filename;
	link.href=canvas.toDataURL('image/jpeg',0.8);


	//new mouse event
	e = new MouseEvent('click');

	//dispatch event
	link.dispatchEvent(e);
}
