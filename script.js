function checkPassword() {
  var password = document.getElementById('passwordInput').value;
  if (password === '8918172922') {
    window.open("btn_controls.html", "_self");
  } else {
    alert("Incorrect password. Please try again.");
  }
}