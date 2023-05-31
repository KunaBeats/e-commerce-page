const body = document.querySelector("body");
const menuBtn = document.getElementById("menu-item");
const closeBtn = document.getElementById("close-item");
const mobileMenu = document.getElementById("mobile-menu");
const swipeRight = document.getElementById("swipe-right");
const swipeLeft = document.getElementById("swipe-left");
const amount = document.getElementById("amount");
const cartAmount = document.getElementById("cart-amount");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
let sum = 0;
let cartSum = 0;
const cartBtn = document.querySelector(".cart-item");
const cartMain = document.querySelector(".cart-main-div");
const addBtn = document.querySelector(".add-button");
const mainImgEl = document.querySelector(
  ".image-section .slideshow-container .fade .main-img"
);

/* Slide Show for Mobile View */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

swipeRight.addEventListener("click", () => plusSlides(1));
swipeLeft.addEventListener("click", () => plusSlides(-1));

/* Desktop Pictures */

document.querySelectorAll(".pic-small").forEach((item) => {
  item.addEventListener("click", (e) => {
    mainImgEl.src = e.currentTarget.src;
  });
});

/* Mobile Menu */

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  body.classList = "backdrop";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  body.classList = "";
});

/* Increase/Decrease Amount */

plus.addEventListener("click", () => {
  sum += 1;
  amount.innerText = sum;
});

minus.addEventListener("click", () => {
  if (sum <= 1) {
    cartAmount.style.display = "none";
  }
  if (sum <= 0) {
    minus.disabled = true;
  } else {
    sum -= 1;
    amount.innerText = sum;
  }
});

/* Cart */

addBtn.addEventListener("click", () => {
  cartSum += sum;
  cartAmount.innerText = cartSum;
  sum = 0;
  amount.innerText = sum;
  cartAmount.style.display = "block";

  renderCart();
});

cartBtn.addEventListener("click", () => {
  cartMain.classList.toggle("block");
});

function emptyCart() {
  cartMain.innerHTML = "";
  const cartDiv = document.createElement("div");
  cartDiv.classList = "cart-div";
  cartDiv.innerHTML = `
        <h4>Cart</h4>
        <p>empty</p>
    `;
  cartMain.appendChild(cartDiv);
  sum = 0;
  cartSum = 0;
  amount.innerText = 0;
  cartAmount.style.display = "none";
}

function setDefault() {
  sum = 0;
  cartAmount.style.display = "none";
  amount.innerText = 0;
}

function renderCart() {
  cartMain.innerHTML = "";
  let lastSum = 125 * cartSum;
  const cartDiv = document.createElement("div");
  cartDiv.classList = "cart-div";
  cartDiv.innerHTML = `
        <h4>Cart</h4>
        <div class="cart-section">
        <img class="cart-img" src="ecommerce-product-page-main/images/image-product-1.jpg">
        <div class="cart-info">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${cartSum}  <b>$${lastSum}<b></p>
        </div>
        <svg id="bin" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </div>
        <button class="checkout-button">Checkout</button>
    `;
  cartMain.appendChild(cartDiv);

  document.getElementById("bin").addEventListener("click", emptyCart);
}
