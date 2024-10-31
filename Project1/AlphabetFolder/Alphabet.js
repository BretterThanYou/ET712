function playLetter(letter) {
    const audio = new Audio(`../Assets/Alphabet_Sounds/${letter}.wav`);
    audio.play();
}

function goBack() {
    window.location.href = '../Main.html';
}