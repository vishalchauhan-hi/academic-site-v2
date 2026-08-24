+(function () {
  "use strict";

  var lens = document.querySelector("[data-research-lens]");
  if (!lens) return;

  var tabs = Array.prototype.slice.call(lens.querySelectorAll("[data-lens]"));
  var panels = Array.prototype.slice.call(lens.querySelectorAll("[data-lens-panel]"));

  function activate(name, focusTab) {
    lens.dataset.active = name;

    tabs.forEach(function (tab) {
      var active = tab.dataset.lens === name;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });

    panels.forEach(function (panel) {
      var active = panel.dataset.lensPanel === name;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  }

  lens.dataset.enhanced = "true";
  activate(lens.dataset.active || tabs[0].dataset.lens, false);

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      activate(tab.dataset.lens, false);
    });

    tab.addEventListener("keydown", function (event) {
      var nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      activate(tabs[nextIndex].dataset.lens, true);
    });
  });
}());
