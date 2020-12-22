var button = document.getElementById("button");
var message = document.getElementById("message");

button.onclick = function sendData() {

	var message = document.send.message.value;
	    const data = { message };
	    const options = {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(data)
	    };
	    const response = fetch('/api', options);
	    const json = response.json();
	    console.log(json);
	};