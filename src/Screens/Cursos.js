import React from 'react';
import styles from "./Cursos.module.css";

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      title: "Curso Online: Uso de Inteligencia Artificial para Docentes",
      description: "Aprende a utilizar la inteligencia artificial en el ámbito educativo.",
      duration: "40h",
      image: require("../assets/imagen5.png"),
    },
    {
      id: 2,
      title: "Curso de Programación",
      description: "Domina los fundamentos de la programación.",
      duration: "50h",
      image: require("../assets/imagen6.png"),
    },
    {
      id: 3,
      title: "Curso de Diseño Gráfico",
      description: "Mejora tus habilidades de diseño con este curso.",
      duration: "30h",
      image: require("../assets/imagen7.png"),
    },
    {
      id: 4,
      title: "Curso de Marketing Digital",
      description: "Aprende estrategias de marketing digital efectivas.",
      duration: "45h",
      image: require("../assets/imagen8.png"),
    },
    {
      id: 5,
      title: "Curso de Programación en Python",
      description: "Domina Python desde lo básico hasta lo avanzado.",
      duration: "60h",
      image: require("../assets/imagen9.png"),
    },
    
    {
      id: 6,
      title: "Curso de Desarrollo Web",
      description: "Aprende a crear sitios web dinámicos y responsivos.",
      duration: "50h",
      image: require("../assets/imagen10.png"),
    },
    
    {
      id: 7,
      title: "Curso de Data Science",
      description: "Conviértete en un experto en análisis de datos.",
      duration: "70h",
      image: require("../assets/imagen11.png"),
    },
    
    {
      id: 8,
      title: "Curso de Machine Learning",
      description: "Descubre los fundamentos del aprendizaje automático.",
      duration: "80h",
      image: require("../assets/imagen12.png"),
    },
  ]

  return (
    <div className={styles.cursos}>
      <p className={styles.cursosParrafo}>Join our vibrant community of learners and professionals. Share your journey, collaborate on projects, and grow together.</p>
      <div className={styles.cursosContainer}>
        {cursos.map((curso) => (
          <div key={curso.id} className={styles.cursoCard}>
            <img className={styles.cursoImagen} src={curso.image} alt={curso.title} />
            <div className={styles.cursoContent}>
              <h3>{curso.title}</h3>
              <p className= {styles.cursoDescription}>{curso.description}</p>
              <div className={styles.cursoDetails}>
                <span>👤 1</span>
                <span>⏳ {curso.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
