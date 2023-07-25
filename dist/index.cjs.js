function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9f601db4d857f9d8$export$2e2bcd8739ae039);
var $daa41789ab886b8e$exports = {};
$daa41789ab886b8e$exports = "@import \"https://fonts.cdnfonts.com/css/cabinet-grotesk\";\n@import \"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap\";\n.herepromotion {\n  cursor: pointer;\n  box-sizing: content-box;\n  background: #e89437;\n  border-radius: 16px;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  width: 205px;\n  height: 33px;\n  display: inline-flex;\n  position: relative;\n}\n\n.herepromotion * {\n  box-sizing: content-box;\n}\n\n.herepromotion img {\n  width: 23.111px;\n  height: 16px;\n}\n\n.herepromotion p {\n  margin: 0;\n}\n\n.overlay-text {\n  color: #121212;\n  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 16px;\n}\n\n.popup {\n  z-index: 2000;\n  color: #fff;\n  box-sizing: content-box;\n  background: #2e2d2d;\n  border-radius: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 12px;\n  width: 247px;\n  padding: 20px 24px;\n  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;\n  transition: all .3s ease-in-out;\n  display: none;\n  position: absolute;\n  top: 35px;\n  right: 0;\n}\n\n.popup:before {\n  content: url(\"https://storage.herewallet.app/nft-promo/promotionstar.svg\");\n  position: absolute;\n  top: -15px;\n  left: -15px;\n}\n\n.popup:after {\n  content: \"50XP\";\n  color: #0a0848;\n  text-align: center;\n  letter-spacing: .09px;\n  text-transform: uppercase;\n  font-family: Inter;\n  font-size: 9px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  position: absolute;\n  top: -5px;\n  left: -9px;\n}\n\n.popup.active {\n  transition: all .3s ease-in-out;\n  display: block;\n  top: 35px;\n}\n\n.popup__items {\n  flex-direction: column;\n  gap: 25px;\n  display: flex;\n}\n\n.item {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.item_noimage {\n  justify-content: start;\n  gap: 10px;\n}\n\n.item__number {\n  letter-spacing: .14px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 22px;\n  height: 22px;\n  font-family: Cabinet Grotesk;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 24px;\n  display: flex;\n}\n\n.item__image {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.item__image img {\n  width: 96px;\n  height: 104px;\n}\n\n.quarcode {\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.item__text {\n  letter-spacing: .14px;\n  max-width: 100px;\n  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.item__qrtext {\n  opacity: .7;\n  padding-top: 8px;\n}\n\n.popup__footer {\n  text-align: center;\n  margin: 0;\n  padding-top: 20px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n}\n\n.popup__text_s {\n  padding: 0 10px;\n}\n\n";


var $e40104f1e0f1cfcf$exports = {};
$e40104f1e0f1cfcf$exports = "<div class=\"herepromotion\">\n    <img src=\"https://storage.herewallet.app/nft-promo/here-logo.svg\" alt=\"Here Logo\">\n    <p class=\"overlay-text\">Get 50xp at HERE Wallet</p>\n    <div class=\"popup\">\n        <div class=\"popup__items\">\n            <div class=\"popup__item item\">\n                <p class=\"item__number\">1</p>\n                <div class=\"item__text item__step1\">Create wallet</div>\n                <div class=\"item__qr\">\n                    <div class=\"item__image\">\n                        <img src=\"https://storage.herewallet.app/nft-promo/download.herewallet.png\" alt=\"Here Logo\" class=\"quarcode\">\n                    </div>\n                    <p class=\"item__qrtext\">Scan to create</p>\n                </div>\n            </div>\n            <div class=\"popup__item item item_noimage\">\n                <p class=\"item__number\">2</p>\n                <div class=\"item__text item__step2\">Login</div>\n            </div>\n            <div class=\"popup__item item\">\n                <p class=\"item__number\">3</p>\n                <div class=\"item__text item__step3\">Get 50 score for NFT Purchase</div>\n                <div class=\"item__image\">\n                    <img src=\"https://storage.herewallet.app/nft-promo/promotion-nft.png\" alt=\"Here NFTs\">\n                </div>\n            </div>\n        </div>\n        <div class=\"popup__footer\">\n            <p class=\"popup__text_s\">Top-10 people by score every week get USDT and other prizes</p>\n        </div>\n    </div>\n</div>";


const $9f601db4d857f9d8$var$defaultLocales = {
    button: "Get 50xp at HERE Wallet",
    step1: "Create wallet",
    step2: "Login",
    step3: "Get 50 score for NFT Purchase",
    qrtext: "Scan to create",
    footer: "Top-10 people by score every week get USDT and other prizes"
};
function $9f601db4d857f9d8$var$init({ appendTo: appendTo, prependTo: prependTo, locales: locales = {} }) {
    const container = document.createElement("div");
    const style = document.createElement("style");
    container.innerHTML = (0, (/*@__PURE__*/$parcel$interopDefault($e40104f1e0f1cfcf$exports)));
    style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($daa41789ab886b8e$exports)));
    container.appendChild(style);
    const herePromotion = container.querySelector(".herepromotion");
    const popup = container.querySelector(".popup");
    locales = {
        ...$9f601db4d857f9d8$var$defaultLocales,
        ...locales
    };
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
    if ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch) isTouchDevice = true;
    if (isTouchDevice) {
        herePromotion.addEventListener("click", (event)=>{
            event.stopPropagation();
            popup.classList.toggle("active");
        });
        document.addEventListener("click", ()=>{
            popup.classList.remove("active");
        });
    } else {
        herePromotion.addEventListener("mouseenter", ()=>{
            popup.classList.add("active");
        });
        herePromotion.addEventListener("mouseleave", ()=>{
            popup.classList.remove("active");
        });
    }
    return container;
}
const $9f601db4d857f9d8$var$HerePromotion = {
    init: $9f601db4d857f9d8$var$init
};
window.HerePromotion = $9f601db4d857f9d8$var$HerePromotion;
var $9f601db4d857f9d8$export$2e2bcd8739ae039 = $9f601db4d857f9d8$var$HerePromotion;


//# sourceMappingURL=index.cjs.js.map
