const online = () => {
  let online = document.getElementById('online');
  let onlineBtn = document.getElementById('onlineBtn');
  // console.log(onlineBtn.innerHTML = "NOT INTERESTED");

  if (onlineBtn.innerText == "NOT INTERESTED") {
    onlineBtn.innerHTML = "I'M INTERESTED <div class='action'><img src='/assets/arrow forward.svg'></div> ";
    console.log(onlineBtn.innerHTML);
    online.style.display = 'none';


  } else {
    online.style.display = 'block';
    onlineBtn.innerHTML = "NOT INTERESTED <div class='action _action-2'><img src='/assets/arrow forward.svg'></div> ";


  }
}
const offline = () => {
  let offline = document.getElementById('offline');
  let offlineBtn = document.getElementById('offlineBtn');
  if (offlineBtn.innerText == "NOT INTERESTED") {
    offlineBtn.innerHTML = "I'M INTERESTED <div class='action'><img src='/assets/arrow forward.svg'></div> ";
    console.log(onlineBtn.innerHTML);
    offline.style.display = 'none';


  } else {
    offline.style.display = 'block';
    offlineBtn.innerHTML = "NOT INTERESTED <div class='action _action-2'><img src='/assets/arrow forward.svg'></div> ";


  }
}