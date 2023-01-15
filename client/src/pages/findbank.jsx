import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"



const Map = withScriptjs(withGoogleMap((props) => {
  let searchInput;
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: -34.397, lng: 150.644 });
  const [zoom, setZoom] = useState(8);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(searchInput);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      setLocation(place.formatted_address)
      setCoordinates({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      setZoom(15);
    });
  }, []);

  function handleSearch () {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBv8EfHHF7V5F8ar4IUuda0xqty6KMJLD0`)
      .then(res => res.json())
      .then(data => {
        if (data.results.length) {
          setCoordinates({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng
          });
        }
      });
  }

  return (
    <div>
      <input
        className="beautiful-input"
        type="text"
        placeholder="Enter a location"
        ref={(input) => searchInput = input}
        onChange={(event) => setLocation(event.target.value)}
        value={location}
      />
      <button className="beautiful-search-button" onClick={handleSearch}>Search</button>
      <GoogleMap zoom={zoom} center={coordinates}>
        <Marker position={coordinates} />
      </GoogleMap>
    </div>
  );
}))

function GoogleMaps () {
  return (
    <div>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBv8EfHHF7V5F8ar4IUuda0xqty6KMJLD0&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
export default GoogleMaps;