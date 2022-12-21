`use strict`;

/////////////////////////////////////////////
// Schedule Dates

const date0 = document.getElementById(`date0`);
const date1 = document.getElementById(`date1`);
const date2 = document.getElementById(`date2`);
const date3 = document.getElementById(`date3`);
const date4 = document.getElementById(`date4`);
const date5 = document.getElementById(`date5`);
const date6 = document.getElementById(`date6`);
const date7 = document.getElementById(`date7`);

// console.log(date0)

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const day2 = new Date(today);
day2.setDate(day2.getDate() + 2);
const day3 = new Date(today);
day3.setDate(day3.getDate() + 3);
const day4 = new Date(today);
day4.setDate(day4.getDate() + 4);
const day5 = new Date(today);
day5.setDate(day5.getDate() + 5);
const day6 = new Date(today);
day6.setDate(day6.getDate() + 6);
const day7 = new Date(today);
day7.setDate(day7.getDate() + 7);

date0.textContent = `Today ` + today.toLocaleDateString();
date1.textContent = `Tomorrow ` + tomorrow.toLocaleDateString();
date2.textContent = day2.toLocaleDateString();
date3.textContent = day3.toLocaleDateString();
date4.textContent = day4.toLocaleDateString();
date5.textContent = day5.toLocaleDateString();
date6.textContent = day6.toLocaleDateString();
date7.textContent = day7.toLocaleDateString();
