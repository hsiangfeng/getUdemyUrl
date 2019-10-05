

function myAlert() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url;
    const filterUrl = url.split('course')[1];
    if(url.split('course')[0] === 'https://www.udemy.com/') {
      const myTextareaID = document.getElementById('myTextarea');
      const h2ID = document.getElementById('h2');
      myTextareaID.value = `/course${filterUrl}`;
      h2ID.textContent = `/course${filterUrl}`;
      myTextareaID.select();
      document.execCommand('cut');
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  myAlert();
}); 

