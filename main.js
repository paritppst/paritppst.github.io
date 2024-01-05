
var clockElement = document.getElementById("clock");
var dateElement = document.getElementById("date");

// Function to update the time
function updateTime() {
  var date = new Date();

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Bangkok",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  var localeDateString = date.toLocaleDateString("en-US", options);
  
  var [date, time] = localeDateString.split(", ");

  dateElement.textContent = `${date} ${time}`;
}

// Update the time every second
setInterval(updateTime, 1000);