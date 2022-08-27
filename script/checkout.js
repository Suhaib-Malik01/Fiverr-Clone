let data = JSON.parse(localStorage.getItem("Data"));
let price = +localStorage.getItem("cartPrice");
let qty = +document.getElementById("qty").value;

let tax = document.getElementById("tax");

let image = document.getElementById("image");
image.src = data.img;

let stotal = price * qty;
let taxamount = 200;
let ftotal = stotal + taxamount;
console.log(ftotal);
tax.innerText = taxamount;
let subtotal = document.getElementById("subtotal");
subtotal.innerText = stotal;

let total = document.getElementById("total");
total.innerText = ftotal;

let title = document.getElementById("title");
title.innerText = data.title;

let selectqty = () => {
  qty = +document.getElementById("qty").value;
  console.log(qty);
  stotal = price * qty;
  taxamount = 200 + 200 * (qty * 0.22);
  ftotal = stotal + taxamount;
  console.log(ftotal);

  tax.innerText = taxamount;
  subtotal = document.getElementById("subtotal");
  subtotal.innerText = stotal;

  total = document.getElementById("total");
  total.innerText = ftotal;
};


let checkout = () =>{
    window.location.href = "paymentgateway.html"
}

