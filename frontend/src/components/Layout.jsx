import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// NavLink trimite { isActive }; linkul paginii curente primeste si clasa .active
function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <div className={styles.shell}>
      {/* Bara de navigare — comuna tuturor paginilor */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <Logo size={28} />
          <span className={styles.logo}>Electronics</span>
        </div>

        <nav
          className={styles.nav}
          aria-label="Navigare principala"
          data-testid="nav"
        >
          <NavLink to="/" end className={navClass}>
            Produse
          </NavLink>
          <NavLink to="/despre" className={navClass}>
            Despre
          </NavLink>
        </nav>

        <p className={styles["nav-titlu"]}>Categorii</p>
        <nav
          className={`${styles.nav} ${styles.categorii}`}
          aria-label="Categorii"
        >
          <Link to="/" className={styles.link}>
            <span className="punct punct-accent" aria-hidden="true"></span>
            Electrocasnice
          </Link>
          <Link to="/" className={styles.link}>
            <span className="punct" aria-hidden="true"></span>
            Bucatarie
          </Link>
        </nav>

        <button
          className={styles["theme-toggle"]}
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
      </aside>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1>Electronics Store</h1>
          <p>Magazinul numarul 1 de produse electronice.</p>
        </header>

        <main className={styles.main}>
          <Outlet />
        </main>

        <footer className={styles.footer}>Proiect Tehnologii Web</footer>
      </div>
    </div>
  );
}

export default Layout;
