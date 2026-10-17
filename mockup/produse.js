///fisierul: produse.js
///array-ul: produse
///valorile fixe: cererea (statusCerere)
///numararea: numaraInStoc
///comuta: indisponibil in stoc
///cautarea: dupa numeProdus
///template obiect: { id: "", numeProdus: "",statusInStoc: "" ,statusCerere: "" }

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

const cerereArr = ["cerere mare", "cerere medie", "cerere mica"];

function nextId(produse) {
  return produse.reduce((max, produs) => Math.max(max, produs.id), 0) + 1;
}

// console.log("merge");

function listeazaNumeleProduselor(produse) {
  return produse.map((produs) => produs.numeProdus);
}

// console.log(
//   "Denumire produse: \n",
//   listeazaNumeleProduselor(produseArr).join(",\n"),
// );

function numaraInStoc(produse) {
  return produse.filter((produs) => produs.statusInStoc === true).length;
}

// console.log("Numarul ca produse in stoc este: ", numaraInStoc(produseArr));

function cautaDupaNumeProdus(produse, numeProdusCautat) {
  return produse.filter((produs) =>
    produs.numeProdus.toLowerCase().includes(numeProdusCautat.toLowerCase()),
  );
}
// console.log(cautaDupaNumeProdus(produseArr, "Aspirator Robot"));

function comutareStare(produse, id) {
  return produse.map((produs) => {
    return produs.id === id
      ? { ...produs, statusInStoc: !produs.statusInStoc }
      : produs;
  });
}

function stergereProdus(produse, id) {
  return produse.filter((produs) => produs.id !== id);
}

function adaugareElement(
  produse,
  numeProdusNou,
  cerere = "cerere medie",
  statusInStoc = true,
) {
  if (typeof numeProdusNou !== "string") {
    console.log("numele produsului trebuie sa fie un string");
    return produse;
  }

  const numeProdusNouTrim = numeProdusNou.trim();
  if (numeProdusNouTrim === "") {
    console.log("numele produsului nu poate fi gol");
    return produse;
  }

  if (!cerereArr.includes(cerere)) {
    console.log("status cere poate fi doar: ");
    for (let i = 0; i < cerereArr.length; i++) console.log(cerereArr[i]);
    console.log("din moment ce difera, nu putem adaugat produsul in lista");
    return produse;
  }

  const produsNou = {
    id: nextId(produse),
    numeProdus: numeProdusNouTrim,
    statusCerere: cerere,
    statusInStoc: statusInStoc,
  };

  return [...produse, produsNou];
}

console.log("--- Citire ---");
console.log("Nume produse:", listeazaNumeleProduselor(produseArr).join(", "));
console.log("In stoc:", numaraInStoc(produseArr));
console.log(
  "Căutare 'robot':",
  listeazaNumeleProduselor(cautaDupaNumeProdus(produseArr, "robot")).join(", "),
);
console.log("--- Adăugare ---");
let lista = adaugareElement(
  produseArr,
  "produs adaugat 1",
  "cerere mare",
  true,
);
console.log("Lista nouă de produse are:", lista.length, "produse");
console.log("Originalul a rămas cu:", produseArr.length, "produse");
console.log("--- Modificare și ștergere ---");
lista = comutareStare(lista, 1);
console.log("După bifarea id 1, in stoc sunt:", numaraInStoc(lista));
lista = stergereProdus(lista, 3);
console.log(
  "După ștergerea produsului cu id 3 lista de produse este:",
  listeazaNumeleProduselor(lista).join(", "),
);
console.log("--- Validare ---");
lista = adaugareElement(lista, " ");
lista = adaugareElement(lista, 2, "cerere cerere", false);
lista = adaugareElement(lista, "produs adaugat 2", "cerere cerere", false);
lista = adaugareElement(lista, "produs adaugat 3", "cerere mare", false);
console.log(
  "Lista noua de produse: ",
  listeazaNumeleProduselor(lista).join(", "),
);
console.log(
  "Lista initiala de produse neaschimbata: ",
  listeazaNumeleProduselor(produseArr).join(", "),
);
