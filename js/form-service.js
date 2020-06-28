;
(function () {

    const form = document.getElementById('service-form');
    const input = form.querySelectorAll('.service-form-field');

    const modal = document.querySelector('.form-modal');
    const body = document.getElementsByTagName('body')[0];
    const modalClose = document.querySelector('.close');
    const modalOverlay = document.querySelector('.form-modal-overlay');

    const checkMark = document.querySelector('.check-mark');
    const check = document.querySelector('.check-icon .check-icon-path');
    const cross = document.querySelector('.cross');

    modalClose.addEventListener('click', hideHeaderModal);
    document.addEventListener('keydown', eschideHeaderModal);
    document.addEventListener('click', clickhideHeaderModal);

    function validate(name, email, message) {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const addressValue = document.getElementById(email).value;
        const nameValue = document.getElementById(name).value;
        const messageValue = document.getElementById(message).value;
        if (reg.test(addressValue) == false && nameValue == '' && messageValue == '') {
            console.log('Введите корректный e-mail');
            return false;
        } else {
            return true;
        }
    }

    const message = new Object();
    message.loading = 'Отправка...';
    message.success = '<p>Ваша заявка успешно отправлена.</p>' + '<p>Я отвечу вам в ближайшее время!</p>';
    message.failure = 'Что-то пошло не так...';
    const statusMessage = document.createElement('h4');
    const envelope = document.querySelector('.envelope');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validate('user-name', 'user-email', 'user-message')) {
            let request = new XMLHttpRequest();
            request.open('POST', '../php/form-services.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);
            request.send(formData);

            request.onreadystatechange = () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                    statusMessage.classList.add('form-modal__title');
                    modal.insertBefore(statusMessage, envelope);
                } else if (request.readyState === 4) {
                    if (request.status == 200) {
                        formClean();
                        showHeaderModal();
                        statusMessage.innerHTML = message.success;
                        check.style.display = 'block';
                        checkMark.classList.add('animated-success');
                    } else {
                        formClean();
                        showHeaderModal();
                        statusMessage.innerHTML = message.failure;
                        cross.style.display = 'block';
                        cross.classList.add('animated-failure');
                    }
                }
            };
        } else {
            console.log('No');
            return false;
        }
    });

    function formClean() {
        input.forEach(field => {
            field.value = '';
        });
        statusMessage.innerHTML = '';
    }

    function showHeaderModal() {
        modal.classList.add('form-modal--active');
        modalOverlay.style.display = 'block';
        body.classList.add('no-scroll');
    }

    function hideHeaderModal() {
        modalOverlay.style.display = 'none';
        modal.classList.remove('form-modal--active');
        body.classList.remove('no-scroll');
        check.style.display = 'none';
        cross.style.display = 'none';
    }

    function eschideHeaderModal(e) {
        if (e.keyCode === 27) {
            hideHeaderModal();
        }
    }

    function clickhideHeaderModal(e) {
        if (e.target === modalOverlay) {
            hideHeaderModal();
        }
    }

})();