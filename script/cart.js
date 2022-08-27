let tabs = document.querySelectorAll("[data-tab-target]");
let tabContents = document.querySelectorAll("[data-tab-content");
//ele ==>tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

let data = JSON.parse(localStorage.getItem("Data"));

let dataprice = data.price;
dataprice = data.price.split(",").join("");
dataprice = dataprice.split("₹").join("");

let basicPrice = +dataprice;

let standardPrice = +dataprice * 2;
let premiumPrice = +dataprice * 3;

let basic = document.getElementById("cart-basic-price");
basic.innerText = "₹"+ basicPrice;

let standard = document.getElementById("cart-standard-price");
standard.innerText = "₹"+ standardPrice;

let premium = document.getElementById("cart-premium-price");
premium.innerText = "₹"+ premiumPrice;

// now for the cart page title
let title = document.getElementById("title");
title.innerText = data.title;

// cart page image
let image = document.getElementById("image");
image.src = data.img;

function cartbasic() {
  console.log(basicPrice);
  localStorage.setItem("cartPrice", basicPrice);
  window.location.href = "chechout.html";
}

function cartstandard() {
  console.log(standardPrice);
  localStorage.setItem("cartPrice", standardPrice);
  window.location.href = "chechout.html";
}
function cartpremium() {
  console.log(premiumPrice);
  localStorage.setItem("cartPrice", premiumPrice);
  window.location.href = "chechout.html";
}
