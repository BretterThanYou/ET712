let count = 0;

document.getElementById('countButton').addEventListener('click', () => {
    count++;
    if (count <= 100) {
        document.getElementById('countDisplay').innerText = `This number is ${count}`;
        playSound(count);
    } else {
        alertWithReset();
    }
});

function playSound(number) {
    let audio = new Audio(`../assets/Counting_Sounds/${number}.wav`);
    audio.play();
}

function alertWithReset() {
    const reset = confirm("You will learn about larger numbers later.\nClick OK to start over.");
    if (reset) {
        count = 0;
        document.getElementById('countDisplay').innerText = `This number is ${count}`;
    }
}

function goBack() {
    window.location.href = '../Main.html';
}
