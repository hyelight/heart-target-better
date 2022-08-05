const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const heart = document.querySelector(".heart");
const target = document.querySelector(".target");

addEventListener("load", () => {
  const heartRect = heart.getBoundingClientRect();
  const heartHalfWidth = heartRect.width / 2;
  const heartHalfHeight = heartRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    heart.style.transform = `translate(${x - heartHalfWidth}px, ${
      y - heartHalfHeight
    }px)`;
    target.style.transform = `translate(${x}px, ${y}px)`;
    target.innerHTML = `${x}px, ${y}px`;
  });
});
