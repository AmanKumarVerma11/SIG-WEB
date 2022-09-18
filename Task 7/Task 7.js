function ValidationForm() {
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phoneNumber = document.forms["RegForm"]["Telephone"];
    let select = document.forms["RegForm"]["Subject"];
    let pass = document.forms["RegForm"]["Password"];
    if(username.value == "") {
      alert("Please enter your name.");
      username.focus();
      return false;
    }
    if(email.value == "") {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf(".", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(phoneNumber.value == "") {
      alert("Please enter your telephone number.");
      phoneNumber.focus();
      return false;
    }
    if(pass.value == "") {
      alert("Please enter your password");
      pass.focus();
      return false;
    }
    if(select.selectedIndex < 1) {
      alert("Please enter your course.");
      select.focus();
      return false;
    }
    return true;
  }