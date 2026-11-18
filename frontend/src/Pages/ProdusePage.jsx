import { useEffect, useState } from "react";
import ProdusList from "../components/ProdusList.jsx";
import ProduseForm from "../components/ProduseForm.jsx";
import {
  deleteProdus,
  fetchProduse,
  createProdus,
  updateProdus,
} from "../api.js";
import styles from "./ProdusePage.module.css";

// Bara de navigare, antetul si subsolul sunt in Layout.
// Pagina randeaza doar continutul ei, in <main>, prin <Outlet />.
export default function ProdusePage() {
  const [produse, setProduse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchProduse();
        if (!ignore) setProduse(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  const inStoc = produse.filter((produs) => produs.statusInStoc).length;

  // Trimite produsul la API și îl adaugă în listă cu id-ul primit de la server.
  // Dacă API-ul aruncă eroare, formularul o prinde și o afișează.
  async function handleAdd(produsNou) {
    const salvat = await createProdus(produsNou);
    setProduse((produse) => [...produse, salvat]);
  }

  async function handleToggle(id) {
    const produs = produse.find((p) => p.id === id);
    try {
      const actualizat = await updateProdus(id, {
        statusInStoc: !produs.statusInStoc,
      });
      setProduse((produse) =>
        produse.map((p) => (p.id === id ? actualizat : p)),
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProdus(id);
      setProduse((produse) => produse.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  // muta focusul in campul formularului (pentru butonul "+ Adauga produs nou")
  function focusFormular() {
    document.getElementById("form-nume-produs")?.focus();
  }

  return (
    <>
      {/* Rand 1 — carduri statice (placeholder) */}
      <section className={styles["panou-grid"]}>
        <div className={styles["card-negru"]}>
          <h2>Situatia stocului</h2>
          <div className={styles["cifre-mari"]}>
            <div>
              <span className={styles.cifra}>4</span>
              <span className={styles["cifra-eticheta"]}>produse in lista</span>
            </div>
            <div>
              <span className={`${styles.cifra} ${styles["cifra-accent"]}`}>
                1
              </span>
              <span className={styles["cifra-eticheta"]}>fara stoc</span>
            </div>
          </div>
          <div className={styles["mini-carduri"]}>
            <div className={styles["mini-card"]}>
              <strong>3</strong>
              <span>In stoc</span>
            </div>
            <div className={styles["mini-card"]}>
              <strong>1</strong>
              <span>Indisponibil</span>
            </div>
          </div>
        </div>

        <div className={styles["card-alb"]}>
          <h2>Cerere</h2>
          <div className={styles["cerere-continut"]}>
            <svg
              className={styles.inel}
              viewBox="0 0 80 80"
              width="96"
              height="96"
              role="img"
              aria-label="Cerere: mare 1, medie 2, mica 1"
            >
              <circle
                className={styles["inel-fundal"]}
                cx="40"
                cy="40"
                r="30"
              />
              <circle
                className={styles["inel-mare"]}
                cx="40"
                cy="40"
                r="30"
                strokeDasharray="47 141"
              />
              <circle
                className={styles["inel-medie"]}
                cx="40"
                cy="40"
                r="30"
                strokeDasharray="94 94"
                strokeDashoffset="-47"
              />
              <circle
                className={styles["inel-mica"]}
                cx="40"
                cy="40"
                r="30"
                strokeDasharray="47 141"
                strokeDashoffset="-141"
              />
              <text
                x="40"
                y="45"
                textAnchor="middle"
                className={styles["inel-text"]}
              >
                4
              </text>
            </svg>
            <ul className={styles.legenda}>
              <li>
                <span className="punct punct-mare"></span>Mare · 1
              </li>
              <li>
                <span className="punct punct-medie"></span>Medie · 2
              </li>
              <li>
                <span className="punct punct-mica"></span>Mica · 1
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rand 2 — carduri statice (placeholder) */}
      <section
        className={`${styles["panou-grid"]} ${styles["panou-grid-invers"]}`}
      >
        <div className={styles["card-alb"]}>
          <h2>De reaprovizionat</h2>
          <ul className={styles["lista-reaprovizionare"]}>
            <li>
              <input type="checkbox" checked readOnly aria-label="Bifat" />
              <span className={styles.taiat}>Masina de spalat vase</span>
            </li>
          </ul>
          <p className={styles.nota}>
            Bifeaza un produs ca sa-l marchezi fara stoc.
          </p>
        </div>

        <button
          className={styles["card-adauga"]}
          type="button"
          onClick={focusFormular}
        >
          + Adauga produs nou
        </button>
      </section>

      {/* Rand 3 — cele doua panouri, in grila din modulul paginii */}
      <div className={styles.grid}>
        <section className={`panel ${styles["form-panel"]}`}>
          <h2>Adaugă produs</h2>
          <ProduseForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Produsele mele</h2>
          <p className={styles.summary}>
            {produse.length} produse, dintre care {inStoc} in stoc
          </p>
          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}
          {!loading && (
            <ProdusList
              produse={produse}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </div>
    </>
  );
}
