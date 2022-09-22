import "../styles/globals.css";
import Mapa from "../components/mapas/Mapa";
import Coordenadas from "../components/views/Coordenadas";
import CoordsProvider from "../context/CoordsProvider";
import styles from '../styles/Home.module.css'
// import  {useRouter}  from "next/router";
// import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  // const [username, setUsername] = useState('');
  // const router = useRouter();



  return (
    <>
      <Component {...pageProps} />

      <div className={styles.container}>
        <CoordsProvider>
          <Coordenadas />
          <Mapa />
        </CoordsProvider>
      </div>
    </>
  );
}

export default MyApp;
