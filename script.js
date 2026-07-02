/* Enigma Escape — mobile menu, nav shadow, flash-free scroll reveal, hero embers */
document.addEventListener("DOMContentLoaded", function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- mobile menu --- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    var nav = toggle.closest("nav");
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
    document.querySelectorAll("nav ul a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- nav shadow on scroll --- */
  var navEl = document.querySelector("nav");
  if (navEl) {
    var onScroll = function () { navEl.classList.toggle("scrolled", window.scrollY > 20); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // reduced motion: reveal targets are forced visible by CSS, skip observer + embers
  if (reduce) return;

  /* --- scroll reveal: only mark elements already tagged .reveal in the markup --- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --- hero ember particles --- */
  var hero = document.querySelector(".hero");
  if (hero) {
    for (var i = 0; i < 16; i++) {
      var s = document.createElement("span");
      s.className = "ember";
      var size = 3 + Math.random() * 6;
      s.style.left = Math.random() * 100 + "%";
      s.style.width = s.style.height = size + "px";
      s.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
      s.style.animationDuration = (4 + Math.random() * 5) + "s";
      s.style.animationDelay = (Math.random() * 6) + "s";
      s.style.opacity = 0;
      hero.appendChild(s);
    }
    var cue = document.createElement("div");
    cue.className = "hero-scroll";
    hero.appendChild(cue);
  }
});
