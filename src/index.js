function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimelement = losAngelesElement.querySelector(".time");
  let losAnglesTime = moment().tz("Amerika/Los_Angeles");

  losAngelesDateElement.innerHTML = losAnglesTime.format("MMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAnglesTime.format(
    "h:mm:ss [<small>] A [</small]"
  );

  // Sidney
  let sidneyElement = document.querySelector("#sideny");
  let sindenyDateElement = sidneyElement.querySelector(".date");
  let sidnesyTimelement = sidneyElement.querySelector(".time");
  let sidneyTime = moment().tz("Amerika/Los_Angeles");

  sidneyDateElement.innerHTML = sidneyTime.format("MMM Do YYYY");
  sidneyTimeElement.innerHTML = sidneyTime.format(
    "h:mm:ss [<small>] A [</small]"
  );
  updateTime();
  setInterval(updateTime, 1000);
}
