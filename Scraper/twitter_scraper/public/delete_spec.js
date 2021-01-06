function enable_delete() { //Needed so get.js creates delete_spec buttons before this runs

	var button = document.getElementById("delete_spec"); //Currently only the name of the first element

	button.onclick = async function deleteSpecData()
	{
	var name = "Rex Ryan";
	    const data = { name };
	    const options = {
	    	method: 'POST',
	    	headers: {'Content-Type': 'application/json'},
	    	body: JSON.stringify(data)
	    };
		const get_response = await fetch('/deletespec', options);
		console.log(get_response);
	}
}