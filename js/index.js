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




    //Бургер меню
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menuContainer');

    btn.addEventListener('click', showMenu);

    function showMenu() {
        menu.classList.toggle('menu-show');
        var toggle = document.querySelector('.nav-toggle');
        this.classList.toggle('opened');
    }








    //Маска телефона
    let inputTel = document.querySelectorAll("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    for (let tel of inputTel) {
        im.mask(tel);
    }


    // Валидация формы Связаться
    function hasInvalidInput(elements) {
        return elements.some((element) => !element.validity.valid);
    }

    let inputTel1 = document.getElementById('phone1');
    let btnSubmit1 = document.getElementById('formSumbit1');

    const inputs1 = document.querySelectorAll('.contact__input');

    const setIsDisabled1 = () => {

        if (!(inputTel1.value.includes('_')) && inputTel1.value && !hasInvalidInput(Array.from(inputs1))) {
            btnSubmit1.disabled = false;
            btnSubmit1.style.opacity = "1";
        } else {
            btnSubmit1.disabled = true;
            btnSubmit1.style.opacity = "0.4";
        }
    }

    inputs1.forEach(input => input.addEventListener('input', () => setTimeout(() => setIsDisabled1(), 5)))


    // отправка формы Связаться
    const form1 = document.querySelector('#form1')
    form1.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('contact.php', {
            method: 'POST',
            body: new FormData(form1)
        }).then((res) => res.json()).then(result => {
            if (result.error === false) {
                return alert('Спасибо! Ваша заявка принята. Мы свяжемся с Вами в ближайшее время!')
            }
            alert('Ошибка! Попробуйте еще раз!')
        }).catch((err) => alert('Ошибка! Попробуйте еще раз!')).finally(() => { form1.reset(), setIsDisabled2() })
    })



    // Валидация формы Есть вопросы?
    function hasInvalidInput(elements) {
        return elements.some((element) => !element.validity.valid);
    }

    let inputTel2 = document.getElementById('phone2');
    let btnSubmit2 = document.getElementById('formSumbit2');

    const inputs2 = document.querySelectorAll('.questions__input');

    const setIsDisabled2 = () => {

        if (!(inputTel2.value.includes('_')) && inputTel2.value && !hasInvalidInput(Array.from(inputs2))) {
            btnSubmit2.disabled = false;
            btnSubmit2.style.opacity = "1";
        } else {
            btnSubmit2.disabled = true;
            btnSubmit2.style.opacity = "0.4";
        }
    }

    inputs2.forEach(input => input.addEventListener('input', () => setTimeout(() => setIsDisabled2(), 5)))


    // отправка формы Есть вопросы?
    const form2 = document.querySelector('#form2')
    form2.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('question.php', {
            method: 'POST',
            body: new FormData(form2)
        }).then((res) => res.json()).then(result => {
            if (result.error === false) {
                return alert('Спасибо! Ваша заявка принята. Мы свяжемся с Вами в ближайшее время!')
            }
            alert('Ошибка! Попробуйте еще раз!')
        }).catch((err) => alert('Ошибка! Попробуйте еще раз!')).finally(() => { form2.reset(), setIsDisabled2() })
    })



    // Валидация формы Получить бесплатную подборку тендеров
    function hasInvalidInput(elements) {
        return elements.some((element) => !element.validity.valid);
    }

    let inputTel3 = document.getElementById('phone3');
    let btnSubmit3 = document.getElementById('formSumbit3');

    const inputs3 = document.querySelectorAll('.free__tender__input');

    const setIsDisabled3 = () => {

        if (!(inputTel3.value.includes('_')) && inputTel3.value && !hasInvalidInput(Array.from(inputs3))) {
            btnSubmit3.disabled = false;
            btnSubmit3.style.opacity = "1";
        } else {
            btnSubmit3.disabled = true;
            btnSubmit3.style.opacity = "0.4";
        }
    }

    inputs3.forEach(input => input.addEventListener('input', () => setTimeout(() => setIsDisabled3(), 5)))


    // отправка формы Получить бесплатную подборку тендеров
    const form3 = document.querySelector('#form3')
    form3.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('freeTender.php', {
            method: 'POST',
            body: new FormData(form3)
        }).then((res) => res.json()).then(result => {
            if (result.error === false) {
                return alert('Спасибо! Ваша заявка принята. Мы свяжемся с Вами в ближайшее время!')
            }
            alert('Ошибка! Попробуйте еще раз!')
        }).catch((err) => alert('Ошибка! Попробуйте еще раз!')).finally(() => { form3.reset(), setIsDisabled2() })
    })


    // Валидация формы Оформить заявку
    function hasInvalidInput(elements) {
        return elements.some((element) => !element.validity.valid);
    }

    let inputTel4 = document.getElementById('phone4');
    let btnSubmit4 = document.getElementById('formSumbit4');

    const inputs4 = document.querySelectorAll('.make__request');

    const setIsDisabled4 = () => {

        if (!(inputTel4.value.includes('_')) && inputTel4.value && !hasInvalidInput(Array.from(inputs4))) {
            btnSubmit4.disabled = false;
            btnSubmit4.style.opacity = "1";
        } else {
            btnSubmit4.disabled = true;
            btnSubmit4.style.opacity = "0.4";
        }
    }

    inputs4.forEach(input => input.addEventListener('input', () => setTimeout(() => setIsDisabled4(), 5)))


    // отправка формы Оформить заявку
    const form4 = document.querySelector('#form4')
    form4.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('freeTender.php', {
            method: 'POST',
            body: new FormData(form4)
        }).then((res) => res.json()).then(result => {
            if (result.error === false) {
                return alert('Спасибо! Ваша заявка принята. Мы свяжемся с Вами в ближайшее время!')
            }
            alert('Ошибка! Попробуйте еще раз!')
        }).catch((err) => alert('Ошибка! Попробуйте еще раз!')).finally(() => { form4.reset(), setIsDisabled2() })
    })

});


