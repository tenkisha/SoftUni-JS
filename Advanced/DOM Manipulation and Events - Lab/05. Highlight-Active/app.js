function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlur);
        });


    function onFocus(ev) {
        ev.target.parentElement.className = 'focused';

    }


    function onBlur(ev) {

        ev.target.parentElement.className = '';

    }
<<<<<<< HEAD
}
=======
}
>>>>>>> fd6a1f5249e2af3e0bcc2ada8e01df880141eec9
