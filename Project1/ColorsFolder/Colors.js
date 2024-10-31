const colors = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple", "Pink", "Brown"];
const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('mouseover', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor.toLowerCase();
    colorBox.innerText = `This color is ${randomColor}`;
});

function goBack() {
    window.location.href = '../Main.html';
}