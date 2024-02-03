const nameElm = document.getElementById("name");
const emailElm = document.getElementById("email");
const btn = document.getElementById("sub");

const checkIfFormValid = () => {
  let userName = nameElm.value;
  let email = emailElm.value;
  console.log(userName, email);
  if (userName === "" || userName == null) {
    alert("you cannot submit empty form");
  } else if (email === null || email === null) {
    alert("you cannot submit empty form");
  } else if (!isNaN(userName)) {
    alert("Name cannot be numerical");
    nameElm.value = null;
  } else if (!emailElm.value.endsWith("@gmail.com")) {
    alert("not a valid email");
  }
};

btn.addEventListener("click", () => {
  checkIfFormValid();
  document.body.innerHTML = `<p>Form has been submited</p>`;
});
