document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("ans");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      check()
    }
  });
});
game = {
  status: 'In progress',
  mode: 'endless',
  scores: 0,
  level: 'easy',
  totalWin: 0,
  totalFail: 0,
  q: 1,
  l1: function l1(){return Math.floor(Math.random() *100)},
  l2: function l2(){return Math.floor(Math.random() *100)},
}
function display() {
  status = document.getElementById('status').innerText = game.status;
  scores = document.getElementById('scores').innerText = game.scores;
  Twin = document.getElementById('Twin').innerText = game.totalWin;
  Tfail = document.getElementById('Tfail').innerText = game.totalFail;
  mode = document.getElementById('mode').innerText = game.mode;
  level = document.getElementById('level').innerText = game.level;
  questNo = document.getElementById('questNo').innerText = "Question "+ game.q +': ';
  questions = document.getElementById('questions');
  game.q++
  l1 = game.l1();
  l2 = game.l2();
  questions.innerHTML = "<sp>W</sp>hat is the result of "+l1+' + '+l2+' ?';
}
function check() {
  completed = false;
if (completed == true) {
  game.status = "Completed"
}
//function to display if the user wins or lose

//Check users input
  calc = document.getElementById('questions').innerText.slice(21).replace('?','').trim()
  answer = document.getElementById('ans').value;
    if (answer == eval(calc)) {
      game.scores = game.scores + 5;
      game.totalWin++;
      document.getElementById('position').style.color = "green";
      document.getElementById('position').innerText = 'Correct!';
    } else {
      game.totalFail++;
      document.getElementById('position').style.color = "red";
  document.getElementById('position').innerText = 'Incorrect';
    }
  if (game.totalWin == 10) {
    game.level = 'medium';
} else if (game.totalWin >= 10) {
  game.level = 'hard';
}
display()
}