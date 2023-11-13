const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('keyur');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 50);
        } else {
            counter.innerText = value;
        }

    }
    animate();
});

  
// Dropdowm Animation //

var dropdownBtn = document.querySelectorAll('.fa-plus');
lastOpened = null;

dropdownBtn.forEach(btn => btn.addEventListener('click', function () {
    var menuContent = this.nextElementSibling;
    if (!menuContent.classList.contains("show")) {
        menuContent.classList.add("show");
        menuContent.classList.remove("hide");
    } else {
        menuContent.classList.add("hide");
        menuContent.classList.remove("show");
    }

    if (lastOpened && lastOpened !== menuContent)
        lastOpened.classList.remove("show");
    lastOpened = menuContent;
}));