let number = document.getElementById("number");
let binary = document.getElementById("binary");
let button = document.getElementById("button");
let finalAnswer;

button.addEventListener("click", () => {
  let numberValue = number.value;
  let binaryValue = binary.value;
  //   console.log(numberValue);
  button.addEventListener("keyup", convert(numberValue));
  binary.value = finalAnswer;
});

function convert(numberValue) {
  let x = new Array();
  let num = numberValue;
  for (let i = 0; num != 0; i++) {
    x[i] = num % 2;
    num = ~~(num / 2);
  }
  let y = new Array();
  let j = x.length - 1;
  for (let i = 0; i < x.length; i++) {
    y[i] = x[j];
    j = j - 1;
  }
  finalAnswer = y.join("");
  console.log(finalAnswer);
}
