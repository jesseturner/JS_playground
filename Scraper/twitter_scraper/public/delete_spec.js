var button = document.getElementById("delete_spec");

button.onclick = async function deleteSpecData()
	{
	var name = "Rex Ryan";
	    const data = { name };
	    const options = {
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify(data)
	    };
		const get_response = await fetch('/deletespec', options);
		console.log(get_response);
	}