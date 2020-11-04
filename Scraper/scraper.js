const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [el] = await page.$x('//*[@id="main-image"]');
	const src = await el.getProperty('src');
	const srcTxt = await src.jsonValue();

	const [el2] = await page.$x('//*[@id="productTitle"]');
	const txt = await el2.getProperty('textContent');
	const title = await txt.jsonValue();

	const [el3] = await page.$x('//*[@id="a-autoid-2-announce"]/span[2]/span');
	const txt2 = await el3.getProperty('textContent');
	const price = await txt2.jsonValue();

	console.log({srcTxt, title, price});

	var output = JSON.stringify({srcTxt, title, price});

	browser.close();

	const fsLibrary  = require('fs');
	/*fsLibrary.writeFile('newfile.txt', output, (error) => { 
    if (error) throw err; 
}) */

	var stream = fsLibrary.createWriteStream("append.txt", {flags:'a'});
	stream.write(output + "\n");
	stream.end();

}

scrapeProduct('https://www.amazon.com/Killers-of-Flower-Moon-audiobook/dp/B01MTW5T1F/')

