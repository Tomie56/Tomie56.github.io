// Shared image viewing for publication previews and the personal gallery.
$(document).ready(function () {
  let preview = null;
  const images = document.querySelectorAll(".publications img.preview, .football-gallery img");
  images.forEach(function (image) {
    image.setAttribute("data-zoomable", "");
  });

  if (typeof mediumZoom === "function") {
    window.medium_zoom = mediumZoom("[data-zoomable]", {
      margin: 24,
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color").trim() || "#fff",
    });
    window.medium_zoom.on("open", hidePreview);
  }

  if (!images.length) return;

  preview = document.createElement("div");
  preview.className = "image-hover-preview";
  preview.setAttribute("aria-hidden", "true");
  preview.hidden = true;
  const enlargedImage = document.createElement("img");
  enlargedImage.alt = "";
  preview.appendChild(enlargedImage);
  document.body.appendChild(preview);

  function hidePreview() {
    if (preview) preview.hidden = true;
  }

  function showPreview(image) {
    if (!image.naturalWidth || (window.medium_zoom && window.medium_zoom.getZoomedImage())) return;

    const margin = 16;
    const border = 4;
    const maxWidth = Math.min(800, window.innerWidth - margin * 2 - border);
    const maxHeight = window.innerHeight - margin * 2 - border;
    const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
    const width = Math.round(image.naturalWidth * scale);
    const height = Math.round(image.naturalHeight * scale);
    const boxWidth = width + border;
    const boxHeight = height + border;
    const rect = image.getBoundingClientRect();
    let left = rect.right + margin;
    if (left + boxWidth > window.innerWidth - margin) {
      left = rect.left - boxWidth - margin;
    }
    if (left < margin) left = (window.innerWidth - boxWidth) / 2;
    const top = Math.max(margin, Math.min(rect.top, window.innerHeight - boxHeight - margin));

    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.style.width = width + "px";
    enlargedImage.style.height = height + "px";
    preview.style.left = left + "px";
    preview.style.top = top + "px";
    preview.hidden = false;
  }

  images.forEach(function (image) {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Enlarge image: " + image.alt);
    image.addEventListener("pointerenter", function (event) {
      if (event.pointerType === "mouse") showPreview(image);
    });
    image.addEventListener("pointermove", function (event) {
      if (preview.hidden && event.pointerType === "mouse") showPreview(image);
    });
    image.addEventListener("pointerleave", hidePreview);
    image.addEventListener("focus", function () {
      if (image.matches(":focus-visible")) showPreview(image);
    });
    image.addEventListener("blur", hidePreview);
    image.addEventListener("click", hidePreview);
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        hidePreview();
        if (window.medium_zoom) window.medium_zoom.open({ target: image });
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") hidePreview();
  });
  window.addEventListener("scroll", hidePreview, true);
  window.addEventListener("resize", hidePreview);
  window.addEventListener("blur", hidePreview);
});
