(function () {
  var audio = document.getElementById("bg-music");
  var btn = document.getElementById("music-toggle");
  if (!audio || !btn) return;

  var icon = btn.querySelector(".music-icon");
  var KEY = "ihlamur-music";
  var PLAY = "\u25B6";   // ▶
  var PAUSE = "\u23F8";  // ⏸

  function setState(playing) {
    btn.setAttribute("aria-pressed", playing ? "true" : "false");
    btn.classList.toggle("is-playing", playing);
    if (icon) icon.innerHTML = playing ? PAUSE : PLAY;
    try { localStorage.setItem(KEY, playing ? "on" : "off"); } catch (e) {}
  }

  btn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().then(function () { setState(true); }).catch(function () { setState(false); });
    } else {
      audio.pause();
      setState(false);
    }
  });

  audio.addEventListener("play", function () { setState(true); });
  audio.addEventListener("pause", function () { setState(false); });

  setState(false);
})();
