// Find all rows that contain a table, and apply an extra class for better mobile viewing

var tables = document.querySelectorAll('.row table');

for (var i = 0; i < tables.length; i++) {
    tables[i].parentNode.classList.add('table-row');
}


// Fade out and then remove notifications on click

var closeButtons = document.querySelectorAll('.close');

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        document.body.classList.remove('disable-scroll');
        overlay.style.display = 'none';
        this.parentNode.style.opacity = '0';
        var temp = this;
        setTimeout(function() {
            temp.parentNode.style.display = 'none';
        }, 500);
    });
}


// Open modal window and overlay on click

var overlay = document.getElementById('overlay');
var modals = document.querySelectorAll('.modal');
var modalButtons = document.querySelectorAll('.modal + button');

for (var i = 0; i < modalButtons.length; i++) {
    (function(i) {
        modalButtons[i].addEventListener('click', function() {
        overlay.style.display = 'inline';
        modals[i].style.display = 'inline';
        modals[i].style.opacity = '1';
        document.body.classList.add('disable-scroll');
        });
    })(i);
}