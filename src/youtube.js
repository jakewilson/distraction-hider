(function() {
    let rightSideBar = document.getElementById('guide-content');
    if (rightSideBar) {
        rightSideBar.remove();
    }

    let primary = document.getElementById('primary');
    if (primary) {
        primary.innerHTML = "";
    }

    let ytd_browse = document.getElementsByTagName('ytd-browse');
    if (ytd_browse) {
        ytd_browse.innerHTML = "";
    }
})();