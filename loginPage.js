

var switchLoginForm = function (e) {
  let exActive = document.querySelector(".login.active");
  exActive.classList.remove("active");
  exActive.classList.add("inactive");

  e.currentTarget.classList.remove("inactive");
  e.currentTarget.classList.add("active");

  let inactive = document.querySelector(".login.inactive");
  inactive.addEventListener("click", switchLoginForm, true);

  // Enlever le required des formulaires
  let usernameLogin = document.getElementById("usernameLogin");
  if (usernameLogin.required) {
    // Disable Login
    document.getElementById("usernameLogin").required = false;
    document.getElementById("passwordLogin").required = false;
    // Enable Signup
    document.getElementById("usernameSignup").required = true;
    document.getElementById("emailSignup").required = true;
    document.getElementById("passwordSignup").required = true;
  }
  else {
    // Disable Signup
    document.getElementById("usernameSignup").required = false;
    document.getElementById("emailSignup").required = false;
    document.getElementById("passwordSignup").required = false;
    // Enable Login
    document.getElementById("usernameLogin").required = true;
    document.getElementById("passwordLogin").required = true;
  }

  // Remplaçage du formulaire
  let hiddenForm = document.querySelector(".log-form.hidden");
  let activeForm = document.querySelector(".log-form.visible");
  activeForm.classList.remove("visible");
  activeForm.classList.add("hidden");
  hiddenForm.classList.remove("hidden");
  hiddenForm.classList.add("visible");

};

let inactive = document.querySelector(".login.inactive");
inactive.addEventListener("click", switchLoginForm, true);
