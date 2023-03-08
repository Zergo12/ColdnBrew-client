import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "85%",
  height: "400px",
  borderRadius:20,
};


function Map() {
  const [location, setLocation] = useState({});
  const [cafes, setCafes] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    // Obtener ubicación del usuario
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(userLocation);
        mapRef.current.panTo(userLocation);

        // Buscar cafeterías cercanas
        const service = new window.google.maps.places.PlacesService(mapRef.current);
        service.nearbySearch({
          location: userLocation,
          radius: 1000,
          type: "cafe",
        }, (results, status) => {
          if (status === "OK") {
            setCafes(results);
          } else {
            console.log("Error finding coffee shops");
          }
        });
      },
      () => {
        console.log("Error with geolocation");
      }
    );
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        version="3.45"
        libraries={["places"]}
  >
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
        ref={mapRef}
        >
        <Marker position={location} />
        {cafes.map((cafe) => (
          <Marker key={cafe.place_id} position={cafe.geometry.location} />
        ))}

      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
