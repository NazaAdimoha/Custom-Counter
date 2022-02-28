"use strict";

const counter = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");

let count = 0;

function increaseBy5() {
  count += 5;
  document.querySelector("#counter").innerHTML = count;
}

increment.addEventListener("click", increaseBy5);

function decreaseBy1() {
  if (count % 2 !== 0) {
    count--;
    document.querySelector("#counter").innerHTML = count;
  }
}

decrement.addEventListener("click", decreaseBy1);

function restart() {
  count = 0;
  document.querySelector("#counter").innerHTML = count;
  //   return (count = 0);
}

reset.addEventListener("click", restart);
