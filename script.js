`use strict`;

///////////////////////////////////////////
// Smooth scrolling

const allLinks = document.querySelectorAll(`.a:link`);

allLinks.forEach(function(link) {
  link.addEventListener(`click`, function(e) {
    e.preventDefault();
    const href = link.getAttribute(`href`);
    //scroll to top
    if (href === `#`) window.scrollTo({
      top: 0,
      behavior: `smooth`,
    })
    //scroll to other links
    if (href !== `#` && href.startsWith(`#`)) {
      const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({behavior: `smooth`});
    }
  });
});

