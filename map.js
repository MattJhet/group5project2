const locationButton = document.querySelector("location-btn");

function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 35.71, lng: -100.447},
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });

}

function calculateAndDisplayRoute(directionsService, directionsRenderer){
    const selectedMode = document.getElementById("mode").value;

    directionsService
    .route({
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,

        travelMode: gogole.maps.TravelMode[selectedMode],
    })
    .then((response) => {
        directionsRenderer.setDirections(response);
    })
    .cath((e) => window.alert("Direction request failed due to " + status))
}

const x = document.getElementById("map");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }