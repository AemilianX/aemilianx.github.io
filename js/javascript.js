/*global document */
/*global window */

window.sUserName;

function returnToTop() {
    'use strict';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function MsgBoxPromote(userName) {
    'use strict';
    if (window.confirm(`\n    Promote ${userName} Room?\n`)) {
        window.alert(`\n${userName} Room is promoted`);
    } else {
        window.alert(`\n${userName} Room is not promoted`);
    }
}

function dmOnClick() {
    'use strict';

    document.body.classList.toggle("light-theme");

    let theme = "dark";
    if (document.body.classList.contains("light-theme")) {
        theme = "light";
    }
    localStorage.setItem("theme", theme);
}
