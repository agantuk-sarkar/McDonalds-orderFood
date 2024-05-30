// getting all the checkboxes from html
const breakfastBox = document.getElementById("breakfast").value;
const sandwichBox = document.getElementById("sandwich").value;
const mcCafeBox = document.getElementById("McCafe").value;
const beverageBox = document.getElementById("beverage").value;
const comboBox = document.getElementById("combo").value;
const bakeryBox = document.getElementById("bakery").value;
const dessertsBox = document.getElementById("desserts").value;
const happyMealBox = document.getElementById("happyMeal").value;
const saladsBox = document.getElementById("salads").value;

// using class to create objects
class Checkbox {
  constructor(name, imageLink) {
    this.name = name;
    this.imageLink = imageLink;
  }
}

// using array to store objects
let arr = [];

// storing the newly created objects into and array
const newBreakfastBox = new Checkbox(
  breakfastBox,
  "https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full"
);

const newSandwichBox = new Checkbox(
  sandwichBox,
  "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg"
);

const newMcCafeBox = new Checkbox(
  mcCafeBox,
  "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ACC/Screenshot2024-02-20at4.09.52%E2%80%AFPM.jpeg"
);

const newBeverageBox = new Checkbox(
  beverageBox,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bv7d-JEAwMEdo_1VBTBnpLOLUkPnzFVNhQ&usqp=CAU"
);

const newComboBox = new Checkbox(
  comboBox,
  "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMacCombo_v1_832x472:nutrition-calculator-tile?wid=472&hei=472&dpr=off"
);

const newBakeryBox = new Checkbox(
  bakeryBox,
  "https://i0.wp.com/nerdbot.com/wp-content/uploads/2023/07/mccafe.jpg?fit=2000%2C1461&ssl=1"
);

const newDessertsBox = new Checkbox(
  dessertsBox,
  "https://www.foodandwine.com/thmb/Nn2DZrmUo5p7DLQMUYqI8SW7Etc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/McDonalds-Shamrock-Shake-Is-Back-Already-FT-BLOG-0206-bbdc8c4ce5014e2294fd4a22a999943d.jpg"
);

const newHappyMealBox = new Checkbox(
  happyMealBox,
  "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7002_4McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:nutrition-calculator-tile"
);

const newSaladsBox = new Checkbox(
  saladsBox,
  "https://static-ssl.businessinsider.com/image/56b4c0f12e52651a008b523a-689-517/screen%20shot%202016-02-05%20at%2010.28.08%20am.jp2"
);
arr.push(
  newBreakfastBox,
  newSandwichBox,
  newMcCafeBox,
  newBeverageBox,
  newComboBox,
  newBakeryBox,
  newDessertsBox,
  newHappyMealBox,
  newSaladsBox
);
// console.log(arr);

const imageContainer = document.querySelector(".image-container");

const orderFood = document.querySelector(".orderFood");
orderFood.addEventListener("click", function () {
  function foodpromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let newImage = arr.filter(function (ele) {
          imageContainer.innerHTML = "";

          const breakfast = document.getElementById("breakfast");
          const sandwich = document.getElementById("sandwich");
          const imageDiv = document.querySelector(".images");
          const imgTag = document.createElement("img");

          if (breakfast.checked === true && breakfastBox === ele.name) {
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            // imageContainer.append(imageDiv);
            console.log(ele.name);
            resolve();
            // console.log(foodpromise());
          } else if (sandwich.checked === true && sandwichBox === ele.name) {
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            // imageContainer.append(imageDiv);
            console.log(ele.name);
            resolve();
            // console.log(foodpromise());
          }
        });
      }, 4000);
    });
  }
  foodpromise().then(function () {
    console.log("Success");
  });
  // console.log(foodpromise());
});


