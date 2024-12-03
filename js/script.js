const email = document.getElementById("email");
const send = document.getElementById("send");
const container = document.getElementById("container");
const success = document.getElementById("success");
const send2 = document.getElementById("send2");
const error = document.getElementById("span2");


function checkEmail() {
  const mail = email.value;
  if (
    mail.includes("@gmail.com") &&
    mail.indexOf("@gmail.com") === mail.length - 10
  ) {
    container.style.display = "none";
    success.style.display = "flex";
    document.body.style.backgroundColor = 'var(--cor3)';
  } else {
    errorStatus();
  }
}

function resetEmail() {
  email.value = "";
  container.style.display = "block";
  success.style.display = "none";
  email.style.backgroundColor = "white";
  error.style.display = "none";
  document.body.style.backgroundColor = 'white';
}

function errorStatus() {
  error.style.display = "block";
  email.style.backgroundColor = "hsl(0, 62%, 80%)";
}

send.addEventListener("click", function () {
  checkEmail();
});

send2.addEventListener("click", function () {
  resetEmail();
});

// brendowashingtone@gmail.com
