// globals
var randomFlag = false;
var fadeFlag = false;
var col = "rgb(0,0,0)";
var size = 16
function draw(size =16){
	while(720 % size !== 0){
		size -= 2;
	}
	var px = 720/size;
	for (x = 0; x < size; x++){
		for (y = 0; y < size; y++){
			var d = document.createElement("div");
			d.setAttribute('class', "block");
			d.style.height = px;
			d.style.width = px;
			document.getElementById("container").appendChild(d);
		}
		var br = document.createElement("br"); 
		br.setAttribute('class', 'break');
		document.getElementById("container").appendChild(br)
	}
}
function resize(){
	$('div.block').remove();
	$('br.break').remove();
	size = prompt("How many squares per side?");
	if (size < 1){
		size = 16;
	}
	draw(size);
}
function cls(){
	$('div.block').remove();
	$('br.break').remove();
	draw(size);
}

function randomize(){
	randomFlag = !randomFlag;
	fadeFlag = false;
}

function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	colour = "rgb("+String(r)+","+String(g)+","+String(b)+")";
	return colour;
}
function fade(){
	fadeFlag = !fadeFlag;
	randomFlag = false;
}
function fadeColor(color){
	colorString = color.substring(4,color.length);
	colorString = colorString.replace("(","");
	colorString = colorString.replace(")","");
	colors = colorString.split(", ");
	var r = parseInt(colors[0]);
	var g = parseInt(colors[1]);
	var b = parseInt(colors[2]);
	
	if (r == 0){
		r = g = b = 255;
		console.log(g)
	} else if (r - 10 < 0){
		r = g = b = 1;
	} else {
		r = g = b -= 10;
	}
	var col = "rgb("+String(r)+","+String(g)+","+String(b)+")";
	//console.log("col: "+col);
	return col;
}
$(document).ready(function(){
	// colour's div's when mouse enters
	$(document).on('mouseenter', '.block', function(){
		if (randomFlag){
			$(this).css({"background-color":randomColor()});
		} else if (fadeFlag){
			//fadeColor($(this).css("background-color"));
			$(this).css({"background-color":fadeColor($(this).css("background-color"))});
		} else {
			$(this).css({"background-color":col});
		}
	});
	
});



