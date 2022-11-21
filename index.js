function updateTime() {
	//Sydney

	let sydneyElement = document.querySelector("#sydney");

	if (sydneyElement) {
		let sydneyDateElement = sydneyElement.querySelector(".date");
		let sydneyTimeElement = sydneyElement.querySelector(".time");
		let sydneyTime = moment().tz("Australia/Sydney");

		sydneyDateElement.innerHTML = sydneyTime.format("dddd[,] D[.] MMMM YYYY");

		sydneyTimeElement.innerHTML = sydneyTime.format(
			"hh:mm:ss [<small>]A[</small>]"
		);
	}

	//Vienna
	let viennaElement = document.querySelector("#vienna");

	if (viennaElement) {
		let viennaDateElement = viennaElement.querySelector(".date");
		let viennaTimeElement = viennaElement.querySelector(".time");
		let viennaTime = moment().tz("Europe/Vienna");

		viennaDateElement.innerHTML = viennaTime.format("dddd[,] D[.] MMMM YYYY");

		viennaTimeElement.innerHTML = viennaTime.format(
			"hh:mm:ss [<small>]A[</small>]"
		);
	}
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
	let cityTimezone = event.target.value;
	let cityName = cityTimezone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimezone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
        <div class="city">
					<div>
						<h2>${cityName}</h2>
						<div class="date">${cityTime.format("dddd[,] D[.] MMMM YYYY")}</div>
					</div>
					<div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
				</div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
