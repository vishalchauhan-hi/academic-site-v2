+(function () {
  "use strict";

  var svg = document.getElementById("citySketch");
  if (!svg || svg.tagName.toLowerCase() !== "svg") return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var pinnedGroup = null;

  function setGroupActive(group, active) {
    if (group) group.classList.toggle("is-live", active);
  }

  svg.querySelectorAll("g.el").forEach(function (group) {
    if (canHover) {
      group.addEventListener("mouseenter", function () {
        if (!pinnedGroup) setGroupActive(group, true);
      });
      group.addEventListener("mouseleave", function () {
        if (pinnedGroup !== group) setGroupActive(group, false);
      });
    }

    group.addEventListener("click", function (event) {
      event.stopPropagation();
      if (pinnedGroup === group) {
        setGroupActive(group, false);
        pinnedGroup = null;
        return;
      }

      setGroupActive(pinnedGroup, false);
      pinnedGroup = group;
      setGroupActive(group, true);
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest("#citySketch")) {
      setGroupActive(pinnedGroup, false);
      pinnedGroup = null;
    }
  });

  if (!reduceMotion) {
    var windows = Array.prototype.slice.call(svg.querySelectorAll(".win-x"));
    window.setInterval(function () {
      if (!windows.length || svg.classList.contains("paused") || svg.classList.contains("offscreen")) return;
      var windowShape = windows[Math.floor(Math.random() * windows.length)];
      windowShape.classList.toggle("on");
      var lit = windows.filter(function (shape) {
        return shape.classList.contains("on");
      });
      if (lit.length > 3) lit[0].classList.remove("on");
    }, 2100);
  }

  var farLayer = document.getElementById("lyr-far");
  var middleLayer = document.getElementById("lyr-mid");

  if (farLayer && middleLayer && canHover && !reduceMotion) {
    var frame = 0;
    var host = svg.closest(".citysketch") || svg;

    host.addEventListener("pointermove", function (event) {
      if (frame) return;
      frame = window.requestAnimationFrame(function () {
        frame = 0;
        var rect = svg.getBoundingClientRect();
        var offset = ((event.clientX - rect.left) / Math.max(rect.width, 1)) - 0.5;
        farLayer.style.transform = "translateX(" + (offset * 10).toFixed(1) + "px)";
        middleLayer.style.transform = "translateX(" + (offset * 5).toFixed(1) + "px)";
      });
    });

    host.addEventListener("pointerleave", function () {
      farLayer.style.transition = middleLayer.style.transition = "transform .5s ease";
      farLayer.style.transform = middleLayer.style.transform = "";
      window.setTimeout(function () {
        farLayer.style.transition = middleLayer.style.transition = "";
      }, 520);
    });
  }

  var drawables = Array.prototype.slice.call(svg.querySelectorAll(".d"));

  function restartStory() {
    svg.classList.add("anim-reset");
    void svg.getBoundingClientRect();
    svg.classList.remove("anim-reset");
  }

  function replay() {
    if (reduceMotion) return;

    restartStory();
    svg.classList.add("predraw");

    drawables.forEach(function (element) {
      var length = 0;
      try {
        length = element.getTotalLength();
      } catch (error) {
        length = 0;
      }
      if (!length) return;
      element.style.transition = "none";
      element.style.strokeDasharray = length;
      element.style.strokeDashoffset = length;
      element.dataset.strokeLength = length;
    });

    void svg.getBoundingClientRect();

    drawables.forEach(function (element, index) {
      if (!element.dataset.strokeLength) return;
      element.style.transition = "stroke-dashoffset .65s ease " + (index * 12) + "ms";
      element.style.strokeDashoffset = "0";
    });

    window.setTimeout(function () {
      svg.classList.remove("predraw");
    }, drawables.length * 12 * 0.55);

    window.setTimeout(function () {
      drawables.forEach(function (element) {
        element.style.transition = "";
        element.style.strokeDasharray = "";
        element.style.strokeDashoffset = "";
        delete element.dataset.strokeLength;
      });
    }, drawables.length * 12 + 900);
  }

  var replayButton = document.getElementById("capReplay");
  if (replayButton) {
    replayButton.addEventListener("click", function (event) {
      event.stopPropagation();
      replay();
    });
  }

  var pauseButton = document.getElementById("capPause");
  if (pauseButton) {
    if (reduceMotion) pauseButton.hidden = true;
    pauseButton.addEventListener("click", function (event) {
      event.stopPropagation();
      var paused = svg.classList.toggle("paused");
      pauseButton.textContent = paused ? "Play" : "Pause";
      pauseButton.setAttribute("aria-pressed", paused ? "true" : "false");
    });
  }

  if ("IntersectionObserver" in window) {
    var hasPlayed = false;
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        svg.classList.toggle("offscreen", !entry.isIntersecting);
        if (entry.isIntersecting && !hasPlayed && !reduceMotion) {
          hasPlayed = true;
          replay();
        }
      });
    }, { threshold: 0.25 }).observe(svg);
  }
}());

