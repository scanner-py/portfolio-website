const audio = new Audio(
  "/Assets/Audio/Chudi Jo Khankee (Reply Version) - 64Kbps-(Mr-Jat.in).mp3"
);

function checkAndPlay() {
  const userInput = document.getElementById("userInput").value;
  const result = eval(userInput);

  if (Number(result) === 7) {
    document.body.innerHTML = `<h1>${userInput} = Thala for reason 💪 Guys</h1><div id="Thala"><button id="tryagainButton" onclick="defaultPage()">Try Again</button></div>`;
    audio.play();
  } else {
    document.body.innerHTML = `<h1>${userInput} not = 7</h1><div id="Thala"><button id="tryagainButton" onclick="defaultPage()">Try Again</button></div>`;
  }
}

function defaultPage() {
  audio.pause();
  audio.currentTime = 0;
  document.body.innerHTML = `<body>
    <h1>Find Thala for reason</h1>
    <div id="Thala">
      <input type="text" id="userInput" placeholder="Enter any number to find thala" />
      <button id="findThala" onclick="checkAndPlay()">Find Thala</button>
      <script src="script.js"></script>
    </div>`;
}

