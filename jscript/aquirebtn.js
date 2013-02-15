// JavaScript Document

function aquirebtn(){


	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } else {
  alert('Geolocation is required for this page, but your browser doesn&apos;t support it. Try it with a browser that does, such as Opera 10.60.');
}

function successFunction(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  	document.getElementById('longitude').value=long;
	document.getElementById('latitude').value=lat;
		
}

function errorFunction(position) {
  alert('Error! Something is not working!!!');
}

	
}
//Check if browser supports W3C Geolocation API

