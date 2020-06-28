;
(function () {

    const policyLink = document.querySelector('.policy');
    const policyBlock = document.querySelector('.policy-block');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('.close-icon');
    const policyClose = document.querySelector('.policy-close');
    const body = document.getElementsByTagName('body')[0];

    policyLink.addEventListener('click', policyShow);
    closeIcon.addEventListener('click', policyHide);
    policyClose.addEventListener('click', policyHide);
    document.addEventListener('keydown', escPolicyHide);
    document.addEventListener('click', clickPolicyHide);


    function policyShow() {
        policyBlock.classList.add('policy-block--active');
        overlay.classList.add('overlay--active');
        body.classList.add('no-scroll');
    }

    function policyHide() {
        policyBlock.classList.remove('policy-block--active');
        overlay.classList.remove('overlay--active');
        body.classList.remove('no-scroll');
    }

    function escPolicyHide(e) {
        if (e.keyCode === 27) {
            policyHide();
        }
    }

    function clickPolicyHide(e) {
        if (e.target === overlay) {
            policyHide();
        }
    }

})();