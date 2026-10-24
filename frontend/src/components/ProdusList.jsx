import ProdusCard from "./ProdusCard";

function ProdusList({ produse }) {
  //   produse = [];
  if (produse.length === 0)
    return <p className="empty">Nu exista niciun produs</p>;
  return (
    <ul className="lista-produse">
      {produse.map((produs) => (
        <ProdusCard produs={produs} key={produs.id} />
      ))}
    </ul>
  );
}

export default ProdusList;
