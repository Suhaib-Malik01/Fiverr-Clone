let container = document.getElementById("Products")
let src_container = document.getElementById("Search-box")
let result = document.getElementById("result-for")
document.getElementById("Logout").addEventListener("click", function () {
    localStorage.removeItem("curr_user");
    window.location.href = "index.html"
})
function display(arr) {
    container.innerHTML = ""
    arr.forEach(ele => {
        let div = document.createElement()
    })
}
var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
console.log(height)

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
        if (j == 1) { item.style.left = "-20%" }
        if (j == 2) { item.style.left = "-40%" }
        if (j == 3) { item.style.left = "-60%" }
        if (j == 4) { item.style.left = "-90%" }
        if (j == 5) { item.style.left = "-100%" }
        if (j == 6) { item.style.left = "-120%" }

        if (j > 6) { j = 6 };
    }
}

pr_btn[0].onclick = () => {
    j--;
    for (let item of pr_div) {
        if (j == 0) { item.style.left = "0%" }
        if (j == 1) { item.style.left = "-20%" }
        if (j == 2) { item.style.left = "-40%" }
        if (j == 3) { item.style.left = "-60%" }
        if (j == 4) { item.style.left = "-80%" }
        if (j == 5) { item.style.left = "-100%" }
        if (j == 6) { item.style.left = "-120%" }
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
        if (pr3_count == 1) { item.style.left = "-150%" }
        if (pr3_count < 0) { pr3_count = 0 };
    }

}


let data1 = [{
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "₹12,579"
},
{
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/249267602/original/c95192d23c16c3c683f476b74447170a4a6e6a11.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3bc6e12ba621ef9a7acc276c5850f8ac-1647927539713/0a79bd7d-2873-4a6e-84d2-1579f24252ba.jpg",
    prtitle: "squarespace_2",
    title: "I will build a professional squarespace website design",
    rating: "4.8",
    price: "₹2,516"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f5e3944f37ecd11f0ea18503379dafca-1620745529349/04d08dfb-b55f-4281-9efc-2d2d724cbd73.jpg",
    prtitle: "mrtranscendence",
    title: "I will do modern line art text or badge logo design",
    rating: "4.9",
    price: "₹2,097"
}, {
    img: "https://fiverr-res.cloudinary.com/video/upload/t_mobile_web_2/mfvu599mqehyhknsbwrg.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "pentakie",
    title: "I will create anything you ask me for in voxel art",
    rating: "5.0",
    price: "₹2,097"
}, {
    img: "https://fiverr-res.cloudinary.com/video/upload/so_0.127411,t_mobile_web_2/s6jkaycafhyrjugqnupg.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/81759ac842c4d1c98aba8201ec780215-1648912029823/9a886735-fb36-42f1-9db9-63955c792ef2.png",
    prtitle: "awabhashmi",
    title: "I will do professional video editing",
    rating: "4.9",
    price: "₹1,258"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
    prtitle: "scribbleline",
    title: "I will create awesome children book illustration",
    rating: "5.0",
    price: "₹1,258"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
    prtitle: "saturnogae",
    title: "I will create a custom digital illustration",
    rating: "5.0",
    price: "₹4,097"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/122976221/original/f7f680791fc97002d27352949a72f3d3e22ec099.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create awesome digital illustrations",
    rating: "5.0",
    price: "₹12,579"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/227553052/original/8498aeaf11ece69f1182717e33b6ad07b9403fb9.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/163b05a00edc7efa710fcec681e69364-1605622167193/6571bb6e-f47c-47c1-8f53-20480c81a0ae.jpg",
    prtitle: "josedrozd",
    title: "I will paint a digital illustration",
    rating: "5.0",
    price: "₹1,679"
},{
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166517304/original/b05ee86d12b5fdf35bb67a27838c42a1a23b9825.jpeg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/studio/profile_photo/131045a4b61177dfb80427b7cc56cc2a-1595608241899/concept%202.jpg",
    prtitle: "indillustudio",
    title: "Our studio will illustrated and layout your children book",
    rating: "5.0",
    price: "₹19,288"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/151504727/original/95bea31785f840dd57f5ec5d8db59fc478e471cc.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/66f515f77ff63289cbed53db49fd053b-1660055915598/14b39ec2-da10-42d8-b35b-53ccec6e60bf.jpg",
    prtitle: "christophbrandl",
    title: "I will create a quirky text and illustrations",
    rating: "5.0",
    price: "₹33,185"
}];


