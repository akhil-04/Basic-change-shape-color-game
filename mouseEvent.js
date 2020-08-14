 function sayhello(){ 
	alert('Hello !!!');
}

 function saybye(){ 
	alert('Bye !!!');
}

var hellobutton2 = document.getElementById('btn2');
		// console.log(hellobutton);
hellobutton2.addEventListener('click' , sayhello);
hellobutton2.addEventListener('click' , saybye);