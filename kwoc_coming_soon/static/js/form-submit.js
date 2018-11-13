function send(send){
	  document.location = "/submit";
	  var request = new XMLHttpRequest();
	  var data = new FormData(form);
	  var url = "https://script.google.com/macros/s/AKfycbwsatAxP6IF9VgVVVxXbevHjsUc-pCdhI1B5zaMPS3Ndyn-X6g/exec";
	  request.onreadystatechange = function() {
	  console.log(request.readyState);
	  console.log(request.status);
	  console.log(request.content);
	  if (request.readyState === 4) {
	        if (request.status === 200) {
					console.log("yay");
	            } else {
	            	console.log("nay");	
	            }
	        }
	    };
	  request.open("POST", url , true);
	  request.send(data);
	  return true;
}
