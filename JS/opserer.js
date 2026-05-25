function AboutAnemated() {
  const selectedAbout = document.querySelectorAll(`.about-content`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // لو العنصر ظهر اعمل فيه كذا 
      if (entry.isIntersecting) {
        entry.target.classList.add(`about-content-show-text`);
        entry.target.classList.add(`about-content-show-video`);
        entry.target.classList.remove(`about-content-hidden-text`);
        entry.target.classList.remove(`about-content-hidden-video`);
      }
      //  else {
      //   entry.target.classList.remove(`about-text-content-show`);
      //   entry.target.classList.add(`about-text-content-hidden`);
      // }
    });
  });
  // cache element
  selectedAbout.forEach((element) => {
    observer.observe(element);
    // console.log(element);
  });
}

export { AboutAnemated };
