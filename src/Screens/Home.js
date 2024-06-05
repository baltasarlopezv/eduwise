import React, { useState } from 'react'; // <-- Agregado useState
import styles from "./Home.module.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // <-- Agregado estado para la barra de búsqueda

  const handleSearchChange = (event) => { // <-- Agregado manejador de cambio
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.home}>
      <div className={styles.searchContainer}> {/* <-- Agregado contenedor de búsqueda */}
        <label className={styles.searchLabel} htmlFor="search">Qué estás buscando?</label> {/* <-- Agregado etiqueta de búsqueda */}
        <input 
          id="search"
          type="text" 
          placeholder="Buscar cursos..." 
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.titleContainer}>
        <p>
          Start Your Learning Journey <br />
          <b>Today</b>
        </p>
        <p>
          <b>Unlock your potential </b> with our <br />
          expert-led online courses.
        </p>
      </div>
    </div>
  )
}

export default Home;