let data2 = [{
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166517304/original/b05ee86d12b5fdf35bb67a27838c42a1a23b9825.jpeg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/studio/profile_photo/131045a4b61177dfb80427b7cc56cc2a-1595608241899/concept%202.jpg",
    prtitle: "indillustudio",
    title: "Our studio will illustrated and layout your children book",
    rating: "5.0",
    price: "₹19,288"
},
{
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/24665112/original/e6d6051cb9fb8c58a5125213ad5e0e1810ee8716.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/4550304/original/FullSizeRender.jpg",
    prtitle: "deesajn",
    title: "I will design hand made regal coat of arms heraldic family crest",
    rating: "5.0",
    price: "₹10,483"
}, {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216297223/original/25b65c505739e7b23a3f6065ecc3c41267125334.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/183bfff02b378b648403932b876928ae-1626604582273/805c51b4-7c7c-401b-8aa5-f9c860e03ddf.jpg",
    prtitle: "polinafrolovas",
    title: "I will create an awesome flat vector illustration",
    rating: "5.0",
    price: "₹2,516"
}, {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226203565/original/3e6094c25cab8f8687469ff583a97d4392386084.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5482182d6c541a1a0d51eede4c69d4ac-1585842655848/2a3398e9-fceb-4088-9149-dc4255cab858.jpg",
    prtitle: "pentakie",
    title: "I will make your fantasy map for rpg, novels and games",
    rating: "5.0",
    price: "₹10,063"
}, {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144708838/original/576353642f452475bf1cf65f0b07fd2e84d08bd0.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/569ea997e095c03aebdfc0c9b7adf52b-1647378469773/0f210677-032e-4e8b-9696-3aed98289c4f.png",
    prtitle: "leenas_art",
    title: "I will paint amazing childrens book illustrations",
    rating: "5.0",
    price: "₹1,678"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
    prtitle: "scribbleline",
    title: "I will create awesome children book illustration",
    rating: "5.0",
    price: "₹1,258"
}, {
    img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
    prtitle: "saturnogae",
    title: "I will create a custom digital illustration",
    rating: "5.0",
    price: "₹4,097"
}, {
    img: "https://fiverr-res.cloudinary.com/video/upload/so_58.157898,t_gig_cards_web/cycrxy7trsa5fnaeq6uw.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/30ca9f66052b9be8a370f62173df933f-1624555840302/70d851bc-2c77-48ec-bbf0-dd30bf97ff9d.png",
    prtitle: "devonstore",
    title: "I will draw any concept art, illustration, digital painting, covers as per your need",
    rating: "5.0",
    price: "₹2,936"
}, {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108823890/original/045778762f5dd3b75bdda74e579b762a6fc574cf.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
    prtitle: "byastridpr",
    title: "I will create an original highly detailed vector illustration",
    rating: "5.0",
    price: "₹12579"
}, {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/84040296/original/c66d7f960c72ba7f43742d88a57a2387b5927a55.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/60069259/original/12717708_1148560285156128_2549141096124852769_n.jpg",
    prtitle: "adrytia45",
    title: "I will draw fantasy or fan art character illustration",
    rating: "5.0",
    price: "₹12579"
}, {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218141978/original/98ec1f8a8b3f6a2c7ee12ebd737266d81287ace1.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ecd0960b702fb61ced1042226170daf4-1648621498639/0ff9e204-ba82-4b4e-9ec3-7f3b2cf9f600.jpg",
    prtitle: "czarymarys",
    title: "I will conjure up a pencil or watercolor illustration",
    rating: "5.0",
    price: "₹30,289"
},
{
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108305024/original/fc8976ac5a74644a2fec4282467b2e3b61b2ecac.jpg",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5424994e1151fe3ce3a1adf10b2fc781-1627981454301/b6fca746-e69e-4526-83e6-bec3f34ce5e7.jpg",
    prtitle: "kurvacadavra",
    title: "I will draw sport illustrations or anything in my style",
    rating: "5.0",
    price: "₹30,289"
},
{
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226203565/original/3e6094c25cab8f8687469ff583a97d4392386084.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5482182d6c541a1a0d51eede4c69d4ac-1585842655848/2a3398e9-fceb-4088-9149-dc4255cab858.jpg",
    prtitle: "pentakie",
    title: "I will make your fantasy map for rpg, novels and games",
    rating: "5.0",
    price: "₹10,063"
},
{
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213613878/original/671b6c88e70a9a857a0f529fd51928ec9ebc2a1f.png",
    prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a3326be88f8dc281ec082a5cadcc4987-1625012370056/ca7c6361-7bd1-4334-8828-6cb1eaaa6d70.png",
    prtitle: "joralv",
    title: "I will draw illustrations for children book",
    rating: "5.0",
    price: "₹30,289"
}]

