let lightmode = document.querySelectorAll('#light');
let darkmode = document.querySelectorAll('#dark');
let switchbtn = document.getElementById('checkbox');
let formContainer = document.querySelector('.form-container');
let imageheader = document.querySelector('.image-header');
const r = document.querySelector(':root');

switchbtn.addEventListener('click', () => {
    if (switchbtn.checked) {
        lightmode.forEach((element) => {
            element.style.display = 'block';
            element.style.animation += 'fade 0.5s ease-in-out';
            if (element.classList.contains('image-header')) {
                element.style.animation += ',sabrelaser 2s infinite ease-out';
            }
        });
        darkmode.forEach((element) => {
            element.style.display = 'none';
        });
        imageheader.style.animation += ',sabrelaser 2s infinite ease-out';
        formContainer.style.background = 'linear-gradient(to right,transparent , var(--blue-color) 20%)';
        r.style.setProperty('--color-sabrelaser', 'white');

    } else {
        lightmode.forEach((element) => {
            element.style.display = 'none';
        });
        darkmode.forEach((element) => {
            element.style.display = 'block';
            element.style.animation += ' fade 0.5s ease-in-out';
        });
        imageheader.style.animation += ',sabrelaser 2s infinite ease-out';
        formContainer.style.background = 'linear-gradient(to right,transparent , var(--red-color) 20%)';
        r.style.setProperty('--color-sabrelaser', 'rgb(200, 0, 0)');
    }
});