const animals = {
    cat: {
        name: "Cat",
        image: "../Main_Images/Cat.png",
        description: "Cats are small, furry animals known for their agility and playful behavior.",
        sound: "../Assets/Animal_Sounds/Cat.wav"
    },
    dog: {
        name: "Dog",
        image: "../Main_Images/Dog.png",
        description: "Dogs are loyal and friendly animals, often considered man's best friend.",
        sound: "../Assets/Animal_Sounds/Dog.mp3"
    },
    fish: {
        name: "Fish",
        image: "../Main_Images/Fish.png",
        description: "Fish live in water and come in various shapes and sizes.",
        sound: "../Assets/Animal_Sounds/Fish.mp3"
    },
    bird: {
        name: "Bird",
        image: "../Main_Images/Bird.png",
        description: "Birds have wings and feathers, and many can fly.",
        sound: "../Assets/Animal_Sounds/Bird.mp3"
    },
    horse: {
        name: "Horse",
        image: "../Main_Images/Horse.png",
        description: "Horses are strong animals often used for riding and farm work.",
        sound: "../Assets/Animal_Sounds/Horse.mp3"
    },
    cow: {
        name: "Cow",
        image: "../Main_Images/Cow.png",
        description: "Cows are large herbivores that produce milk.",
        sound: "../Assets/Animal_Sounds/Cow.mp3"
    },
    pig: {
        name: "Pig",
        image: "../Main_Images/Pig.png",
        description: "Pigs are intelligent animals known for their snouts.",
        sound: "../Assets/Animal_Sounds/Pig.mp3"
    },
    chicken: {
        name: "Chicken",
        image: "../Main_Images/Chicken.png",
        description: "Chickens are birds that are often kept for their eggs.",
        sound: "../Assets/Animal_Sounds/Chicken.mp3"
    },
    monkey: {
        name: "Monkey",
        image: "../Main_Images/Monkey.png",
        description: "Monkeys are playful and intelligent primates.",
        sound: "../Assets/Animal_Sounds/Monkey.mp3"
    }
};

function openModal(animalKey) {
    const modal = document.getElementById('animalModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const soundButton = document.getElementById('soundButton');

    const animal = animals[animalKey];
    modalTitle.innerText = animal.name;
    modalImage.src = animal.image;
    modalDescription.innerText = animal.description;
    soundButton.onclick = () => playSound(animal.sound);

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('animalModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('animalModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function playSound(soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play();
}

function goBack() {
    window.location.href = '../Main.html';
}