

const btns = document.querySelectorAll('button');
const colorBtn = document.querySelector('.colorBtn');
const bgColorBtn = document.querySelector('.bgColorBtn');


btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('colorBtn')) {
            colorBtn.classList.add('active');
            bgColorBtn.classList.remove('active');
        } else {
            bgColorBtn.classList.add('active');
            colorBtn.classList.remove('active');
        }
    });
});


changeColor = () => {
    let red = document.querySelector('#redRange').value;
    let green = document.querySelector('#greenRange').value;
    let blue = document.querySelector('#blueRange').value;
    let color = `rgb(${red}, ${green}, ${blue})`;
    let text = document.querySelector('.text__box');
    text.style.color = color;
}

changeBg = () => {
    let red = document.querySelector('#redRange').value;
    let green = document.querySelector('#greenRange').value;
    let blue = document.querySelector('#blueRange').value;
    let color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
}



document.querySelector('#redRange').addEventListener('input', () => {
    if (colorBtn.classList.contains('active')) {
        changeColor()
    } else {
        changeBg()
    }
    
});
document.querySelector('#greenRange').addEventListener('input', () => {
    if (colorBtn.classList.contains('active')) {
        changeColor()
    } else {
        changeBg()
    }
    
});
document.querySelector('#blueRange').addEventListener('input', () => {
    if (colorBtn.classList.contains('active')) {
        changeColor()
    } else {
        changeBg()
    }
    
});
