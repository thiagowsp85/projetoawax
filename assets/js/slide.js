window.onload = function() {
    document.querySelector(".menu-opner").addEventListener("click", function() {
        if (document.querySelector("nav").style.display == 'flex') {
            document.querySelector("nav").style.display = 'none';
        } else {
            document.querySelector("nav").style.display = 'flex';
        }
    });
};