//? 1---designMode

document.designMode = "off"; //by default value is off
document.designMode = "on"; // you can change anything on the website itslef

//? 2---Merging Arrays with duplicate values

const a1 = [1, 2, 3, 4, 5];
const a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const a3 = [...new Set([...a1, ...a2])]; // 3steps--first merge then put that in anew Set and then spread and convert into an array

console.log(a3);

//? destructuring is also known as extracting or extarction of keys from objects and arrays

//? 3---how to extract values of an array which is inside an object
const ob = {
  arr: [1, 2, 3],
};

const { arr } = ob;
console.log(arr); //[1,2,3]

const {
  arr: [a, b, c],
} = ob;

console.log(a, b, c); //1,2,3

//? 4---How to generate hex color codes

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 0xffffff
  ).toString(16)}`;
  btn.textContent = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
});

//? 5---copy to clipboard
const btn1 = document.querySelector(".copy");

btn1.addEventListener("click", () => {
  copy("Copy This");
  copy("Copy This Too"); //only this will be called and copied
  alert("Copied To Clipboard");
});

const copy = (text) => navigator.clipboard.writeText(text);

//? 6---console.table

const names = [
  {
    name: "Taiwind",
    views: 500,
  },

  {
    name: "React",
    views: 5000,
  },

  {
    name: "Js",
    views: 2500,
  },
];

console.table(names);

//? 7---transitionend---event

const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
  deleteBtn.style.opacity = 0;
});

deleteBtn.addEventListener("transitionend", () => {
  deleteBtn.style.display = "none";
});
