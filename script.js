let gridsize = 16;
const container = document.querySelector("#container");

function generateDivs(gridsize) {
    const container = document.querySelector('#container');

    for (let i = 0; i < gridsize; i++) {
        for (let j = 0; j < gridsize; j++) {
            const pixel = document.createElement('btn');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover', function handleClick(event) {
                pixel.style.backgroundColor = "grey";
            });
            container.appendChild(pixel);
        }
    }
}

function resetBtn() {
    const pixels = document.querySelectorAll("btn");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    };
}

function setGridSize16() {
    let gridsize = 16;
    while (container.firstChild)
        container.removeChild(container.firstChild);
    generateDivs(gridsize);
}

function setGridSize32() {
    let gridsize = 32;
    while (container.firstChild)
        container.removeChild(container.firstChild);
    generateDivs(gridsize);
}

function setGridSize64() {
    let gridsize = 64;
    while (container.firstChild)
        container.removeChild(container.firstChild);
    generateDivs(gridsize);
}

generateDivs(gridsize);