var toggled = false;

var htag = document.getElementsByTagName("h1")[0];
// var htag = document.getElementsById("h12");
var bodytag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

var x = document.getElementById("toggle");
x.onclick = function () {

		if(! toggled){
			htag.classList.add("color-white");
			bodytag.classList.add("color-black");
			circle.style.marginleft = "100px";

			toggled = true;
		}

		else{

			  htag.classList.remove("color-white");
        bodytag.classList.remove("color-black");
        circle.style.marginLeft = "1px";
        
        toggled = false;
        
		}
}