import { Link } from "react-router-dom";
import IconStoc from "./IconStoc";
import { ETICHETE_CERERE } from "../constants.js";
import styles from "./ProdusCard.module.css";

function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li
      className={!produs.statusInStoc ? styles.done : undefined}
      data-testid="detail-title"
      data-id={produs.id}
    >
      <div className={styles.card}>
        <div className={styles["card-sus"]}>
          {/* clasele globale (badge, badge-*) raman scrise ca text */}
          <span className={`badge badge-${produs.statusCerere}`}>
            {ETICHETE_CERERE[produs.statusCerere]}
          </span>
          <input
            type="checkbox"
            checked={!produs.statusInStoc}
            onChange={() => onToggle(produs.id)}
            aria-label={`Marcheaza ${produs.numeProdus} fara stoc`}
            data-testid="item-toggle"
          />
        </div>

        <h3>
          <Link
            to={`/produseArr/${produs.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {produs.numeProdus}
          </Link>
        </h3>

        <div className={styles["card-jos"]}>
          <span
            className={`${styles["status-stoc"]} ${
              produs.statusInStoc ? styles["in-stoc"] : styles["fara-stoc"]
            }`}
          >
            <IconStoc size={10} />
            {produs.statusInStoc ? "In stoc" : "Indisponibil in stoc"}
          </span>
          <button
            className="btn-danger"
            onClick={() => onDelete(produs.id)}
            aria-label={`Sterge ${produs.numeProdus}`}
            title="Sterge"
            data-testid="item-delete"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProdusCard;
