

var innerdiv = document.getElementById('inner');

innerdiv.addEventListener('click', function(event){
 	console.log('click inner div');
 	event.stopPropagation();
 });

var outerdiv = document.getElementById('outer');

outerdiv.addEventListener('click', function(){
 	console.log('click outer div');
 });

// var outerdiv = document.getElementById('outer');

// outerdiv.addEventListener('mouseover', function(){
// 	console.log('mouse over');
// });

// outer.addEventListener('mouseout', function(){
// 	console.log('mouse out');
// });

// // var searchInput = document.getElementById('search');
// // searchInput.addElementListener('keypress', function(){
// // 	console.log('key pressed');
// // });

// document.addEventListener('keydown',function(){
// 	console.log('key down');
// });

