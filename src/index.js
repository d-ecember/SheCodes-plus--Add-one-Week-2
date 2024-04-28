function updateTime() {
  // Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAnglesTime = moment().tz("Amerika/Los_Angeles");

    losAngelesDateElement.innerHTML = losAnglesTime.format("MMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAnglesTime.format(
      "h:mm:ss [<small>] A [</small]"
    );
  }
  // Sidney
  let sidneyElement = document.querySelector("#sideny");
  if (sidneyElement) {
    let sidneyDateElement = sidneyElement.querySelector(".date");
    let sidneyTimeElement = sidneyElement.querySelector(".time");
    let sidneyTime = moment().tz("Amerika/Los_Angeles");

    sidneyDateElement.innerHTML = sidneyTime.format("MMM Do YYYY");
    sidneyTimeElement.innerHTML = sidneyTime.format(
      "h:mm:ss [<small>] A [</small]"
    );
  }
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europa/Paris");

    parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>] A [</small]"
    );
  }
  // Tokio
  let tokioElement = document.querySelector("#tokio");
  if (tokioElement) {
    let tokioDateElement = tokioElement.querySelector(".date");
    let tokioTimeElement = tokioElement.querySelector(".time");
    let tokioTime = moment().tz("Asien/Tokio");

    tokioDateElement.innerHTML = tokioTime.format("MMM Do YYYY");
    tokioTimeElement.innerHTML = tokioTime.format(
      "h:mm:ss [<small>] A [</small]"
    );
  }
  function updateCity(event) {
    let cityTimeZone = event.traget.value;
    let cityName = cityTimeZone.replace("_", " ").split("/"[1]);
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
      `;
  }
  updateTime();
  setInterval(updateTime, 1000);

  let citiesSelectElement = document.querySelector("#city");

  citiesSelectElement.addEventListener("change", updateCity);
}
