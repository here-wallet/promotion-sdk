import stylesText from "bundle-text:./nft-styles.css";
import cardHTML from "bundle-text:./nft-view.html";

function init({ appendTo, prependTo }) {
  const container = document.createElement("div");
  const style = document.createElement("style");
  container.innerHTML = cardHTML;
  style.textContent = stylesText;
  container.appendChild(style);

  const herePromotion = container.querySelector(".herepromotion");
  const popup = container.querySelector(".popup");

  if (appendTo) {
    const el = document.querySelector(appendTo);
    el.appendChild(container);
  }

  if (prependTo) {
    const el = document.querySelector(appendTo);
    el.prepend(container);
  }

  let isTouchDevice = false;
  if ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
    isTouchDevice = true;
  }

  if (isTouchDevice) {
    herePromotion.addEventListener("click", (event) => {
      event.stopPropagation();
      popup.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  } else {
    herePromotion.addEventListener("mouseenter", () => {
      popup.classList.add("active");
    });

    herePromotion.addEventListener("mouseleave", () => {
      popup.classList.remove("active");
    });
  }

  return container;
}

const HerePromotion = { init };

window.HerePromotion = HerePromotion;

export default HerePromotion;
