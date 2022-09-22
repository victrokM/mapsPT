import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React, { useContext, useState } from "react";
import { CoordsContext } from "../../context/CoordsProvider";
import styles from "../../styles/Home.module.css";

const containerStyle = {
    width: "100%",
    height: "100vh",
  };


function Mapa() {
  const { coords } = useContext(CoordsContext);

  const center = {
      lat: parseFloat(coords.latitud),
      lng: parseFloat(coords.longitud),  
  };
  // console.log(parseInt(coords.latitud));

  const [map, setMap] = useState(null);
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC-iy9TOFFiZZmnGlDpLg4l96c2-abh-r8",
  });





  // const onLoad = map => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // };

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      {/* <Component {...pageProps} /> */}

      <div className="container_google">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          // onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
          // markers={markers}
        >
          <Marker position={center} />


          <></>
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Mapa;
