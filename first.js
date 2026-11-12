let hap = document.getElementById("happy");
let sad = document.getElementById("sad");
let exc = document.getElementById("excited");
let ang = document.getElementById("angry");


hap.addEventListener("click", function() {
    hap.innerHTML = "😊 Happy";
    hap.style.backgroundColor = "yellow";
});

sad.addEventListener("click", function() {
    sad.innerHTML = "😢 Sad";  
    sad.style.backgroundColor = "skyblue"; 
});

exc.addEventListener("click", function() {
    exc.innerHTML = "😃 Excited";   
    exc.style.backgroundColor = "Pink";
});

ang.addEventListener("click", function() {
    ang.innerHTML = "😡 Angry";   
    ang.style.backgroundColor = "lightcoral";
});



const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️ Light Mode";
    } else {
        themeToggle.innerHTML = "🌙 Dark Mode";
    }

});



const moodMessage = document.getElementById("moodMessage");
const messageTitle = document.getElementById("messageTitle");

const messages = {
    happy: {
        title: "Stay Happy! 😊",
        message: "Your happiness is your strength. Keep smiling and spread positivity wherever you go! ❤️"
    },

    sad: {
        title: "It's Okay to Feel Sad! 💙",
        message: "Every difficult day will pass. Be kind to yourself, take a deep breath and remember that better days are coming. 🌸"
    },

    excited: {
        title: "Keep That Energy! 🤩",
        message: "Your excitement can take you towards amazing opportunities. Believe in yourself and make every moment count! ✨"
    },

    angry: {
        title: "Stay Calm! ❤️",
        message: "Take a deep breath. You don't have to react to everything. Stay calm, think positively and choose your peace. 🌿"
    }
};

document.getElementById("happy").addEventListener("click", function() {
    showMessage("happy");
});

document.getElementById("sad").addEventListener("click", function() {
    showMessage("sad");
});

document.getElementById("excited").addEventListener("click", function() {
    showMessage("excited");
});

document.getElementById("angry").addEventListener("click", function() {
    showMessage("angry");
});

function showMessage(mood) {
    messageTitle.innerText = messages[mood].title;
    moodMessage.innerText = messages[mood].message;
}

