const produseArr = [
  {
    id: 1,
    numeProdus: "Aspirator Robot test1",
    statusInStoc: true,
    statusCerere: "cerere mare",
  },
  {
    id: 2,
    numeProdus: "Masina de spalat vase",
    statusInStoc: false,
    statusCerere: "cerere medie",
  },
  {
    id: 3,
    numeProdus: "Mixer de bucatarie electric",
    statusInStoc: true,
    statusCerere: "cerere mica",
  },
  {
    id: 4,
    numeProdus: "Aspirator Robot test2",
    statusInStoc: true,
    statusCerere: "cerere medie",
  },
];

export default function App() {
  const inStoc = produseArr.filter((produs) => produs.statusInStoc).length;
  return (
    <>
      <header className="app-header">
        <h1>Electronics Store</h1>
        <p>Magazinul numarul 1 de produse electronice.</p>
        <p className="app-count">
          {produseArr.length} produse, dintre care {inStoc} in stoc
        </p>
      </header>
      <main className="container">
        {/* <section className="panel">
          <h2>Adauga un produs in lista</h2>
          <form className="item-form">
            <label>Nume produs</label>
            <input type="text" name="nume produs" placeholder="aspirator" />
            <label>
              Disponibilitate Stoc (in stoc sau indisponibil in stoc)
            </label>
            <input
              type="text"
              name="stoc-disp"
              placeholder="in stoc / indisponibil in stoc"
            />
            <label>Eticheta Cerere</label>
            <select name="eticheta">
              <option value="cerere-mare">cerere mare</option>
              <option value="cerere-medie">cerere medie</option>
              <option value="cerere-mica">cerere mica</option>
            </select>
            <button className="submit-btn" type="submit">
              Adauga
            </button>
          </form>
        </section> */}

        <section className="panel">
          <h2>Lista de produse</h2>
          {/* Când lista e goală: <p className="empty">Nu există niciun element.</p> -->*/}
          <pre>{JSON.stringify(produseArr, null, 2)}</pre>
          {/* <ul className="item-list">
            <li className="item-card">
              <div>
                <h3>Aspirator Robot</h3>
                <span className="badge badge-cerere-mare">cerere mare</span>
              </div>
              <span className="status">in stoc</span>
            </li>
            <li className="item-card">
              <div>
                <h3 className="done">Masina de spalat vase</h3>
                <span className="badge badge-cerere-medie">cerere medie</span>
              </div>
              <span className="status">indisponibil in stoc</span>
            </li>
            <li className="item-card">
              <div>
                <h3>Mixer de bucatarie electric</h3>
                <span className="badge badge-cerere-mica">crere mica</span>
              </div>
              <span className="status">in stoc</span>
            </li>
          </ul> */}
        </section>
      </main>
    </>
  );
}
