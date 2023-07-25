import stylesText from "bundle-text:./nft-styles.css";
import cardHTML from "bundle-text:./nft-view.html";

const defaultLocales = {
  button: "Get 50xp at HERE Wallet",
  step1: "Create wallet",
  step2: "Login",
  step3: "Get 50 score for NFT Purchase",
  qrtext: "Scan to create",
  footer: "Top-10 people by score every week get USDT and other prizes",
};

function init({ appendTo, prependTo, locales = {} }) {
  const container = document.createElement("div");
  const style = document.createElement("style");
  container.innerHTML = cardHTML;
  style.textContent = stylesText;
  container.appendChild(style);

  const herePromotion = container.querySelector(".herepromotion");
  const popup = container.querySelector(".popup");

  locales = { ...defaultLocales, ...locales };
  container.querySelector(".item__step1").textContent = locales.step1;
  container.querySelector(".item__step2").textContent = locales.step2;
  container.querySelector(".item__step3").textContent = locales.step3;
  container.querySelector(".popup__text_s").textContent = locales.footer;
  container.querySelector(".item__qrtext").textContent = locales.qrtext;
  container.querySelector(".overlay-text").textContent = locales.button;

  if (appendTo) {
    const el = document.querySelector(appendTo);
    el.appendChild(container);
  }

  if (prependTo) {
    const el = document.querySelector(prependTo);
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
