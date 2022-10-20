const plus = document.querySelector(".btn_plus"),
  minus = document.querySelector(".btn_minus"),
  num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    num.innerText = a;
  }
});

const imageContent = document.querySelector(".image_product").children;

function changeImage(event) {
  document.querySelector(".main_img").src = event.src;

  for (let i = 0; i < imageContent.length; i++) {
    imageContent[i].classList.remove("active");
  }

  event.classList.add("active");
}
