import { useState } from "react";
import { CERERE, CERERE_IMPLICITA, DENUMIRE_MAX } from "../constants.js";
import styles from "./ProduseForm.module.css";

// Formular controlat: state-ul React este sursa de adevăr pentru câmpuri
export default function ProduseForm({ onAdd }) {
  const [numeProdus, setNumeProdus] = useState("");
  const [cerere, setCerere] = useState(CERERE_IMPLICITA);
  const [inStoc, setInStoc] = useState(true);
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const n = numeProdus.trim();
    if (n === "") return "Denumirea produsului este obligatorie.";
    if (n.length > DENUMIRE_MAX)
      return `Denumirea produsului are maximum ${DENUMIRE_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // oprește reîncărcarea paginii
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }
    setEroare("");
    setTrimite(true);
    try {
      await onAdd({
        numeProdus: numeProdus.trim(),
        statusCerere: cerere, // aceeași cheie ca în datele existente
        statusInStoc: inStoc,
      });
      setNumeProdus("");
      setCerere(CERERE_IMPLICITA);
      setInStoc(true);
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label className={styles["form-camp"]}>
        Denumire produs
        <input
          id="form-nume-produs"
          type="text"
          value={numeProdus}
          onChange={(e) => setNumeProdus(e.target.value)}
          placeholder="Ex: Aspirator robot"
          maxLength={DENUMIRE_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label className={styles["form-camp"]}>
        Cerere
        <select
          value={cerere}
          onChange={(e) => setCerere(e.target.value)}
          data-testid="form-prioritate"
        >
          {CERERE.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className={styles["form-check"]}>
        <input
          type="checkbox"
          checked={inStoc}
          onChange={(e) => setInStoc(e.target.checked)}
          data-testid="form-stoc"
        />
        În stoc
      </label>

      {/* clasele globale (error, btn) raman scrise ca text */}
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button
        className="btn"
        type="submit"
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}
