const btn = document.querySelector("#btn").addEventListener("click", (e) => {
  // e.preventDefault;
  const bDate = document.getElementById("b-date");
  const birth = bDate.value;
  const birthYear = birth.slice(0, 4);
  const birthDate = birth.slice(5, 7);
  const birthMonth = birth.slice(8, 10);
  const currDate = new Date();
  const todayDate = currDate.getDate();
  const todayMonth = currDate.getMonth() + 1; // starts with 0
  const todayYear = currDate.getFullYear();

  // magic starts

  const year = todayYear - birthYear;
  const month = todayMonth - birthMonth;
  const day = todayDate - birthDate;

  calculate(year, month, day);
});

const calculate = (year, month, day) => {
  const weeksLived = Math.round(
    (year * 365.25 + (month * 365.25) / 12 + day) / 7
  );
  const monthsLived = Math.round(year * 12);

  const daysLived = Math.round(year * 365.25 + (month * 365.25) / 12 + day);

  renderPain(weeksLived, monthsLived, daysLived);
};

function renderPain(week, month, days) {
  let html = `<div  class="pain" id="pain-in-weeks">
            <p>You have Lived</p>
            <h3>${week} weeks</h3>
          </div>
          <div class="pain" id="pain-in-days">
          <p>You have Lived</p>
          <h3>${days} days</h3>
          </div>
          <div class="pain" id="pain-in-months">
          <p>You have Lived</p>
          <h3>${month} month</h3>
          </div>`;

  document.querySelector(".pain-grid").innerHTML = html;
}
