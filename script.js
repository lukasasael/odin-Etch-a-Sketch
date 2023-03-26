function generateDivs() {
    const container = document.querySelector('#container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.textContent = j;
            container.appendChild(pixel);
        }
    }
};

generateDivs();