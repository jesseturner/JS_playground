const puppeteer = require('puppeteer');
var output_prev;

async function scrapeProduct(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [el1] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[1]/a');
	const txt1 = await el1.getProperty('textContent');
	const head1 = await txt1.jsonValue();

	const [el2] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[2]/a');
	const txt2 = await el2.getProperty('textContent');
	const head2 = await txt2.jsonValue();

	const [el3] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[3]/a');
	const txt3 = await el3.getProperty('textContent');
	const head3 = await txt3.jsonValue();

	const [el4] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[4]/a');
	const txt4 = await el4.getProperty('textContent');
	const head4 = await txt4.jsonValue();

	const [el5] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[5]/a');
	const txt5 = await el5.getProperty('textContent');
	const head5 = await txt5.jsonValue();

	const [el6] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[6]/a');
	const txt6 = await el6.getProperty('textContent');
	const head6 = await txt6.jsonValue();

	const [el7] = await page.$x('//*[@id="main-container"]/div/section[3]/div[1]/section/ul/li[7]/a');
	const txt7 = await el7.getProperty('textContent');
	const head7 = await txt7.jsonValue();

	var output = JSON.stringify({head1, head2, head3, head4, head5, head6, head7}); //may do this only on those appended to txt

	browser.close();

	if(output_prev !== output) { 
		const fsLibrary  = require('fs');

		var stream = fsLibrary.createWriteStream("espn_nfl_top_headlines.txt", {flags:'a'});
		stream.write(output + "\n");
		stream.end();

		console.log({head1, head2, head3, head4, head5, head6, head7});

		output_prev = output; 
	}
	else {
		console.log("No new headlines\n");
	}


}

scrapeProduct('https://www.espn.com/nfl/')
setInterval(scrapeProduct, 1000*10, 'https://www.espn.com/nfl/') //change this to every hour, when ready

