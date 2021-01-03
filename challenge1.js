let counter = 0;


const intervalId = setInterval(() => {
	console.log("hello world");
	counter++;

	if (counter == 5) {
		console.log("done");
		clearInterval(intervalId);
	}
}, 1000);

