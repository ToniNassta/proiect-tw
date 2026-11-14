import ProdusCard from "./ProdusCard";

function ProdusList({ produse, onToggle, onDelete }) {
  //   produse = [];
  if (produse.length === 0)
    return (
      <p className="empty" data-testid="empty">
        Nu exista niciun produs
      </p>
    );
  return (
    <ul className="lista-produse">
      {produse.map((produs) => (
        <ProdusCard
          produs={produs}
          key={produs.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ProdusList;
