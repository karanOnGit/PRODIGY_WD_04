var timeline = gsap.timeline();

timeline.from("li", {
  y: -20,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});

timeline.from("section", {
  y: -20,
  duration: 1,
  opacity: 0,
  stagger: 1,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
});
