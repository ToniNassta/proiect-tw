// ADAPT: descrierea aplicației proprii și tehnologiile folosite.
import styles from "./DesprePage.module.css";

export default function DesprePage() {
  return (
    // clasa globala (panel) ramane scrisa ca text, cea din modul ca styles.nume
    <section className={`panel ${styles.despre}`}>
      <h2>Despre Electronics Store</h2>
      <p>
        Electronics Store este o aplicație de gestiune a produselor electronice,
        construită pas cu pas, pe parcursul semestrului, în cadrul proiectului
        de Tehnologii Web.
      </p>
      <p className={styles.stack}>
        Stack: React, Vite, React Router, Node.js, Express, MariaDB, Docker.
      </p>
    </section>
  );
}
