var current = "square";

var shape = ["square","rectangle","circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right","parallelogram"];

var color = ["red", "orange", "green", "maroon", "pink", "violet","cyan","black","Chartreuse","Gold","GreenYellow","brown"];

var x = document.getElementById("shape")
x.onclick = function(){
	var random = shape[Math.floor(Math.random() * shape.length)];
	document.getElementById(current).setAttribute("id",random);
	current=random;	
}

var x1 = document.getElementById("color")
x1.onclick = function(){
	var randomcolor = shape[Math.floor(Math.random() * color.length)];
	document.getElementById("block").style.background-color = randomcolor;
	current=random;	
}