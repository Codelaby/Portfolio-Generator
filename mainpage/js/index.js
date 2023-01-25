const headerEl = document.querySelector(".section-header");
const navIconEl = document.querySelector(".nav-toggle");

/************ DARK THEM MODE */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', "dark");
} else {
  document.documentElement.setAttribute('data-theme', "light");
}
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    if (event.matches) {
      //dark mode
      document.documentElement.setAttribute('data-theme', "dark")
    } else {
      //light mode
      document.documentElement.setAttribute('data-theme', "light");
    }
  })

/************ SHOW MENU - MOBILE */

navIconEl.addEventListener("click", () => {
  headerEl.classList.toggle("show-menu");
});

/************ GET YEAR */

const yearEl = document.querySelector(".year");
yearEl.innerHTML = new Date().getFullYear();

/************ Smooth Scrolling */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (!href.startsWith("mailto:") && !href.startsWith("https"))
      e.preventDefault();

    //Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other page
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (headerEl.classList.contains("show-menu"))
      headerEl.classList.toggle("show-menu");
  });
});

/************ Reveal Section */

const allSectionsEl = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSectionsEl.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
