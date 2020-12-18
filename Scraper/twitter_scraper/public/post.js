function sendData() {
	const button = document.getElementById('submit');
	button.addEventListener('click', async event => {
	    const mood = document.getElementById('mood').value;
	    const data = { mood };
	    const options = {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(data)
	    };
	    const response = await fetch('/api', options);
	    const json = await response.json();
	    console.log(json);
	  });
}