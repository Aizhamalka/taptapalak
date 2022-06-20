window.addEventListener("DOMContentLoaded", () => {
  let max = 10,
    min = 1,
    guesses = 3;

  const input = document.querySelector("#guess-input");
  const submit = document.querySelector("#guess-btn");
  const minNum = document.querySelector(".min-num");
  const maxNum = document.querySelector(".max-num");
  const message = document.querySelector(".message");

  const num = Math.ceil(Math.random() * 10);
  console.log(num);

  minNum.textContent = min;
  maxNum.textContent = max;

  submit.addEventListener("click", checknumber);

  function checknumber() {
    if (isNaN(input.value) || input.value < min || input.value > max) {
      message.style.color = "red";
      message.textContent = `Шашмай жок ${min} ден ${max} го чейинки санды гана жазышыңыз керек!`;
      input.value = "";
    } else {
      guesses--;
      console.log(input.value);
      if (guesses === 0 || input.value == num) {
        submit.textContent = "Жаны оюн";
        input.disabled = true;

        if (guesses === 0) {
          input.style.border = "2px solid grey ";
          message.style.color = "blue";
          message.textContent = `Ээээх утулуп калбадыкпы! Туура жооп ${num} болчу да!`;
        }

        if (input.value == num) {
          message.style.color = "green";
          message.textContent = "Куттуктайм! Туура табылды!";
        }

        submit.addEventListener("click", () => {
          location.reload();
        });
      } else if (input.value > num) {
        message.textContent = `Мындан кичирээк санды тандагой.  ${guesses} аракет калды.`;
      } else {
        message.textContent = `Мындан чонураак санды тандагой.  ${guesses} аракет калды.`;
      }

      input.value = "";
    }
  }
});
