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
        if (i < 0) { i = 0; }
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


let pr_btn = document.getElementsByClassName("pr-btn")

let pr_div = document.getElementsByClassName("product-box")
console.log(pr_div)
let j = 0;

pr_btn[1].onclick = () => {
    j++;
    for (let item of pr_div) {
        if (j == 0) { item.style.left = "0%" }
        if (j == 1) { item.style.left = "-17%" }
        if (j == 2) { item.style.left = "-35%" }
        if (j == 3) { item.style.left = "-53%" }
        if (j == 4) { item.style.left = "-70%" }
        if (j == 5) { item.style.left = "-88%" }
        if (j > 5) { j = 5 };
    }
}

pr_btn[0].onclick = () => {
    j--;
    for (let item of pr_div) {
        if (j == 0) { item.style.left = "0%" }
        if (j == 1) { item.style.left = "-17%" }
        if (j == 2) { item.style.left = "-35%" }
        if (j == 3) { item.style.left = "-53%" }
        if (j == 4) { item.style.left = "-70%" }
        if (j == 5) { item.style.left = "-88%" }

        if (j < 0) { j = 0 };
    }
}

let pr2_btn = document.getElementsByClassName("pr-btn2")
let span_left = document.getElementById("left-btn-pr2");
let pr2_div = document.getElementsByClassName("product-box2")
k = 0
pr2_btn[1].onclick = () => {
    k++;
    for (let item of pr2_div) {
        if (k == 0) { item.style.left = "0%" }
        if (k == 1) { item.style.left = "-132%" }
        if (k > 1) { k = 1 };
    }
    if (k == 0) {
        document.querySelector("pr-btn2").disabled = true;
    }
}

pr2_btn[0].onclick = () => {
    k--;
    for (let item of pr2_div) {
        if (k == 0) { item.style.left = "0%" }
        if (k == 1) { item.style.left = "-132%" }
        if (k < 0) { k = 0 };
    }
    if (k == 0) {
        let btn = document.querySelector("pr-btn2")
        btn.disabled = true;

    }

}

let hand_picked_button = document.getElementsByClassName("pr-btn-hand");
let hand_picked_box = document.getElementsByClassName("handpicked-box");

let hp_count = 0;

hand_picked_button[1].onclick = () => {
    hp_count++;
    for (let item of hand_picked_box) {
        if (hp_count == 0) { item.style.left = "0%" }
        if (hp_count == 1) { item.style.left = "-132%" }
        if (hp_count == 2) { item.style.left = "-145%" }
        if (hp_count > 2) { hp_count = 2 };
    }
}
hand_picked_button[0].onclick = () => {
    hp_count--;
    for (let item of hand_picked_box) {
        if (hp_count == 0) { item.style.left = "0%" }
        if (hp_count == 1) { item.style.left = "-132%" }
        if (hp_count < 0) { hp_count = 0 };
    }
}

let img_crousel_box = document.getElementsByClassName("img-crousel-box");
setInterval(function () {
    j++;
    for (let item of img_crousel_box) {
        if (j == 0) { item.style.left = "-100%" }
        if (j == 1) { item.style.left = "-200%" }
        if (j == 2) { item.style.left = "-300%" }
        if (j == 3) { item.style.left = "-400%" }
        if (j == 4) { item.style.left = "-500%" }
        if (j == 4) { j = 0 }
    }
}, 3000)

let pr3_btn = document.getElementsByClassName("pr-btn3")
let pr3_div = document.getElementsByClassName("product-box3")
let pr3_count = 0;

pr3_btn[1].onclick = () => {
    pr3_count++;
    for (let item of pr3_div) {
        if (pr3_count == 0) { item.style.left = "0%" }
        if (pr3_count == 1) { item.style.left = "-132%" }
        if (pr3_count > 1) { pr3_count = 1 };
    }
}
pr3_btn[0].onclick = () => {
    pr3_count--;
    for (let item of pr3_div) {
        if (pr3_count == 0) { item.style.left = "0%" }
        if (pr3_count == 1) { item.style.left = "-132%" }
        if (pr3_count < 0) { pr3_count = 0 };
    }
}


