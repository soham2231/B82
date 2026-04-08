btnG = document.querySelector("#gOtp");
btnV = document.querySelector("#vOtp");

one = document.querySelector("#onedigit");
two = document.querySelector("#twodigit");
three = document.querySelector("#threedigit");
four = document.querySelector("#fourdigit");

function genreateOtp() {
  let otp = Math.floor(Math.random() * 9000 + 1000);
  alert("Your OTP is: " + otp);
}

btnG.addEventListener("click", genreateOtp);

function validateOtp() {
  userOtp = one.value + two.value + three.value + four.value;
  if (userOtp == "") {
    alert("Please enter the OTP");
  } else if (userOtp.length < 4) {
    alert("Please enter a valid OTP");
  } else {
    alert("OTP is valid");
  }
}

btnV.addEventListener("click", validateOtp);
