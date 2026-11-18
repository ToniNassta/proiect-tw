import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    // clasele globale (panel, info, btn) raman scrise ca text
    <section className={`panel ${styles.notFound}`} data-testid="not-found">
      <h2>Pagina nu există</h2>
      <p className="info">Adresa cerută nu duce nicăieri.</p>
      <Link to="/" className="btn">
        Înapoi la produse
      </Link>
    </section>
  );
}
