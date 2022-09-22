import React, { createContext, useState } from 'react'
export const CoordsContext = createContext();



function CoordsProvider({children}) {

    const longitude = -76.098087;
    const latitude = 4.528934;

    const [coords, setCoords] = useState({
        latitud: latitude,
        longitud: longitude
    });


  return (
    <CoordsContext.Provider value={{coords, setCoords}} >
        {children}
    </CoordsContext.Provider>
  )
}

export default CoordsProvider