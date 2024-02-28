export {};

global.country = 'Germany';

console.log(global.country); // 👉️ "Germany"

// ✅ Can also be accessed directly
console.log(country); // 👉️ "Germany"

// 👇️ if you are on the browser
// console.log(window.country);

global.multiply = function (a: number, b: number) {
  return a * b;
};

console.log(global.multiply(16, 30)); // 👉️ 450

// ✅ Can also be accessed directly
console.log(multiply(13, 10)); // 👉️ 130

// 👇️ if you are on the browser
// console.log(window.multiply(15, 15));
