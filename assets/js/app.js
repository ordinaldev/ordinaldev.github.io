// Auto Text Changer Functionality

const textTyper = document.querySelector('.textTyper');

const autoTextChanger = () => {

    setTimeout(() => {
        textTyper.innerHTML = "Web Developer";
    }, 0);

    setTimeout(() => {
        textTyper.innerHTML = "Freelancer";
    }, 5000);

    setTimeout(() => {
        textTyper.innerHTML = "Student";
    }, 10000);


}

autoTextChanger();
setInterval(autoTextChanger, 15000);

const theme_btn = document.querySelector('.theme_btn');
const themeBtnToggle = document.querySelector('.themeBtnToggle');
const themeIcon = document.querySelector('.themeIcon');
const logoImg = document.querySelector('.logoImg');

theme_btn.onclick = () => {

    themeBtnToggle.classList.toggle('active');

    if (themeBtnToggle.classList.contains('active')) {

        logoImg.src = '../img/logo_white.png';
        themeIcon.src = '../img/moon.png';
        document.body.classList.add('active');
        document.body.id.add('dark');
    } else {

        logoImg.src = '../img/logo_black.png';
        themeIcon.src = '../img/sun.png';
        document.body.classList.remove('active');
        document.body.id.add('light')
    }
}

const toggleMenu = document.querySelector('.toggleMenu');
const all_line = document.querySelectorAll('.line');

const nav_right = document.querySelector('.nav_right');

toggleMenu.onclick = () => {

    all_line.forEach(forAllLines => {

        forAllLines.classList.toggle('active');

        if (forAllLines.classList.contains('active')) {

            nav_right.classList.add('active');
        } else {

            nav_right.classList.remove('active');
        }
    })

}