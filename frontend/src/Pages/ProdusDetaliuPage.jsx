import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProdus } from "../api.js";
import { ETICHETE_CERERE } from "../constants.js";
import styles from "./ProdusDetaliuPage.module.css";

export default function ProdusDetaliuPage() {
  const { id } = useParams(); // text din URL, de exemplu "3"
  const [produs, setProdus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se reîncarcă dacă se schimbă id-ul din adresă
  useEffect(() => {
    let ignore = false;

    fetchProdus(id)
      .then((data) => {
        if (!ignore) {
          setProdus(data);
          setError(null); // o eroare de la un id anterior nu mai este valabilă
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  // clasele globale (panel, info, error, badge) raman scrise ca text
  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className={`panel ${styles.detail}`}>
        <p className="error" data-testid="error">
          Produsul nu a putut fi încărcat: {error}
        </p>
        <Link to="/" className={styles.inapoi}>
          ← Înapoi la listă
        </Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.inapoi}>
        ← Înapoi la listă
      </Link>

      <h2
        className={!produs.statusInStoc ? styles.done : undefined}
        data-testid="detail-title"
      >
        {produs.numeProdus}
      </h2>

      <dl className={styles.detalii}>
        <dt>Cerere</dt>
        <dd>
          <span className={`badge badge-${produs.statusCerere}`}>
            {ETICHETE_CERERE[produs.statusCerere]}
          </span>
        </dd>

        <dt>Stoc</dt>
        <dd
          className={
            produs.statusInStoc ? styles["in-stoc"] : styles["fara-stoc"]
          }
        >
          {produs.statusInStoc ? "In stoc" : "Indisponibil in stoc"}
        </dd>

        <dt>ID</dt>
        <dd>{produs.id}</dd>
      </dl>
    </section>
  );
}
