const loadGoogleMaps = () => {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDCgdVCDyuzjqS2rv8Hs3EZehY4QE-XL4g&callback=initMap";
  script.async = true;
  document.head.appendChild(script);
};

const initMap = () => {
  // Your marker data and logic for clustering
  const markers = [
    { lat: 37.7749, lng: -122.4194 },
    // Add more marker data as needed
  ];

  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // Set your initial map center
    zoom: 10, // Set the initial zoom level
  });

  // Create markers
  const googleMarkers = markers.map(marker => new google.maps.Marker({
    position: { lat: marker.lat, lng: marker.lng },
  }));

  // MarkerClusterer library for clustering
  const markerCluster = new MarkerClusterer(map, googleMarkers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
};

// Load Google Maps API and initialize the map
loadGoogleMaps();
