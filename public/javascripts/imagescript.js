let image = document.querySelector('#singleImage');
let scaledWidth;
let scaledHeight;

imageNode.addEventListener("load", () => {
  scaledWidth = image.naturalWidth * 0.50;
  scaledHeight = image.naturalHeight * 0.50;
  image.width = scaledWidth;
  image.height = scaledHeight;
});

image.addEventListener("click", (event) => {
    if ((image.getAttribute('class') === null) || (image.getAttribute('class') === "")) {
      image.removeAttribute("width");
      image.removeAttribute("height");
      image.setAttribute("class", "normal");
    } else {
      image.width = scaledWidth;
      image.height = scaledHeight;
      image.setAttribute("class", "");
    }
    event.preventDefault();
  }
);
