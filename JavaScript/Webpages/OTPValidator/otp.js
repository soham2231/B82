btnG = document.querySelector("#gOtp");
btnV = document.querySelector("#vOtp");

one = document.querySelector("#onedigit");
two = document.querySelector("#twodigit");
three = document.querySelector("#threedigit");
four = document.querySelector("#fourdigit");

function genreateOtp() {
  otp = Math.floor(Math.random() * 9000 + 1000);
  alert("Your OTP is: " + otp);
}

btnG.addEventListener("click", genreateOtp);

function toNextInput(ipNext) {
  // console.log(ipNext)
  document.getElementById(ipNext).focus();
}

function validateOtp() {
  let userOtp = one.value + two.value + three.value + four.value;
  if (userOtp == "") {
    alert("Please enter the OTP");
  } else if (userOtp.length < 4) {
    alert("Please enter a valid OTP");
  } else if (userOtp != otp) {
    alert("OTP is invalid");
  } else {
    alert("OTP is valid");
  }
  one.value = "";
  two.value = "";
  three.value = "";
  four.value = "";
}

btnV.addEventListener("click", validateOtp);

//focus on the next input field when the current input field is filled in one function
function moveToNext(current, next) {
  if (current.value.length >= 1) {
    next.focus();
  }
}
