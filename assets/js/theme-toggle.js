(function () {
  "use strict";

  var root = document.documentElement;
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      var value = window.localStorage.getItem("theme");
      return value === "dark" || value === "light" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function updateControl(theme) {
    var control = document.getElementById("color-mode-toggle");
    var meta = document.getElementById("theme-color-meta");
    var city = document.getElementById("citySketch");
    var nextMode = theme === "dark" ? "light" : "dark";
    var label = "Switch to " + nextMode + " mode";

    if (control) {
      control.setAttribute("aria-label", label);
      control.setAttribute("title", label);
      control.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      var text = control.querySelector(".theme-toggle__label");
      if (text) text.textContent = label;
    }

    if (meta) meta.setAttribute("content", theme === "dark" ? "#10161a" : "#ffffff");

    if (city) {
      city.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Animated night illustration of a future Tokyo street with moonlight, glowing windows, Tokyo Tower, a robotaxi, a Smart Pole, and a delivery robot."
          : "Animated daytime illustration of a future Tokyo street with Tokyo Tower, Mount Fuji, a robotaxi, a Smart Pole, and a delivery robot."
      );
    }
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    if (persist) {
      try {
        window.localStorage.setItem("theme", theme);
      } catch (error) {
        /* The mode still works for this page when storage is unavailable. */
      }
    }
    updateControl(theme);
    window.dispatchEvent(new CustomEvent("site-theme-change", { detail: { theme: theme } }));
  }

  function initialise() {
    updateControl(currentTheme());

    var control = document.getElementById("color-mode-toggle");
    if (control) {
      control.addEventListener("click", function (event) {
        event.preventDefault();
        applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
      });
    }

    systemTheme.addEventListener("change", function (event) {
      if (!savedTheme()) applyTheme(event.matches ? "dark" : "light", false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
}());
