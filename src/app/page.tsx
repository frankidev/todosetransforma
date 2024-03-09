import styles from "./page.module.scss";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className={styles.main}>      
      <Card name="Novedades" paragraph="Este mes tenemos un nuevo curso, pront más información por todos nuestros canales" />
      <Card name="Quién soy" paragraph="¡Namaste! Soy Yam, una apasionada guía en el camino hacia el bienestar físico, mental y espiritual. Con una profunda dedicación a las prácticas ancestrales de yoga, reiki y masaje, junto con una sensibilidad como acompañante terapéutica, mi misión es ayudarte a encontrar la armonía interior y la paz que tanto buscas. Con años de experiencia y un enfoque holístico, te invito a embarcarte en un viaje hacia la sanación integral, donde te apoyaré en cada paso del camino hacia el equilibrio y la plenitud. ¡Bienvenido a este espacio de transformación y renovación!" />      
    </main>
  );
}
