const planets = document.querySelectorAll(".planet");
const infoElement = document.getElementById("info");

planets.forEach(planet => {
    planet.addEventListener("click", () => {
        infoElement.textContent = planet.dataset.info;
    });
    planet.addEventListener("mouseover", () => {
        planet.style.animationPlayState = "paused";
    });
    planet.addEventListener("mouseout", () => {
        planet.style.animationPlayState = "running";
    });
});
