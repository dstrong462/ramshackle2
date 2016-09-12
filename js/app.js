// Fade out and then remove notifications on click

var closeButtons = document.querySelectorAll('.close');

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
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
        });
    })(i);
}