let data3 = [
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226203565/original/3e6094c25cab8f8687469ff583a97d4392386084.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5482182d6c541a1a0d51eede4c69d4ac-1585842655848/2a3398e9-fceb-4088-9149-dc4255cab858.jpg",
        prtitle: "pentakie",
        title: "I will make your fantasy map for rpg, novels and games",
        rating: "5.0",
        price: "₹10,063"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144708838/original/576353642f452475bf1cf65f0b07fd2e84d08bd0.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/569ea997e095c03aebdfc0c9b7adf52b-1647378469773/0f210677-032e-4e8b-9696-3aed98289c4f.png",
        prtitle: "leenas_art",
        title: "I will paint amazing childrens book illustrations",
        rating: "5.0",
        price: "₹1,678"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
        prtitle: "scribbleline",
        title: "I will create awesome children book illustration",
        rating: "5.0",
        price: "₹1,258"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
        prtitle: "saturnogae",
        title: "I will create a custom digital illustration",
        rating: "5.0",
        price: "₹4,097"
    }, {
        img: "https://fiverr-res.cloudinary.com/video/upload/so_58.157898,t_gig_cards_web/cycrxy7trsa5fnaeq6uw.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/30ca9f66052b9be8a370f62173df933f-1624555840302/70d851bc-2c77-48ec-bbf0-dd30bf97ff9d.png",
        prtitle: "devonstore",
        title: "I will draw any concept art, illustration, digital painting, covers as per your need",
        rating: "5.0",
        price: "₹2,936"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172722254/original/0de825e38fd52bbbb9eab24c150434ca6be2b0c7.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create an original highly detailed vector illustration",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/84040296/original/c66d7f960c72ba7f43742d88a57a2387b5927a55.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/60069259/original/12717708_1148560285156128_2549141096124852769_n.jpg",
        prtitle: "adrytia45",
        title: "I will draw fantasy or fan art character illustration",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218141978/original/98ec1f8a8b3f6a2c7ee12ebd737266d81287ace1.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ecd0960b702fb61ced1042226170daf4-1648621498639/0ff9e204-ba82-4b4e-9ec3-7f3b2cf9f600.jpg",
        prtitle: "czarymarys",
        title: "I will conjure up a pencil or watercolor illustration",
        rating: "5.0",
        price: "₹30,289"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108305024/original/fc8976ac5a74644a2fec4282467b2e3b61b2ecac.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5424994e1151fe3ce3a1adf10b2fc781-1627981454301/b6fca746-e69e-4526-83e6-bec3f34ce5e7.jpg",
        prtitle: "kurvacadavra",
        title: "I will draw sport illustrations or anything in my style",
        rating: "5.0",
        price: "₹30,289"
    },
    {
        img: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/yu8ulrdxaxgfmfoa8w4i.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5600ca44bf65abf52de7cb7d57328452-1652170795062/6c1650b0-19a2-44a6-91a4-ee6683d54f15.jpg",
        prtitle: "a_moneer",
        title: "I will make pixel art backgrounds and landscapes animated too",
        rating: "5.0",
        price: "₹8,389"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213613878/original/671b6c88e70a9a857a0f529fd51928ec9ebc2a1f.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a3326be88f8dc281ec082a5cadcc4987-1625012370056/ca7c6361-7bd1-4334-8828-6cb1eaaa6d70.png",
        prtitle: "joralv",
        title: "I will draw illustrations for children book",
        rating: "5.0",
        price: "₹30,289"
    }
    , {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218141978/original/98ec1f8a8b3f6a2c7ee12ebd737266d81287ace1.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5424994e1151fe3ce3a1adf10b2fc781-1627981454301/b6fca746-e69e-4526-83e6-bec3f34ce5e7.jpg",
        prtitle: "czarymarys",
        title: "I will make a high quality illustration for you",
        rating: "5.0",
        price: "₹8,589"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create awesome digital illustrations",
        rating: "5.0",
        price: "₹12,579"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/249267602/original/c95192d23c16c3c683f476b74447170a4a6e6a11.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3bc6e12ba621ef9a7acc276c5850f8ac-1647927539713/0a79bd7d-2873-4a6e-84d2-1579f24252ba.jpg",
        prtitle: "squarespace_2",
        title: "I will build a professional squarespace website design",
        rating: "4.8",
        price: "₹2,516"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f5e3944f37ecd11f0ea18503379dafca-1620745529349/04d08dfb-b55f-4281-9efc-2d2d724cbd73.jpg",
        prtitle: "mrtranscendence",
        title: "I will do modern line art text or badge logo design",
        rating: "4.9",
        price: "₹2,097"
    }, {
        img: "https://fiverr-res.cloudinary.com/video/upload/t_mobile_web_2/mfvu599mqehyhknsbwrg.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "pentakie",
        title: "I will create anything you ask me for in voxel art",
        rating: "5.0",
        price: "₹2,097"
    }, {
        img: "https://fiverr-res.cloudinary.com/video/upload/so_0.127411,t_mobile_web_2/s6jkaycafhyrjugqnupg.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/81759ac842c4d1c98aba8201ec780215-1648912029823/9a886735-fb36-42f1-9db9-63955c792ef2.png",
        prtitle: "awabhashmi",
        title: "I will do professional video editing",
        rating: "4.9",
        price: "₹1,258"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
        prtitle: "scribbleline",
        title: "I will create awesome children book illustration",
        rating: "5.0",
        price: "₹1,258"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
        prtitle: "saturnogae",
        title: "I will create a custom digital illustration",
        rating: "5.0",
        price: "₹4,097"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create awesome digital illustrations",
        rating: "5.0",
        price: "₹12,579"
    }

]


