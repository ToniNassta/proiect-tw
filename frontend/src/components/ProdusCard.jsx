import IconStoc from "./IconStoc";
const ETICHETE_CERERE = {
  mare: "mare",
  medie: "medie",
  mica: "mica",
};

function ProdusCard({ produs }) {
  return (
    <li className={!produs.statusInStoc ? "done" : ""}>
      <div className="card">
        <div>
          <h3>{produs.numeProdus}</h3>
          <span className={`badge badge-cerere-${produs.statusCerere}`}>
            cerere {ETICHETE_CERERE[produs.statusCerere]}
          </span>
        </div>
        <span
          className={`status-stoc ${produs.statusInStoc ? "in-stoc" : "fara-stoc"}`}
        >
          <IconStoc size={10} />{" "}
          {produs.statusInStoc ? "In stoc" : "Indisponibil in stoc"}
        </span>
      </div>
    </li>
  );
}

export default ProdusCard;
