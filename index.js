function init(options) {
    const { selector } = options;

    const cardHTML = `
    <div class="herepromotion">
        <img src="https://storage.herewallet.app/banners/here-logo.svg" alt="Here Logo">
        <p class="overlay-text">Get 50xp at HERE Wallet</p>
        <div class="popup">
            <div class="popup__items">
                <div class="popup__item item">
                    <p class="item__number">1</p>
                    <div class="item__text">Create wallet</div>
                    <div class="item__qr">
                        <div class="item__image">
                            <img src="https://svgshare.com/i/vRH.svg" alt="Here Logo" class="quarcode">
                        </div>
                        <p class="item__qrtext">Scan to create</p>
                    </div>
                </div>
                <div class="popup__item item item_noimage">
                    <p class="item__number">2</p>
                    <div class="item__text">Login</div>
                </div>
                <div class="popup__item item">
                    <p class="item__number">3</p>
                    <div class="item__text">Get 50 score for NFT Purchase</div>
                    <div class="item__image">
                        <img src="https://storage.herewallet.app/banners/promotion-nft.png" alt="Here NFTs">
                    </div>
                </div>
            </div>
            <div class="popup__footer">
                <p class="popup__text_s">Top-10 people by score every week get USDT and other prizes</p>
            </div>
        </div>
    </div>
    `;

    const container = document.querySelector(selector);

    container.innerHTML = cardHTML;
    const herePromotion = container.querySelector('.herepromotion');
    const popup = container.querySelector('.popup');

    let isTouchDevice = false;

    if (
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
    ) {
        isTouchDevice = true;
    }

    if (isTouchDevice) {
        herePromotion.addEventListener('click', (event) => {
            event.stopPropagation();
            popup.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    } else {
        herePromotion.addEventListener('mouseenter', () => {
            popup.classList.add('active');
        });

        herePromotion.addEventListener('mouseleave', () => {
            popup.classList.remove('active');
        });
    }
}

const HerePromotion = {
    init
};

export default HerePromotion;