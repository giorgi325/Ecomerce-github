const bar = document.getElementById("bar");
const nav = document.getElementById("navBar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const mainImage = document.getElementById("MainImage");
const smallImage = document.getElementsByClassName("s-image");

smallImage[0].onclick = function () {
  mainImage.src = smallImage[0].src;
};

smallImage[1].onclick = function () {
  mainImage.src = smallImage[1].src;
};

smallImage[2].onclick = function () {
  mainImage.src = smallImage[2].src;
};

smallImage[3].onclick = function () {
  mainImage.src = smallImage[3].src;
};
