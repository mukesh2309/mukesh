let navbar = document.querySelector('header nav');
let menu = document.querySelector('#menu-btn')
let themeBtn = document.querySelector('#theme-btn')

menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('fa-times')

}
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun')

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('header .scroll-indicator').style.width = percentage + '%';

};