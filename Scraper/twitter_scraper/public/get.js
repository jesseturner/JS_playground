var button = document.getElementById("get_button");

button.onclick = async function getData()
	{
		const get_response = await fetch('/api');
		const data = await get_response.json();
		console.log(data);
	}