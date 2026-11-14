import IconStoc from "./IconStoc";

const ETICHETE_CERERE = {
  mare: "mare",
  medie: "medie",
  mica: "mica",
};

function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li
      className={!produs.statusInStoc ? "done" : ""}
      data-testid="item"
      data-id={produs.id}
    >
      <div className="card">
        <div className="card-sus">
          <span className={`badge badge-cerere-${produs.statusCerere}`}>
            cerere {ETICHETE_CERERE[produs.statusCerere]}
          </span>
          <input
            type="checkbox"
            checked={!produs.statusInStoc}
            onChange={() => onToggle(produs.id)}
            aria-label={`Marcheaza ${produs.numeProdus} fara stoc`}
            data-testid="item-toggle"
          />
        </div>

        <h3 data-testid="item-title">{produs.numeProdus}</h3>

        <div className="card-jos">
          <span
            className={`status-stoc ${produs.statusInStoc ? "in-stoc" : "fara-stoc"}`}
          >
            <IconStoc size={10} />
            {produs.statusInStoc ? "In stoc" : "Indisponibil in stoc"}
          </span>
          <button
            onClick={() => onDelete(produs.id)}
            className="btn-sterge"
            aria-label={`Stergere ${produs.numeProdus}`}
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
  // <li className={!produs.statusInStoc ? "done" : ""}>
  //   <label className="task-main">
  //     <div className="card">
  //       <div className="card-titlu">
  //         <input
  //           type="checkbox"
  //           checked={!produs.statusInStoc}
  //           onChange={() => onToggle(produs.id)}
  //         />
  //         <h3>{produs.numeProdus}</h3>
  //         <span className={`badge badge-cerere-${produs.statusCerere}`}>
  //           cerere {ETICHETE_CERERE[produs.statusCerere]}
  //         </span>
  //       </div>
  //       <span
  //         className={`status-stoc ${produs.statusInStoc ? "in-stoc" : "fara-stoc"}`}
  //       >
  //         <IconStoc size={10} />
  //         {produs.statusInStoc ? "In stoc" : "Indisponibil in stoc"}
  //       </span>
  //     </div>
  //   </label>
  //   <button
  //     onClick={() => onDelete(produs.id)}
  //     className="btn-danger"
  //     aria-label={`Stergere ${produs.numeProdus}`}
  //   >
  //     Sterge
  //   </button>
  // </li>
}

export default ProdusCard;
