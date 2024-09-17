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

