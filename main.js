let messages = [
    "Hi Soonbee",
    "Happy 21st Birthday",
    "I made this website for you so that you could see my letter whenever",
    "Also because I thought it'd be cool to make you a website lol"
];

let currentMessageIndex = 0;
let messageDiv = document.getElementById('message');
messageDiv.textContent = messages[currentMessageIndex]; // Initialize with the first message
messageDiv.style.opacity = 1; // Make sure the first message is visible

function changeMessage() {
    if (currentMessageIndex < messages.length - 1) {
        messageDiv.style.opacity = 0; // Fade out

        setTimeout(() => {
            currentMessageIndex++;
            messageDiv.textContent = messages[currentMessageIndex];
            messageDiv.style.opacity = 1; // Fade in
        }, 750); // Adjust time as needed for fade effect
    } else {
        document.getElementById('splash').style.display = 'none'; // Hide splash after the last message
        // Additional actions after the last message can be added here
        fadeInContent();
    }
}

document.getElementById('splash').addEventListener('click', changeMessage);


function fadeInContent() {
    setTimeout(() => {
        document.getElementById('content').style.opacity = 1;
        document.getElementById('header').style.opacity = 1;
    }, 1000); // Adjust timing as needed for the fade-in effect
}