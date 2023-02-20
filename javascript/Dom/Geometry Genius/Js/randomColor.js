const myElements = document.querySelectorAll(".my-element");

myElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
  });
});
