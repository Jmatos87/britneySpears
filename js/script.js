
// ----------Define Global Varaiables and Important Nodes---------//

var container = document.querySelector('#container')
var buttons = document.querySelector('#navButtons')




// ------------------Define Tools------------------------------//
var changeHash = function (evt){

	var hash = evt.target.value
	location.hash = hash



}
// ------------- Home View -------------------------------------------//

var home = function (){
	 container.innerHTML = '  <h1> This app is dedicated to the one and only </h1><img src="http://oi54.tinypic.com/210n5nc.jpg" alt="" />'
}

//------- Alternate Views ---------------------------------------------//

var view1 = function (){
	container.innerHTML = '<h1>After a long career as a flight attendant, Britney retired into a lap of luxury and became famous for her amazing singing ability and choreography</h1>/<img src="http://1.bp.blogspot.com/-Se3Rwsd2glg/UL67Hey5EKI/AAAAAAAALWk/uTr-alM7QaA/s1600/britney+spears+toxic+8.jpg" />'
}

var view2 = function (){
	 container.innerHTML = '<h1> At the pinnacle of her success, the human race regarded her as the perfect speciment to represent PEOPLE!</h1><img src="https://s-media-cache-ak0.pinimg.com/736x/92/59/9f/92599f089dcacedcdd09ec2620b9f34b.jpg"/>'
}

var view3 = function (){
	container.innerHTML = '<h1>With her newfound power and status, she sought to claim the Iron Throne and obliterate any ugly people that stand in her way.</h1><img src="http://i142.photobucket.com/albums/r96/thisdayinmusic/britney-spears.jpg"/>'
}


// -------------Controller to respond to any hash changes------------//
var controller = function (){
	console.log(window.location.hash)
	//if else statements evaluate what the current hash is 
	//and run the view function to change view//
	if(window.location.hash === '#hitMe'){
		console.log('hey')
		view1()
	}
	else if(window.location.hash === '#baby'){
		view2()
	}
	else if(window.location.hash === '#oneMoreTime'){
		view3()
	}
	//This is the catch-all view, in case the user inputs the wrong hash, they 
	//can be redirected to the home view//
	else home()

}

//-------------Actions and Pending Actions-------------------------//

//The controller sets the view starting from launch till the user exits the site//
controller()

//Event listeners are waiting for the user's actions or changes to the window//
buttons.addEventListener('click',changeHash)
window.addEventListener('hashchange',controller)