let data4 = [
    {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
        prtitle: "scribbleline",
        title: "I will create awesome children book illustration",
        rating: "5.0",
        price: "₹1,258"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
        prtitle: "saturnogae",
        title: "I will create a custom digital illustration",
        rating: "5.0",
        price: "₹4,097"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172722254/original/0de825e38fd52bbbb9eab24c150434ca6be2b0c7.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I make you the best illustration in rick and morty style",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create awesome digital illustrations",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1549974/original/fiverrrlogo.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create awesome digital illustrations",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/129148066/original/4045bd06bc6c5b81a250bfe25e1a2eaaa119ec5f.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create awesome digital illustrations",
        rating: "5.0",
        price: "₹12,579"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166517304/original/b05ee86d12b5fdf35bb67a27838c42a1a23b9825.jpeg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/studio/profile_photo/131045a4b61177dfb80427b7cc56cc2a-1595608241899/concept%202.jpg",
        prtitle: "indillustudio",
        title: "Our studio will illustrated and layout your children book",
        rating: "5.0",
        price: "₹19,288"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/24665112/original/e6d6051cb9fb8c58a5125213ad5e0e1810ee8716.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/4550304/original/FullSizeRender.jpg",
        prtitle: "deesajn",
        title: "I will design hand made regal coat of arms heraldic family crest",
        rating: "5.0",
        price: "₹10,483"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216297223/original/25b65c505739e7b23a3f6065ecc3c41267125334.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/183bfff02b378b648403932b876928ae-1626604582273/805c51b4-7c7c-401b-8aa5-f9c860e03ddf.jpg",
        prtitle: "polinafrolovas",
        title: "I will create an awesome flat vector illustration",
        rating: "5.0",
        price: "₹2,516"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226203565/original/3e6094c25cab8f8687469ff583a97d4392386084.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5482182d6c541a1a0d51eede4c69d4ac-1585842655848/2a3398e9-fceb-4088-9149-dc4255cab858.jpg",
        prtitle: "pentakie",
        title: "I will make your fantasy map for rpg, novels and games",
        rating: "5.0",
        price: "₹10,063"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144708838/original/576353642f452475bf1cf65f0b07fd2e84d08bd0.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/569ea997e095c03aebdfc0c9b7adf52b-1647378469773/0f210677-032e-4e8b-9696-3aed98289c4f.png",
        prtitle: "leenas_art",
        title: "I will paint amazing childrens book illustrations",
        rating: "5.0",
        price: "₹1,678"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/78684071/original/f8d30313941327c28a1ffd0ab484fb59b092b657.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e3f42cf417a84d24eb672b7aabfe69ab-1647001575589/b111972b-0512-420b-a230-502904b84811.jpg",
        prtitle: "scribbleline",
        title: "I will create awesome children book illustration",
        rating: "5.0",
        price: "₹1,258"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/233588769/original/2233ab8a4f6beb0d5cbde1ff326ebf9392d6ba85.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/20f36c89acdfb24503f9ce8d828cdaaa-1637692183513/955d0781-b160-44ef-a5b7-fceed9007e6a.jpg",
        prtitle: "saturnogae",
        title: "I will create a custom digital illustration",
        rating: "5.0",
        price: "₹4,097"
    }, {
        img: "https://fiverr-res.cloudinary.com/video/upload/so_58.157898,t_gig_cards_web/cycrxy7trsa5fnaeq6uw.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/30ca9f66052b9be8a370f62173df933f-1624555840302/70d851bc-2c77-48ec-bbf0-dd30bf97ff9d.png",
        prtitle: "devonstore",
        title: "I will draw any concept art, illustration, digital painting, covers as per your need",
        rating: "5.0",
        price: "₹2,936"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108823890/original/045778762f5dd3b75bdda74e579b762a6fc574cf.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f6fa36d845d712e5d7cb9d7085d58e66-1558545571663/2f3230e6-b78c-4277-879b-d975f8351326.jpg",
        prtitle: "byastridpr",
        title: "I will create an original highly detailed vector illustration",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/84040296/original/c66d7f960c72ba7f43742d88a57a2387b5927a55.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/60069259/original/12717708_1148560285156128_2549141096124852769_n.jpg",
        prtitle: "adrytia45",
        title: "I will draw fantasy or fan art character illustration",
        rating: "5.0",
        price: "₹12,579"
    }, {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218141978/original/98ec1f8a8b3f6a2c7ee12ebd737266d81287ace1.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ecd0960b702fb61ced1042226170daf4-1648621498639/0ff9e204-ba82-4b4e-9ec3-7f3b2cf9f600.jpg",
        prtitle: "czarymarys",
        title: "I will conjure up a pencil or watercolor illustration",
        rating: "5.0",
        price: "₹30,289"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108305024/original/fc8976ac5a74644a2fec4282467b2e3b61b2ecac.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5424994e1151fe3ce3a1adf10b2fc781-1627981454301/b6fca746-e69e-4526-83e6-bec3f34ce5e7.jpg",
        prtitle: "kurvacadavra",
        title: "I will draw sport illustrations or anything in my style",
        rating: "5.0",
        price: "₹30,289"
    },
    {
        img: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/yu8ulrdxaxgfmfoa8w4i.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5600ca44bf65abf52de7cb7d57328452-1652170795062/6c1650b0-19a2-44a6-91a4-ee6683d54f15.jpg",
        prtitle: "a_moneer",
        title: "I will make pixel art backgrounds and landscapes animated too",
        rating: "5.0",
        price: "₹8,389"
    },
    {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213613878/original/671b6c88e70a9a857a0f529fd51928ec9ebc2a1f.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a3326be88f8dc281ec082a5cadcc4987-1625012370056/ca7c6361-7bd1-4334-8828-6cb1eaaa6d70.png",
        prtitle: "joralv",
        title: "I will draw illustrations for children book",
        rating: "5.0",
        price: "₹30,289"
    }
    , {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218141978/original/98ec1f8a8b3f6a2c7ee12ebd737266d81287ace1.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5424994e1151fe3ce3a1adf10b2fc781-1627981454301/b6fca746-e69e-4526-83e6-bec3f34ce5e7.jpg",
        prtitle: "czarymarys",
        title: "I will make a high quality illustration for you",
        rating: "5.0",
        price: "₹8,589"
    }
    , {
        img: "https://fiverr-res.cloudinary.com/video/upload/so_0.34495,t_gig_cards_web/mb7rduu5kskdkfnai2ok.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e674ae206dd73ada948841bb7e1604a4-1660325264125/e2d60c9f-92d5-40e2-8eeb-b4ca53f2e494.jpg",
        prtitle: "ashabd",
        title: "I will vectorize, convert, vector trace logo, or image to vector asap",
        rating: "5.0",
        price: "₹420"
    }
    , {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/37815250/original/afaf2d819a8ebbb449bb710e090b8a5b21713868.png",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/32c821e08c963101f165dd293ba88f1f-1534068659511/674094c4-cb94-46ee-898a-fa38af6f748a.jpg",
        prtitle: "czarymarys",
        title: "I will optimize website SEO on wordpress, shopify, wix, squarespace",
        rating: "5.0",
        price: "₹1,675"
    }
    , {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172722254/original/0de825e38fd52bbbb9eab24c150434ca6be2b0c7.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ddbe783335cb45dd2caad3f8dc8bdba1-1639264464421/93826de9-ecb7-4a65-9a38-979d54979f27.jpg",
        prtitle: "cartoonizeart",
        title: "I will make you the best illustration in rick and morty style",
        rating: "5.0",
        price: "₹1,259"
    }
    , {
        img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/24291177/original/5c5a4571a7abf505491b2612302d4a059aaae6b4.jpg",
        prImg: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/84126232cc31b0cf7a8d5ac34c9a1799-1643901748178/bddc2977-a5c3-4fd4-93bf-c076c0e06a4d.jpg",
        prtitle: "mary_v",
        title: "I will paint your portrait in my watercolor style",
        rating: "5.0",
        price: "₹1,589"
    }
]

