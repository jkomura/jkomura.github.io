const w = document.documentElement.clientWidth;
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const navA = document.querySelectorAll("nav ul li a");
const aButton = document.querySelectorAll("a.button");

if (w > 430) {
  window.onscroll = () => {
    var current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 140) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        if(!li.classList.contains("active")){
          li.classList.add("active");
        }
      }
    });
  };
} else {
  navLi.forEach( (li) => {
    li.classList.remove("active");
  });
  navA.forEach( (button) => {
    button.addEventListener("click", () => {
      url = button.getAttribute("href");
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.getAttribute("id") == url.substring(1)) {
          section.classList.add("active");
        }
      });
    });
  });
  aButton.forEach( (button) => {
    button.addEventListener("click", () => {
      url = button.getAttribute("href");
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.getAttribute("id") == url.substring(1)) {
          section.classList.add("active");
        }
      });
    });
  });
}