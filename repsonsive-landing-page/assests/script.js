var menu = document.getElementById('menu');
var lists = document.getElementById('lists');
var nav = document.getElementById('navbar')
var sections = document.querySelectorAll('.sections');
var lis = document.querySelectorAll('.lists li')
var scrollBtn = document.getElementById('scroll');

menu.onclick = () => {
    if (lists.classList.contains("on")) lists.classList.remove("on");
    else lists.classList.add("on");

    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    } else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
    }
}

const activeMenu = () => {
    let len = sections.length;
    while (len-- && window.scrollY + 100 < sections[len].offsetTop) { }

    lis.forEach((li) => li.classList.remove('active'))
    lis[len].classList.add('active');
}

window.onscroll = () => {
    if (window.scrollY >= 520) {
        nav.classList.add('fixed');
        scrollBtn.style.display = 'block';
    }
    else {
        nav.classList.remove('fixed')
        scrollBtn.style.display = 'none';
    }

    activeMenu();
}

scrollBtn.onclick = () => document.documentElement.scrollTop = 0;

