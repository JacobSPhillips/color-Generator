const button = document.querySelector('button');
button.addEventListener('click', function () {
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1
    const g = Math.floor(Math.random() * 255) + 1
    const b = Math.floor(Math.random() * 255) + 1
    return `rgb(${r}, ${g}, ${b})`

}