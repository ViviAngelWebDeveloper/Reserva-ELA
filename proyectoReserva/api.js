const apiKey = "fa46e1efae93855bcc7e5ee6d45a161c"; 
const lat = -34.6144; 
const lon = -58.3617; 

const climaApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

fetch(climaApiUrl)
    .then(response => response.json())
    .then(data => {
        mostrarDatosClima(data);
    })
    .catch(error => {
        console.error("Error al obtener datos del clima:", error);
    });

function mostrarDatosClima(data) {
    const temperatura = (data.main.temp - 273.15).toFixed(0);
    const climaContainer = document.getElementById("clima-container");

    climaContainer.innerHTML = `
        
        <p class="estilo-temp">${temperatura}°C<p>
        
    `;
}