let pr2_container = document.getElementById("Products")

displayData1(data1)
function displayData1(data) {
    pr2_container.innerHTML = ""
    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class", "product-box")
        div.addEventListener("click", function () {
            localStorage.setItem("Data", JSON.stringify(ele))
            window.location.href = "cart.html"
        })
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
        rating.setAttribute("class", "rating")
        rating.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16"
        height="16">
        <path fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
        </path>
        </svg>`
        let ratingText = document.createElement("span")
        ratingText.innerText = ele.rating
        rating.append(ratingText)
        titleDiv.append(title, rating)
        let pricing_div = document.createElement("div")
        pricing_div.setAttribute("class", "pricing")
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
        price_div.append(starting, price_span)
        pricing_div.append(svg_div, price_div)
        div.append(img, id_div, titleDiv, pricing_div)
        pr2_container.append(div)
    });


}

let pr3_container = document.getElementById("Products-2")
displayData2(data2)
function displayData2(data) {
    pr3_container.innerHTML = ""
    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class", "product-box2")
        div.addEventListener("click", function () {
            localStorage.setItem("Data", JSON.stringify(ele))
            window.location.href = "cart.html"
        })
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
        rating.setAttribute("class", "rating")
        rating.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16"
        height="16">
        <path fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
        </path>
        </svg>`
        let ratingText = document.createElement("span")
        ratingText.innerText = ele.rating
        rating.append(ratingText)
        titleDiv.append(title, rating)
        let pricing_div = document.createElement("div")
        pricing_div.setAttribute("class", "pricing")
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
        price_div.append(starting, price_span)
        pricing_div.append(svg_div, price_div)
        div.append(img, id_div, titleDiv, pricing_div)
        pr3_container.append(div)
    });
}


