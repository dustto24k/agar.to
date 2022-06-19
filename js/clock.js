const clock = document.querySelector("#clock span:last-child");

function getClock() {
  const currentTime = new Date();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  clock.innerText = `${month}/${date} ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
