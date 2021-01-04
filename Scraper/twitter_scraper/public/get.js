window.addEventListener("load", async function getData()
	{
		const get_response = await fetch('/api');
		const data = await get_response.json();
		console.log(data);

		document.getElementById('data').innerHTML = "";

	//Displaying data on the screen
		for (item of data) {
			const root = document.createElement('div');
			const name = document.createElement('div');
			name.textContent = 'name: ' + item.name;
			const address = document.createElement('div');
			address.textContent = 'address: ' + item.address;

			root.append(name, address);
			document.getElementById('data').append(root);
		}
	});