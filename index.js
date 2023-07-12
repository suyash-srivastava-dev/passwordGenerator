
function generateRandomPassword(length) {
  // Define the characters that can be used in the password
  // TODO: Option for adding number of required character length with type of character
  const characters_caps =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const characters_small =
    "abcdefghijklmnopqrstuvwxyz";
  const characters_numbers =
    "0123456789";
  const characters_specialchar =
    "!@#$%^&*()_";

  let password = "";
  for (let i = 0; i < length - 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters_small.length);
    password += characters_small.charAt(randomIndex);
  }
  for (let i = 0; i < 1; i++) {
    const randomIndex3 = Math.floor(Math.random() * characters_specialchar.length);
    password += characters_specialchar.charAt(randomIndex3);
  }
  for (let i = 0; i < 3; i++) {
    const randomIndex1 = Math.floor(Math.random() * characters_caps.length);
    password += characters_caps.charAt(randomIndex1);
  }
  for (let i = 0; i < 2; i++) {
    const randomIndex2 = Math.floor(Math.random() * characters_numbers.length);
    password += characters_numbers.charAt(randomIndex2);
  }


  return password;
}

window.onload = function () {
  var qrcode = new QRCode("qrcode", {
      width: 128,
      height: 128
  });
    document.getElementById("myBtn").addEventListener("click", function () {
      const passgen = generateRandomPassword(20);
      const outputpass = document.getElementById("outputpass");
      outputpass.innerHTML = 'pass:\t'+passgen;
      qrcode.makeCode(passgen)
      // TODO: add copy text button next to generated text
      if (navigator.clipboard) {
        navigator.clipboard.writeText(passgen)
          .then(function () {
            alert("Text copied to clipboard!");
          })
          .catch(function (error) {
            alert("Copy failed: " + error);
          });
      }
    });
  }