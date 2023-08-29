let lightmode = document.querySelectorAll('#light');
let darkmode = document.querySelectorAll('#dark');
let switchbtn = document.getElementById('checkbox');
let formContainer = document.querySelector('.form-container');

switchbtn.addEventListener('click', () => {
    if (switchbtn.checked) {
        lightmode.forEach((element) => {
            element.style.display = 'block';
        });
        darkmode.forEach((element) => {
            element.style.display = 'none';
        });
        formContainer.style.background = 'linear-gradient(to right,transparent , var(--blue-color) 20%)';
    } else {
        lightmode.forEach((element) => {
            element.style.display = 'none';
        });
        darkmode.forEach((element) => {
            element.style.display = 'block';
        });
        formContainer.style.background = 'linear-gradient(to right,transparent , var(--red-color) 20%)';
    }
});