let data1 = [{
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "12579"
},
{
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/249267602/original/c95192d23c16c3c683f476b74447170a4a6e6a11.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3bc6e12ba621ef9a7acc276c5850f8ac-1647927539713/0a79bd7d-2873-4a6e-84d2-1579f24252ba.jpg",
    prtitle: "squarespace_2",
    title: "I will build a professional squarespace website design",
    rating: "4.8",
    price: "2516"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f5e3944f37ecd11f0ea18503379dafca-1620745529349/04d08dfb-b55f-4281-9efc-2d2d724cbd73.jpg",
    prtitle: "mrtranscendence",
    title: "I will do modern line art text or badge logo design",
    rating: "4.9",
    price: "2,097"
}, {
    img: "https://fiverr-res.cloudinary.com/video/upload/t_mobile_web_2/mfvu599mqehyhknsbwrg.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "pentakie",
    title: "I will create anything you ask me for in voxel art",
    rating: "5.0",
    price: "2,097"
}, {
    img: "https://fiverr-res.cloudinary.com/video/upload/so_0.127411,t_mobile_web_2/s6jkaycafhyrjugqnupg.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/81759ac842c4d1c98aba8201ec780215-1648912029823/9a886735-fb36-42f1-9db9-63955c792ef2.png",
    prtitle: "awabhashmi",
    title: "I will do professional video editing",
    rating: "4.9",
    price: "1,258"
}, {
    img: "https://fiverr-res.cloudinary.com/video/upload/so_2.631295,t_mobile_web_2/ixcufbaqqhpnucc3clpg.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/81c2eea31d56fa79ebbb6712037f3d18-1657097075722/caea5287-b1ec-480e-a42f-ceb63ef26e0d.jpg",
    prtitle: "digtalcreator",
    title: "I will edit your video in camtasia",
    rating: "5.0",
    price: "839"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
    prtitle: "scribbleline",
    title: "I will create awesome children book illustration",
    rating: "5.0",
    price: "1,258"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
    prtitle: "saturnogae",
    title: "I will create a custom digital illustration",
    rating: "5.0",
    price: "4,097"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "12579"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "12579"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "12579"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "12579"
}]

let pr2_container = document.getElementById("Products")

displayData1(data1)
function displayData1(data) {
    container.innerHTML = ""
    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class", "product-box")
        let img = document.createElement("img");
        img.src = ele.img
        let id_div = document.createElement("div");
        id_div.setAttribute("class", "prs-id")
        let id_img = document.createElement("img");
        id_img.src = ele.prImg;
        let prtitle = document.createElement("p");
        prtitle.innerText = ele.prtitle
        id_div.append(id_img, prtitle)
        let titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "title");
        let title = document.createElement("p");
        title.innerText = ele.title;
        let rating = document.createElement("p");
        rating.setAttribute("class","rating")
        rating.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16"
        height="16">
        <path fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
        </path>
        </svg>`
        let ratingText = document.createElement("span")
        ratingText.innerText = ele.rating
        rating.append(ratingText)
        titleDiv.append(title,rating)
        let pricing_div = document.createElement("div")
        pricing_div.setAttribute("class","pricing")
        let svg_div = document.createElement("div");
        svg_div.innerHTML = `<svg viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.0769 0H0.923077C0.413276 0 0 0.415736 0 0.928571C0 1.44141 0.413276 1.85714 0.923077 1.85714H15.0769C15.5867 1.85714 16 1.44141 16 0.928571C16 0.415736 15.5867 0 15.0769 0Z">
        </path>
        <path
            d="M15.0769 5.57143H0.923077C0.413276 5.57143 0 5.98717 0 6.5C0 7.01284 0.413276 7.42857 0.923077 7.42857H15.0769C15.5867 7.42857 16 7.01284 16 6.5C16 5.98717 15.5867 5.57143 15.0769 5.57143Z">
        </path>
        <path
            d="M15.0769 11.1429H0.923077C0.413276 11.1429 0 11.5586 0 12.0714C0 12.5843 0.413276 13 0.923077 13H15.0769C15.5867 13 16 12.5843 16 12.0714C16 11.5586 15.5867 11.1429 15.0769 11.1429Z">
        </path>
    </svg>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
        </path>
    </svg>`
    let price_div = document.createElement("div")
    let starting = document.createElement("span")
    starting.innerText = "Starting From"
    let price_span = document.createElement("span");
    price_span = ele.price
    price_div.append(starting,price_span)
    pricing_div.append(svg_div,price_div)
    div.append(img,id_div,titleDiv,pricing_div)
    container.append(div)
    });
    
    
}