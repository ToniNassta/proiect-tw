import ProdusList from "./components/ProdusList";
import Logo from "./components/Logo";
import { useEffect, useState } from "react";
import { fetchProduse } from "./api";

// const produseArr = [
//   {
//     id: 1,
//     numeProdus: "Aspirator Robot test1",
//     statusInStoc: true,
//     statusCerere: "mare",
//   },
//   {
//     id: 2,
//     numeProdus: "Masina de spalat vase",
//     statusInStoc: false,
//     statusCerere: "medie",
//   },
//   {
//     id: 3,
//     numeProdus: "Mixer de bucatarie electric",
//     statusInStoc: true,
//     statusCerere: "mica",
//   },
//   {
//     id: 4,
//     numeProdus: "Aspirator Robot test2",
//     statusInStoc: true,
//     statusCerere: "medie",
//   },
// ];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [produse, setProduse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

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

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inStoc = produse.filter((produs) => produs.statusInStoc).length;

  function handleToggle(id) {
    setProduse((produse) =>
      produse.map((produs) =>
        produs.id === id
          ? { ...produs, statusInStoc: !produs.statusInStoc }
          : produs,
      ),
    );
  }

  function handleDelete(id) {
    setProduse((produse) => produse.filter((produs) => produs.id !== id));
  }

  return (
    <div className="app-shell">
      {/* Sidebar — linkurile sunt statice (placeholder) */}
      <aside className="sidebar">
        <div className="app-brand">
          <Logo size={28} />
          <span className="brand-nume">Electronics</span>
        </div>

        <nav className="nav" aria-label="Navigare principala">
          <a href="#" className="nav-link activ">
            Panou
          </a>
          <a href="#" className="nav-link">
            Produse
          </a>
          <a href="#" className="nav-link">
            Reaprovizionare
          </a>
          <a href="#" className="nav-link">
            Statistici
          </a>
        </nav>

        <p className="nav-titlu">Categorii</p>
        <nav className="nav" aria-label="Categorii">
          <a href="#" className="nav-link">
            <span className="punct punct-accent" aria-hidden="true"></span>
            Electrocasnice
          </a>
          <a href="#" className="nav-link">
            <span className="punct" aria-hidden="true"></span>
            Bucatarie
          </a>
        </nav>

        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
      </aside>

      <main className="main">
        <header className="app-header">
          <div>
            <h1>Electronics Store</h1>
            <p>Magazinul numarul 1 de produse electronice.</p>
          </div>
          <div className="header-actiuni">
            <p className="app-count">
              {produse.length} produse, dintre care {inStoc} in stoc
            </p>
            {/* placeholder — fara logica */}
            <button className="btn-negru" type="button">
              + Adauga produs
            </button>
          </div>
        </header>

        {/* Rand 1 — carduri statice (placeholder) */}
        <section className="panou-grid">
          <div className="card-negru">
            <h2>Situatia stocului</h2>
            <div className="cifre-mari">
              <div>
                <span className="cifra">4</span>
                <span className="cifra-eticheta">produse in lista</span>
              </div>
              <div>
                <span className="cifra cifra-accent">1</span>
                <span className="cifra-eticheta">fara stoc</span>
              </div>
            </div>
            <div className="mini-carduri">
              <div className="mini-card">
                <strong>3</strong>
                <span>In stoc</span>
              </div>
              <div className="mini-card">
                <strong>1</strong>
                <span>Indisponibil</span>
              </div>
            </div>
          </div>

          <div className="card-alb">
            <h2>Cerere</h2>
            <div className="cerere-continut">
              <svg
                className="inel"
                viewBox="0 0 80 80"
                width="96"
                height="96"
                role="img"
                aria-label="Cerere: mare 1, medie 2, mica 1"
              >
                <circle className="inel-fundal" cx="40" cy="40" r="30" />
                <circle
                  className="inel-mare"
                  cx="40"
                  cy="40"
                  r="30"
                  strokeDasharray="47 141"
                />
                <circle
                  className="inel-medie"
                  cx="40"
                  cy="40"
                  r="30"
                  strokeDasharray="94 94"
                  strokeDashoffset="-47"
                />
                <circle
                  className="inel-mica"
                  cx="40"
                  cy="40"
                  r="30"
                  strokeDasharray="47 141"
                  strokeDashoffset="-141"
                />
                <text x="40" y="45" textAnchor="middle" className="inel-text">
                  4
                </text>
              </svg>
              <ul className="legenda">
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
        <section className="panou-grid panou-grid-invers">
          <div className="card-alb">
            <h2>De reaprovizionat</h2>
            <ul className="lista-reaprovizionare">
              <li>
                <input type="checkbox" checked readOnly aria-label="Bifat" />
                <span className="taiat">Masina de spalat vase</span>
              </li>
            </ul>
            <p className="nota">
              Bifeaza un produs ca sa-l marchezi fara stoc.
            </p>
          </div>

          <button className="card-adauga" type="button">
            + Adauga produs nou
          </button>
        </section>

        <section className="panel">
          <div className="panel-titlu">
            <h2>Lista de produse</h2>
            <span className="sortare">Sorteaza dupa cerere ▾</span>
          </div>
          {loading && <p className="info">Se incerca produsele...</p>}
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează
              <code> npm run api</code>?
            </p>
          )}
          {!error && !loading && (
            <ProdusList
              produse={produse}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
  // <>
  //   <header className="app-header">
  //     <div className="app-brand">
  //       <Logo size={40} />
  //       <h1>Electronics Store</h1>
  //     </div>
  //     <p>Magazinul numarul 1 de produse electronice.</p>
  //     <p className="app-count">
  //       {produse.length} produse, dintre care {inStoc} in stoc
  //     </p>
  //     <button
  //       className="theme-toggle"
  //       onClick={handleTema}
  //       aria-pressed={tema === "dark"}
  //     >
  //       {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
  //     </button>
  //   </header>
  //   <main className="container">
  //     <section className="panel">
  //       <h2>Lista de produse</h2>
  //       <ProdusList
  //         produse={produse}
  //         onToggle={handleToggle}
  //         onDelete={handleDelete}
  //       />
  //     </section>
  //   </main>
  // </>
}
