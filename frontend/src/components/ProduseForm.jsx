// import { useState } from "react";
// // ADAPT: câmpurile și valorile fixe ale temei proprii.
// const CERERE = [
//   { value: "mare", label: "cerere mare" },
//   { value: "medie", label: "cerere medie" },
//   { value: "mica", label: "cerere mica" },
// ];
// const DENUMIRE_MAX = 100;
// // Formular controlat: state-ul React este sursa de adevăr pentru câmpuri
// export default function TaskForm({ onAdd }) {
//   const [numeProdus, setNumeProdus] = useState("");
//   const [cerere, setCerere] = useState("medie");
//   const [eroare, setEroare] = useState("");
//   const [trimite, setTrimite] = useState(false);
//   function valideaza() {
//     const n = numeProdus.trim();
//     if (n === "") return "Denumirea produsului este obligatorie.";
//     if (n.length > DENUMIRE_MAX)
//       return `Denumirea produsului are maximum ${DENUMIRE_MAX} de caractere.`;
//     return "";
//   }
//   async function handleSubmit(e) {
//     e.preventDefault(); // oprește reîncărcarea paginii
//     const mesaj = valideaza();
//     if (mesaj) {
//       setEroare(mesaj);
//       return;
//     }
//     setEroare("");
//     setTrimite(true);
//     try {
//       await onAdd({
//         numeProdus: numeProdus.trim(),
//         cerere,
//         statusInStoc: false,
//       });
//       setNumeProdus("");
//       setCerere("medie");
//     } catch (err) {
//       setEroare(err.message);
//     } finally {
//       setTrimite(false);
//     }
//   }
//   return (
//     <form
//       className="produs-form"
//       onSubmit={handleSubmit}
//       noValidate
//       datatestid="form"
//     >
//       <label>
//         Denumire produs
//         <input
//           type="text"
//           value={numeProdus}
//           onChange={(e) => setNumeProdus(e.target.value)}
//           placeholder="Ex: Tema la Baze de date"
//           maxLength={DENUMIRE_MAX}
//           aria-invalid={Boolean(eroare)}
//           data-testid="form-title"
//         />
//       </label>
//       <label>
//         Cerere
//         <select
//           value={cerere}
//           onChange={(e) => setCerere(e.target.value)}
//           data-testid="form-prioritate"
//         >
//           {CERERE.map((p) => (
//             <option key={p.value} value={p.value}>
//               {p.label}
//             </option>
//           ))}
//         </select>
//       </label>
//       {eroare && (
//         <p className="error" data-testid="form-error">
//           {eroare}
//         </p>
//       )}
//       <button type="submit" disabled={trimite} data-testid="form-submit">
//         {trimite ? "Se salvează..." : "Adaugă"}
//       </button>
//     </form>
//   );
// }
import { useState } from "react";

const CERERE = [
  { value: "mare", label: "Cerere mare" },
  { value: "medie", label: "Cerere medie" },
  { value: "mica", label: "Cerere mica" },
];

const DENUMIRE_MAX = 100;

// Formular controlat: state-ul React este sursa de adevăr pentru câmpuri
export default function ProduseForm({ onAdd }) {
  const [numeProdus, setNumeProdus] = useState("");
  const [cerere, setCerere] = useState("medie");
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
      setCerere("medie");
      setInStoc(true);
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className="produs-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label className="form-camp">
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

      <label className="form-camp">
        Cerere
        <select
          value={cerere}
          onChange={(e) => setCerere(e.target.value)}
          data-testid="form-prioritate"
        >
          {CERERE.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      <label className="form-check">
        <input
          type="checkbox"
          checked={inStoc}
          onChange={(e) => setInStoc(e.target.checked)}
          data-testid="form-stoc"
        />
        În stoc
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button
        className="btn-adauga"
        type="submit"
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}
