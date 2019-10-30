const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navbar
let navBar= document.querySelectorAll("nav a");

// update navbar
for (i=0; i<navBar.length; i++){
  navBar[i].innerHTML=siteContent['nav']['nav-item-'+ (i +1)];
}
// Update navigation color
for (i=0; i<navBar.length; i++){
  navBar[i].style.color= "green";
};
//adding new Links to navbar
let firstNew=document.createElement("a");
firstNew.innerHTML="Alexis";
firstNew.setAttribute("href", "#");
let secondNew=document.createElement("a");
secondNew.innerHTML="Hill"
secondNew.setAttribute("href", "#");
let newNav=document.querySelector('nav');
newNav.prepend(firstNew);
newNav.appendChild(secondNew);
firstNew.style.color="green";
secondNew.style.color="green";

// middle text
let middleText = document.querySelector(".cta-text h1");
middleText.innerHTML=siteContent["cta"]["h1"];

//button styling
const thebutton= document.querySelector(".cta button");
thebutton.innerHTML=siteContent["cta"]["button"];

// the round image
let middleImg = document.getElementById("cta-img");
middleImg.setAttribute('src', siteContent["cta"]["img-src"])

//main content headers
let topContent=document.querySelectorAll(".main-content .top-content h4");
topContent[0].innerHTML=siteContent["main-content"]["features-h4"];
topContent[1].innerHTML=siteContent["main-content"]["about-h4"];
//middle content headers
let middleContent=document.querySelectorAll('.main-content .bottom-content h4');
middleContent[0].innerHTML=siteContent["main-content"]["services-h4"];
middleContent[1].innerHTML=siteContent["main-content"]["product-h4"];
middleContent[2].innerHTML=siteContent["main-content"]["vision-h4"];
// add main-content image
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//add main-content p
let topP=document.querySelectorAll(".main-content .top-content p");
topP[0].innerHTML=siteContent["main-content"]["features-content"];
topP[1].innerHTML=siteContent["main-content"]["about-content"];
//added bottom content p
let bottomP=document.querySelectorAll(".main-content .bottom-content p");
bottomP[0].innerHTML=siteContent["main-content"]["services-content"];
bottomP[1].innerHTML=siteContent["main-content"]["services-content"];
bottomP[2].innerHTML=siteContent["main-content"]["services-content"];
// contact info.
let contactInfo=document.querySelector(".contact h4");
contactInfo.innerHTML=siteContent["contact"]["contact-h4"];
let addressInfo=document.querySelectorAll('.contact p');
addressInfo[0].innerHTML=siteContent["contact"]["address"];
addressInfo[1].innerHTML=siteContent["contact"]["phone"];
addressInfo[2].innerHTML=siteContent["contact"]["email"];
//footer
let footerInfo=document.querySelector("footer");
footerInfo.innerHTML=siteContent["footer"]["copyright"];
