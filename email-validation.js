function ValidateEmail(inputText) {
  var mailformat = "vasa19432.cs@rmkec.ac.in";
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    location.replace("transaction.html")
    return true;
  } else {
    alert("Invalid email address");
    return false;
  }
}
