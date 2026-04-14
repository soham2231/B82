userLength = document.getElementById("lengthInput");
genPasswordBtn = document.getElementById("genPass");
generatedPasswordOutput = document.getElementById("passwordOutput");
showPassCheckBox = document.getElementById("showPasswordCheck");

function generatePassword() {
  const length = parseInt(userLength.value);
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  generatedPasswordOutput.value = password;
}

function showPassword() {
  if (showPassCheckBox.checked) {
    generatedPasswordOutput.type = "text";
  } else {
    generatedPasswordOutput.type = "password";
  }
}
