(function () {
  var root = document.documentElement;
  var KEY = "ihlamur-lang";

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  // initial: saved choice, otherwise always Turkish
  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === "en" ? "en" : "tr");

  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      apply(root.getAttribute("data-lang") === "tr" ? "en" : "tr");
    });
  }
})();
