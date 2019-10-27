(function() {
    let elems = document.getElementsByTagName('aside');
    for (let i = 0; i < elems.length; i++) {
        let elem = elems[i];
        if (elem.getAttribute('aria-label') === 'Explore') {
            elem.innerHTML = "";
        }
    }
})();