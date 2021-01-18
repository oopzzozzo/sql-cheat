window.onload=function(){
  elems = document.getElementsByTagName("code");
  fetch("https://raw.githubusercontent.com/oopzzozzo/sql-cheat/master/bucket.sql")
    .then(response => response.text())
    .then((data) => {
      elems[0].innerHTML = data;
    })
}
