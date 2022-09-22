import React, { useContext, useEffect, useState } from "react";
import { CoordsContext } from "../../context/CoordsProvider";
import styles from "../../styles/Home.module.css";
// import axios from "axios";
import Pusher from "pusher-js";
// import { pusherClient } from "../../services/services-worker";

function Coordenadas() {


  // const [latitudRT, setLatitudRT] = useState('');
  // const [longitudRT, setLongitudRT] = useState('');
  const { setCoords } = useContext(CoordsContext);

  const initialState = {
    latitud: 4.528934,
    longitud: -76.098087,
  };
  const [latitud, setLatitud] = useState(initialState.latitud);
  const [longitud, setLongitud] = useState(initialState.longitud);
  const [bajar, setBajar] = useState(true);

  const handleMove = (e) => {
    setBajar(!bajar);
  };

  const captarCordenadas = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitud,
        longitud,
      }),
    });

    setCoords({
      latitud: latitud,
      longitud: longitud,
    });
  };



  useEffect(() => {

    Pusher.logToConsole = true;

    const pusher = new Pusher('26024643fc875d87c23d', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', function(data) {
      alert(JSON.stringify(data));
    });


  }, []);


  return (
    <>
      <div
        className={
          bajar ? styles.container_coords__active : styles.container_coords
        }
      >
        <div className="container_coords__title">
          <h2>Coordenadas</h2>
        </div>
        <form className={styles.container_coords__content}>
          <div className={styles.container_coords__content__lat}>
            <p>Latitud</p>
            <input
              type="number"
              className={styles.longitud}
              placeholder="Ingrese latitud"
              name="latitud"
              value={latitud}
              onChange={(e) => setLatitud(e.target.value)}
            />
          </div>
          <div className="container_coords__content__lng">
            <p>Longitud</p>
            <input
              type="number"
              className={styles.latitud}
              placeholder="Ingrese longitud"
              name="longitud"
              value={longitud}
              onChange={(e) => setLongitud(e.target.value)}
            />
          </div>
          <button
            className={styles.container_coords__content__btn}
            type="submit"
            onClick={captarCordenadas}
          >
            Centrar
          </button>
        </form>
      </div>
      <button
        className={bajar ? styles.bajar : styles.bajar_active}
        onClick={handleMove}
      >
        {bajar ? "Editar" : "Cerrar"}
      </button>
    </>
  );
}

export default Coordenadas;
