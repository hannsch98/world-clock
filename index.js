function updateTime() {
	//Sydney

	let sydneyElement = document.querySelector("#sydney");
	let sydneyDateElement = sydneyElement.querySelector(".date");
	let sydneyTimeElement = sydneyElement.querySelector(".time");
	let sydneyTime = moment().tz("Australia/Sydney");

	sydneyDateElement.innerHTML = sydneyTime.format("dddd[,] D[.] MMMM YYYY");

	sydneyTimeElement.innerHTML = sydneyTime.format(
		"hh:mm:ss [<small>]A[</small>]"
	);

	//Vienna
	let viennaElement = document.querySelector("#vienna");
	let viennaDateElement = viennaElement.querySelector(".date");
	let viennaTimeElement = viennaElement.querySelector(".time");
	let viennaTime = moment().tz("Europe/Vienna");

	viennaDateElement.innerHTML = viennaTime.format("dddd[,] D[.] MMMM YYYY");

	viennaTimeElement.innerHTML = viennaTime.format(
		"hh:mm:ss [<small>]A[</small>]"
	);
}

setInterval(updateTime, 1000);