let pr4_container = document.getElementById("Products-3")


displayData3(data3)
function displayData3(data) {
    pr4_container.innerHTML = ""
    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class", "product-box3");
        div.addEventListener("click", function () {
            localStorage.setItem("Data", JSON.stringify(ele))
            window.location.href = "cart.html"
        })
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
        rating.setAttribute("class", "rating")
        rating.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16"
        height="16">
        <path fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
        </path>
        </svg>`
        let ratingText = document.createElement("span")
        ratingText.innerText = ele.rating
        rating.append(ratingText)
        titleDiv.append(title, rating)
        let pricing_div = document.createElement("div")
        pricing_div.setAttribute("class", "pricing")
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
        price_div.append(starting, price_span)
        pricing_div.append(svg_div, price_div)
        div.append(img, id_div, titleDiv, pricing_div)
        pr4_container.append(div)
    });
}

let pr5_container = document.getElementById("Products-4")

displayData4(data4)

function displayData4(data) {
    pr5_container.innerHTML = ""
    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class", "product-box4")
        div.addEventListener("click", function () {
            localStorage.setItem("Data", JSON.stringify(ele))
            window.location.href = "cart.html"
        })
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
        rating.setAttribute("class", "rating")
        rating.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16"
        height="16">
        <path fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
        </path>
        </svg>`
        let ratingText = document.createElement("span")
        ratingText.innerText = ele.rating
        rating.append(ratingText)
        titleDiv.append(title, rating)
        let pricing_div = document.createElement("div")
        pricing_div.setAttribute("class", "pricing")
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
        price_div.append(starting, price_span)
        pricing_div.append(svg_div, price_div)
        div.append(img, id_div, titleDiv, pricing_div)
        pr5_container.append(div)
    });
}

