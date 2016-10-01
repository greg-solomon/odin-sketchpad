// globals
var randomFlag = false;
var col = "rgb(0,0,0)";

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

function cls(){
	$('div.block').remove();
	$('br.break').remove();
	var size = prompt("How many squares per side?");
	if (size < 1){
		size = 16;
	}
	draw(size);
}

function randomize(){
	randomFlag = !randomFlag;
}

function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	colour = "rgb("+String(r)+","+String(g)+","+String(b)+")";
	return colour;
}

$(document).ready(function(){
	// colour's div's when mouse enters
	$(document).on('mouseenter', '.block', function(){
		if (randomFlag){
			$(this).css({"background-color":randomColor()});
		} else {
			$(this).css({"background-color":col});
		}
	
	});
	
});


