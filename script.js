function generateDivs() {
    const container = document.querySelector('#container');

    for (let i = 0; i < 16; i++) {
        for (let i = 0; i < 16; i++) {
            const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.textContent = "div" + i;
        container.appendChild(pixel);
        }        
    }
};

generateDivs();