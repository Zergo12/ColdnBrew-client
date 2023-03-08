// import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
// import { Loader } from "@googlemaps/js-api-loader"
// import {google} from "googleapis"


// const loader = new Loader({
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
// });


// loader.load().then(() => {
//  const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });


// class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         initialCenter={{ lat: 37.7749, lng: -122.4194 }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
// })(MapContainer);
