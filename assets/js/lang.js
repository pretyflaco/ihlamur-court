(function () {
  var root = document.documentElement;
  var KEY = "ihlamur-lang";
  var LANGS = ["tr", "en", "ru", "fr", "fa", "es", "it"];
  var RTL = { fa: true };

  var buttons = {};
  var switchEl = document.getElementById("lang-switch");
  if (switchEl) {
    var btns = switchEl.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < btns.length; i++) buttons[btns[i].getAttribute("data-set-lang")] = btns[i];
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "tr";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    root.setAttribute("dir", RTL[lang] ? "rtl" : "ltr");
    for (var l in buttons) {
      var on = l === lang;
      buttons[l].classList.toggle("is-active", on);
      buttons[l].setAttribute("aria-pressed", on ? "true" : "false");
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(LANGS.indexOf(saved) !== -1 ? saved : "tr");

  for (var l in buttons) {
    (function (lang, btn) {
      btn.addEventListener("click", function () { apply(lang); });
    })(l, buttons[l]);
  }
})();
