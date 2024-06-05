// getting all the values of the checkboxes from html
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

// using array to store objects and storing in locaStorage
const arr = [];

// storing the newly created objects from a class into and array
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

// setting the array of objects in localStorage
localStorage.setItem("foodItems", JSON.stringify(arr));

const imageContainer = document.querySelector(".image-container");

const orderFood = document.querySelector(".orderFood");

// getting all the input checkboxes elements from html
const breakfast = document.getElementById("breakfast");
const sandwich = document.getElementById("sandwich");
const mcCafe = document.getElementById("McCafe");
const beverage = document.getElementById("beverage");
const combo = document.getElementById("combo");
const bakery = document.getElementById("bakery");
const desserts = document.getElementById("desserts");
const happyMeal = document.getElementById("happyMeal");
const salads = document.getElementById("salads");
const selectAll = document.getElementById("selectAll");

// function for order food button
orderFood.addEventListener("click", function () {
  // function which will return new promise
  function foodpromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let newImage = arr.filter(function (ele) {

          // fetching and creating image tags to show images
          const imageDiv = document.querySelector(".images");
          const imgTag = document.createElement("img");
          const orderIdContainer = document.querySelector(".orderId-container");
          const spanTag_orderText = document.createElement("span");
          const spanTag_orderId = document.createElement("span");

          // imageDiv.innerHTML = "";

          if (breakfast.checked === true && breakfastBox === ele.name) {
            // imageDiv.innerHTML = "";
            orderIdContainer.innerHTML = "";

            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            // imageContainer.append(imageDiv);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");
            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);
            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            breakfast.addEventListener("change", function () {
              if (!breakfast.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();

            // console.log(foodpromise());
          } else if (sandwich.checked === true && sandwichBox === ele.name) {
            // imageDiv.innerHTML = "";
            // ele.imageLink.style = "hidden";
            orderIdContainer.innerHTML = "";

            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            
            // imageContainer.append(imageDiv);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            sandwich.addEventListener("change", function () {
              if (!sandwich.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (mcCafe.checked === true && mcCafeBox === ele.name) {
            // imageDiv.innerHTML = "";
            orderIdContainer.innerHTML = "";

            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            mcCafe.addEventListener("change", function () {
              if (!mcCafe.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (beverage.checked === true && beverageBox === ele.name) {
            // imgTag.innerHTML = "";
            orderIdContainer.innerHTML = "";
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            beverage.addEventListener("change", function () {
              if (!beverage.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (combo.checked === true && comboBox === ele.name) {
            // imgTag.innerHTML = "";
            orderIdContainer.innerHTML = "";
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            combo.addEventListener("change", function () {
              if (!combo.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (bakery.checked === true && bakeryBox === ele.name) {
            // imgTag.innerHTML = "";
            orderIdContainer.innerHTML = "";
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            bakery.addEventListener("change", function () {
              if (!bakery.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (desserts.checked === true && dessertsBox === ele.name) {
            imgTag.innerHTML = "";
            orderIdContainer.innerHTML = "";
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            desserts.addEventListener("change", function () {
              if (!desserts.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (happyMeal.checked === true && happyMealBox === ele.name) {
            imgTag.innerHTML = "";
            orderIdContainer.innerHTML = "";
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            // console.log(imgTag);
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            happyMeal.addEventListener("change", function () {
              if (!happyMeal.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          } else if (salads.checked === true && saladsBox === ele.name) {
            imgTag.innerHTML = "";
            orderIdContainer.innerHTML = "";
            imgTag.setAttribute("src", ele.imageLink);
            imgTag.setAttribute("class", "h-full w-full");
            imageDiv.append(imgTag);
            spanTag_orderText.textContent = "Order ID:";
            spanTag_orderText.setAttribute("class", "text-xl font-semibold");

            spanTag_orderId.textContent = Date.now();
            spanTag_orderId.setAttribute("class", "text-xl font-semibold");

            orderIdContainer.append(spanTag_orderText, spanTag_orderId);

            // imageContainer.append(imageDiv);
            // console.log(ele.name);
            salads.addEventListener("change", function () {
              if (!salads.checked) {
                imageDiv.innerHTML = "";
                orderIdContainer.innerHTML = "";
              }
            });
            resolve();
            // console.log(foodpromise());
          }
        });
      }, 2000);
    });
  }
  foodpromise().then(function () {
    console.log("Success");
  });
  // console.log(foodpromise());
});

// creating a new array to push all the checkbox elements
const checkboxArray = [];

checkboxArray.push(
  breakfast,
  sandwich,
  mcCafe,
  beverage,
  combo,
  bakery,
  desserts,
  happyMeal,
  salads
);
// console.log(checkboxArray);

// change event for selectAll checkbox
selectAll.addEventListener("change", function () {
  if (selectAll.checked) {
    checkboxArray.forEach(function (ele) {
      ele.checked = true;
    });
  } else if (!selectAll.checked) {
    checkboxArray.forEach(function (ele) {
      ele.checked = false;
      const imageDiv = document.querySelector(".images");
      const orderIdContainer = document.querySelector(".orderId-container");

      imageDiv.innerHTML = "";
      orderIdContainer.innerHTML = "";
    });
  }
});

// change event for all food items checkboxes
breakfast.addEventListener("change",checkboxCheckAndUncheck);
sandwich.addEventListener("change", checkboxCheckAndUncheck);
mcCafe.addEventListener("change", checkboxCheckAndUncheck);
beverage.addEventListener("change", checkboxCheckAndUncheck);
combo.addEventListener("change", checkboxCheckAndUncheck);
bakery.addEventListener("change", checkboxCheckAndUncheck);
desserts.addEventListener("change", checkboxCheckAndUncheck);
happyMeal.addEventListener("change", checkboxCheckAndUncheck);
salads.addEventListener("change", checkboxCheckAndUncheck);

// function for check if all checkboxes are checked or not
function checkboxCheckAndUncheck(){
  let checkForTrue = checkboxArray.every(function(ele){
    return ele.checked;
  });

  if(checkForTrue){
    selectAll.checked = true;
    // console.log("checked:",checkForTrue)
  } else{
    selectAll.checked = false;
  }
};



