(function () {
  "use strict";

  function fallbackCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var copied = document.execCommand("copy");
    document.body.removeChild(field);
    return copied;
  }

  document.querySelectorAll(".citation-copy").forEach(function (button) {
    button.addEventListener("click", async function () {
      var citation = button.dataset.citation || "";
      var copied = false;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(citation);
          copied = true;
        } else {
          copied = fallbackCopy(citation);
        }
      } catch (error) {
        copied = fallbackCopy(citation);
      }

      var original = button.dataset.originalLabel || button.textContent;
      button.dataset.originalLabel = original;
      button.textContent = copied ? "Copied ✓" : "Select citation";
      button.classList.toggle("is-copied", copied);

      window.setTimeout(function () {
        button.textContent = original;
        button.classList.remove("is-copied");
      }, 1800);
    });
  });
}());
