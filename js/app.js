// Fade out and then remove notifications on click

var closeButton = document.querySelectorAll('.close');

for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', function() {
        this.parentNode.style.opacity = '0';
        var temp = this;
        setTimeout(function() {
            temp.parentNode.style.display = 'none';
        }, 500);
    });
}