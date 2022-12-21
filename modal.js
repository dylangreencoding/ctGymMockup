`use strict`;

const makeSure = document.getElementById(`make-sure`);
const stay = document.getElementById(`stay`);
const leave = document.getElementById(`leave`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);

const showModal = function() {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hide-overlay`);
};

const hideModal = function() {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hide-overlay`);
};

makeSure.addEventListener(`click`, showModal);
stay.addEventListener(`click`, hideModal);
leave.addEventListener(`click`, hideModal);