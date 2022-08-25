let container = document.getElementById("Products")

function display(arr) {
    container.innerHTML = ""
    arr.forEach(ele => {
        let div = document.createElement()
    })
}

let button = document.getElementById("button-crousel");
let div = document.getElementsByClassName("first-crousel");
let span = document.getElementById("left-button")
let i = 0;
button.onclick = () => {
    i++;
    for (let item of div) {
        if (i == 0) { item.style.left = "0px" }
        if (i == 1) { item.style.left = "-99%" }
        if (i == 2) { item.style.left = "-170%" }
        if (i > 1) { i = 1; }
    }
    let left_button = document.createElement("button");
    left_button.innerText = "<"
    
    if (i > 0) {
        span.append(left_button)
    }
    else {
        span.innerHTML = ""
    }
}
span.onclick = () => {
    i--;
    for (let item of div) {
        if (i == 0) { item.style.left = "0px" }
        if (i == 1) { item.style.left = "-99%" }
        if (i == 2) { item.style.left = "-170%" }
        if (i<0) { i = 0; }
    }
    let left_button = document.createElement("button");
    left_button.innerText = "<"
    let span = document.getElementById("left-button")
    if (i > 0) {
        span.append(left_button)
    }
    else {
        span.innerHTML = ""
    }
}


let pr_btn =  document.getElementsByClassName("pr-btn")

let pr_div = document.getElementsByClassName("product-box")
console.log(pr_div)
let j = 0;

pr_btn[1].onclick = () =>{
    j++;
    for (let item of pr_div){
        if (j==0){item.style.left = "0%"}
        if (j==1){item.style.left = "-17%"}
        if (j==2){item.style.left = "-35%"}
        if (j==3){item.style.left = "-53%"}
        if (j==4){item.style.left = "-70%"}
        if (j==5){item.style.left = "-88%"}
        if (j>5) {j=5};
    }
}

pr_btn[0].onclick = () =>{
    j--;
    for (let item of pr_div){
        if (j==0){item.style.left = "0%"}
        if (j==1){item.style.left = "-17%"}
        if (j==2){item.style.left = "-35%"}
        if (j==3){item.style.left = "-53%"}
        if (j==4){item.style.left = "-70%"}
        if (j==5){item.style.left = "-88%"}
        
        if (j<0) {j=0};
    }
}

let pr2_btn = document.getElementsByClassName("pr-btn2")
let span_left = document.getElementById("left-btn-pr2");
let pr2_div = document.getElementsByClassName("product-box2")
k = 0
pr2_btn[1].onclick = () =>{
    k++;
    for (let item of pr2_div){
        if (k==0){item.style.left = "0%"}
        
        if (k==1){item.style.left = "-132%"}
        if (k>1) {k=1};
    }
    if (k==0){
        document.querySelector("pr-btn2").disabled = true;
    }
}

pr2_btn[0].onclick = () =>{
    k--;
    for (let item of pr2_div){
        if (k==0){item.style.left = "0%"}
        if (k==1){item.style.left = "-132%"}
        if (k<0) {k=0};
    }
    if (k==0){
        let btn = document.querySelector("pr-btn2")
        btn.disabled = true;

    }
    
}



