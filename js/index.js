document.addEventListener("DOMContentLoaded", function () {
    // Popups
    class Popup {
        constructor(popupElement) {
            this._popupElement = popupElement;
            this._closeButton = this._popupElement.querySelector('.popup__close');
            this._img = this._popupElement.id === "photo" ? this._popupElement.querySelector('.popup__img') : null;
            this._handleEscClose = this._handleEscClose.bind(this)
            this._openingLinks = document.querySelectorAll(`[data-pointer="${this._popupElement.id}"]`)
            this.setEventListeners()
        }

        open(el) {
            if (this._img) this._img.src = el.src
            document.body.style.overflow = "hidden";
            this._popupElement.classList.add('popup_opened')
            document.addEventListener('keydown', this._handleEscClose);
        }

        close() {
            if (this._img) this._img.src = ""
            this._popupElement.classList.remove('popup_opened');
            document.body.style.overflow = "visible";
            document.removeEventListener('keydown', this._handleEscClose);
        }

        _handleEscClose(evt) {
            if (evt.keyCode === 27) {
                this.close();
            }
        }

        _handleOverlayClick(evt) {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        }

        setEventListeners() {
            this._openingLinks.forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); this.open(e.target) }))
            this._closeButton.addEventListener('click', () => this.close());
            this._popupElement.addEventListener('click', this._handleOverlayClick.bind(this));
        }
    }

    const popups = document.querySelectorAll('.popup')
    let popupsObj = {}
    if (popups.length > 0) popups.forEach(item => { popupsObj[item.id] = new Popup(item) })


    let inputTel = document.querySelectorAll("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    for (let tel of inputTel) {
        im.mask(tel);
    }

    //Бургер меню
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menuContainer');

    btn.addEventListener('click', showMenu);

    function showMenu() {
        menu.classList.toggle('menu-show');
        var toggle = document.querySelector('.nav-toggle');
        this.classList.toggle('opened');
    }

});