let sortTitle = () => {
    let value = document.getElementById("sort-price").value;
    if (value == "") {
        displayData1(data1)
    } else if (value == "Low") {
        data1.sort(function (a, b) {
            let x = a.price
            x = x.split(",").join("")
            x = x.split("₹").join("")
            let y = b.price
            y = y.split(",").join("")
            y = y.split("₹").join("")
            return Number(x) - Number(y)
        })
        displayData1(data1)
    } else if (value == "High") {
        data1.sort(function (a, b) {
            let x = b.price
            x = x.split(",").join("")
            x = x.split("₹").join("")
            let y = a.price
            y = y.split(",").join("")
            y = y.split("₹").join("")
            console.log(y)
            return Number(x) - Number(y)
        })
        displayData1(data1)

    }
}
let sortRating = () => {
    let value = document.getElementById("sort-rating").value;
    if (value == "") {
        displayData1(data1)
    } else if (value == "Low") {
        data1.sort(function (a, b) {
            return (Number(a.rating) - Number(b.rating))
        })
        displayData1(data1)
    } else if (value == "High") {
        data1.sort(function (a, b) {
            return (Number(b.rating) - Number(a.rating))
        })
        displayData1(data1)
    }
}

let userData = JSON.parse(localStorage.getItem("curr_user")) || "Suhaib"

document.getElementById("username-word").innerText = userData.username[0].toUpperCase()
document.getElementById("name-1").innerText = userData.username
document.getElementById("name-2").innerText = userData.username



function Search() {

    let new_data = []
    let value = document.getElementById("Search").value;
    data1.forEach(ele => {
        if (ele.title.includes(value)) {
            new_data.push(ele)
        }

    })
    if (new_data.length > 0 && value != "") {
        result.innerHTML = `Result for "<span id="Search-value">${value}</span>"`
        document.getElementById("pr-btn3-right").style.top = "1880px"
        document.getElementById("pr-btn3-left").style.top = "1880px"
        document.getElementById("pr-btn2-right").style.top = "160%"
        document.getElementById("pr-btn2-left").style.top = "160%"
        document.getElementById("left-btn-hand").style.top = "4400px";
        document.getElementById("right-btn-hand").style.top = "4400px";
        displaySearch1(new_data)

    } else {
        alert(`No Result For ${value}`)
    }

}


function displaySearch1(data) {
    console.log(data)
    src_container.innerHTML = ""
    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class", "product-box3")
        div.addEventListener("click", function () {
            localStorage.setItem("Data", JSON.stringify(ele))
            window.location.href = "cart.html"
        })
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
        rating.setAttribute("class", "rating")
        rating.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16"
        height="16">
        <path fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
        </path>
        </svg>`
        let ratingText = document.createElement("span")
        ratingText.innerText = ele.rating
        rating.append(ratingText)
        titleDiv.append(title, rating)
        let pricing_div = document.createElement("div")
        pricing_div.setAttribute("class", "pricing")
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
        price_div.append(starting, price_span)
        pricing_div.append(svg_div, price_div)
        div.append(img, id_div, titleDiv, pricing_div)
        src_container.append(div)
    });


}


