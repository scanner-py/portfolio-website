const name1 = document.getElementById("person-name");
const name2 = document.getElementById("crush-name");
const btn = document.getElementById("cal-btn");
const love = document.getElementById("love");
const img = document.getElementById("heart-img");

const removeNum = () => {
  let user = name1.value;
  let crush = name2.value;

  if (!isNaN(user, crush) || !isNaN(crush, user)) {
    name1.value = "";
    name2.value = "";
  } else {
    findLovePer(user, crush);
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png";
    img.style.visibility = "visible";
  }
};

const findLovePer = (u, c) => {
  let random = Math.floor(Math.random() * 100);
  love.innerText = `${u} & ${c} Love is ${random}%`;
  name1.value = "";
  name2.value = "";
};

btn.addEventListener("click", () => {
  removeNum();
});
