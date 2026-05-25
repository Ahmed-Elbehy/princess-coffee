import { AboutAnemated } from "./opserer.js";
import { Slide } from "./testImonal.js";
import ChoseMenue from "./choosMenu.js";
// navpare efect on scrol;
let lastScrollTo = 0;
window.addEventListener("scroll", () => {
  const navpare = document.getElementById("navpare");
  const scrolingTop = document.documentElement.scrollTop;
  const home = document.getElementById("home");
  if (scrolingTop > lastScrollTo) {
    navpare.classList.remove("nav");
    navpare.classList.add("nav-hidden");
  } else {
    navpare.classList.add("nav");
    navpare.classList.remove("nav-hidden");
  }
  if (scrolingTop > home.offsetHeight - navpare.offsetHeight) {
    navpare.classList.add("bg-nav");
  } else {
    navpare.classList.remove("bg-nav");
  }
  lastScrollTo = scrolingTop;
});
//

AboutAnemated();
Slide();
ChoseMenue();
