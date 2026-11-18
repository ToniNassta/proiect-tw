// Sursa unica: lista nivelurilor de cerere (value = cheia salvata in statusCerere)
export const CERERE = [
  { value: "mare", label: "Cerere mare" },
  { value: "medie", label: "Cerere medie" },
  { value: "mica", label: "Cerere mica" },
];

// Object.fromEntries transforma lista in obiectul
// { mare: "Cerere mare", medie: "Cerere medie", mica: "Cerere mica" },
// folosit pentru afisarea etichetelor pe card
export const ETICHETE_CERERE = Object.fromEntries(
  CERERE.map(({ value, label }) => [value, label]),
);

// Valoarea implicita a cererii pentru un produs nou
export const CERERE_IMPLICITA = "medie";

// Lungimea maxima a denumirii unui produs
export const DENUMIRE_MAX = 100;

///la apasarea pe un produs din lita sa se deschid o fereastra cu review-uri
//adaugare imagini si escriere la produslee din lista
