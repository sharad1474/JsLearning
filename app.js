// const slider1 = document.getElementsByName("loanamount").value;

// slider1.oninput() = function(){

// }
// const loanamount = document.getElementById("loanamount");
// console.log(loanamount.value);
const calculate = document.querySelector(".Calculate");
const inputs = document.querySelectorAll(".validateMinMax");
const loanemi = document.getElementById("loanemi");

const loanamount = document.getElementById("loanamount");
const interestRate = document.getElementById("interestRate");
const loantenure = document.getElementById("loantenure");

// console.log(loantenure);
// console.log(inputs.max);

// inputs.forEach(function (input) {
//   if (input.value < 0) {
//     input.min = 0;
//   } else if (input.value > input.max) {
//     input.value = input.max;
//   }
//   console.log(input.value);
// });
// for (let index = 0; index < inputs.length; index++) {
//   // deal with inputs[index] element.
//   console.log(inputs[index].min);
//   console.log(inputs[index].max);
// }
function updateTextInput(val) {
  document.getElementById("loanamount").value = val;
  //   document.getElementById("loanamountrange").value = val;
  //   console.log(
  //     `value range is moving
  //   and box is getting updated`,
  //     val
  //   );
}

function updateRangeInput(val) {
  document.getElementById("loanamountrange").value = val;
  //   console.log(
  //     `value inside box is getting changed
  //   and range is getting updated`
  //   );
}

calculate.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(loanamount.value);
  const r = interestRate.value / 12 / 100;
  //   console.log(r);
  const n = loantenure.value;
  const expoFactor = (1 + r) ** n;
  //   console.log(expoFactor);
  let emi = loanamount.value * r * (expoFactor / (expoFactor - 1));
  //   console.log(emi);
  //   console.log(loanemi.textContent);
  loanemi.textContent = `${emi}`;
  //   console.log(object);
});
