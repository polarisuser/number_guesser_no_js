let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random(min, max) * 10);
guessesLeft = 3;
i = 1;



const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
    guessInput.value = "";
  }

  // check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");

    guessBtn.innerHTML = "Новая игра";
    guessBtn.addEventListener("click", () => {
      guessInput.value = "";
      location.reload();
    });
  } else if (guess <= 10 && guess >= 0) {
    if (guessesLeft >= 2 && guessesLeft <= 3) {
      setMessage(
        `${guess} - не угадали, осталось попыток: ${guessesLeft - i}`,
        "red"
      );
      guessesLeft--;
      guessInput.value = "";
    } else {
      guessInput.disabled = true;
      setMessage(
        `Игра окончена. Вы проиграли. Было загадано число: ${winningNum}`,
        "red"
      );

      guessBtn.innerHTML = "Новая игра";
      guessBtn.addEventListener("click", () => {
        guessInput.value = "";
        location.reload();
      });
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

