document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll ("img"); 

for (const image of images) {
    fetch("https://api.api-ninjas.com/v1/randomimage?category=city")
    .then(response => response.json())
    .then(data => {
        image.src = data.message
        images.width = 100;
        image.height.width = 100;
    })

}

})

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = '${hours} : ${minutes}';

    document.getElementById('clock').textContent = timeString;
}

// Update the clock every minute
setInterval(updateClock, 60000);

// Call the function initially to set the clock immediately
updateClock(); 