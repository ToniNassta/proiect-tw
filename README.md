Numele aplciatiei: Electronics Store

Descriere: Va fi o aplicatie web care reprezinta un magazin online al unei companii de produse electrice si electrocasnice.

modul de rulare: Se deschide fisirul index.html in browser folosind extensia Live Server, prin apasarea butonului din dreapta jos "Go Live".

campurile: id, numeProdus, statusInStoc, statusCerere.

## Stage 1 : HTML and CSSStage 1: static mockup with HTML and CSS

AI usage:[Etapa 01](https://github.com/ToniNassta/proiect-tw/blob/4cb4dc9ed635cb2d0acd50a20ffebe96d5d6aa8b/ai-log/etapa-01.md)

Tabelul cu cerintele

| ID    | Requirement                                          | Where (permalink)                                                                                                                       | How to check     |
| ----- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| S1-R1 | README: description, fields, sample data, how to run | [README](https://github.com/ToniNassta/proiect-tw/blob/4cb4dc9ed635cb2d0acd50a20ffebe96d5d6aa8b/README.md)                              | read             |
| S1-R2 | AI usage section                                     | [Etapa 01 (etapa-01.md)](https://github.com/ToniNassta/proiect-tw/blob/4cb4dc9ed635cb2d0acd50a20ffebe96d5d6aa8b/ai-log/etapa-01.md)     | read             |
| S1-R3 | AI log for stage 1                                   | [Etapa 01 (etapa-01.md)](https://github.com/ToniNassta/proiect-tw/blob/4cb4dc9ed635cb2d0acd50a20ffebe96d5d6aa8b/ai-log/etapa-01.md)     | read             |
| S1-R4 | header, form (text + select), 3 cards with own data  | [index.html#L10-L64] (https://github.com/ToniNassta/proiect-tw/blob/00dd890bc83041608c94ad42e31674959b93bc7b/index.html#L10-L64)        | open the page    |
| S1-R5 | finished card looks different                        | [style.css#L84-L87. (.done)] (https://github.com/ToniNassta/proiect-tw/blob/00dd890bc83041608c94ad42e31674959b93bc7b/style.css#L84-L87) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px                  | [style.css#L89-L93 (@media)] (https://github.com/ToniNassta/proiect-tw/blob/00dd890bc83041608c94ad42e31674959b93bc7b/style.css#L89-L93) | resize < 700px   |
| S1-R7 | visible focus, readable dark theme                   | [style.css#L148-L162] (https://github.com/ToniNassta/proiect-tw/blob/00dd890bc83041608c94ad42e31674959b93bc7b/style.css#L148-L162)      | Tab; dark mode   |
| S1-R8 | commit “Stage 1” pushed                              | [Link to commits] (https://github.com/ToniNassta/proiect-tw/commits/master/)                                                            | commit history   |

## Stage 2: data logic

AI usage:[Etapa 02](https://github.com/ToniNassta/proiect-tw/blob/daf3b88b4765d7e5615cddfc1aee88ff20ec53b7/ai-log/etapa-02.md)

| ID    | Requirement                              | Where (permalink)                                                                                                                    | How to check         |
| ----- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| S2-R1 | JS file linked, logs on page load        | [index.html#L68](https://github.com/ToniNassta/proiect-tw/blob/daf3b88b4765d7e5615cddfc1aee88ff20ec53b7/index.html#L68)              | open page, F12       |
| S2-R2 | 3+ items with id, name, state, tag       | [produse.js#L9-L34.](https://github.com/ToniNassta/proiect-tw/blob/daf3b88b4765d7e5615cddfc1aee88ff20ec53b7/produse.js#L9-L34)       | read                 |
| S2-R3 | list, count, search, add, toggle, delete | [produse.js#L44-L110](https://github.com/ToniNassta/proiect-tw/blob/daf3b88b4765d7e5615cddfc1aee88ff20ec53b7/produse.js#L44-L110)    | console output       |
| S2-R4 | add rejects empty name and invalid tag   | [produse.js#L84-L100](https://github.com/ToniNassta/proiect-tw/blob/daf3b88b4765d7e5615cddfc1aee88ff20ec53b7/produse.js#L84-L100)    | last 2 console lines |
| S2-R5 | original array unchanged after add       | [produse.js#L145-L148](https://github.com/ToniNassta/proiect-tw/blob/daf3b88b4765d7e5615cddfc1aee88ff20ec53b7/produse.js#L145-L148). | console line         |
| S2-R6 | AI log                                   | [etapa-02 (ai-log)](https://github.com/ToniNassta/proiect-tw/blob/677a929dd67d095aab36cd552222339d7736e961/ai-log/etapa-02.md)       | read                 |
| S2-R7 | commit "Stage 2" pushed                  | [link catre toate commit-urile](https://github.com/ToniNassta/proiect-tw/commits/master/)                                            | commit history       |

## Stage 3: Vite and React project

The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## How to run

cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

| ID    | Requirement                             | Where (permalink)                                                                                                                                   | How to check             |
| ----- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| S3-R1 | npm run dev starts without errors       | [frontend/package.json](https://github.com/ToniNassta/proiect-tw/blob/f4346bf63b2e1198740dbd13f60995ac553cecaa/frontend/package.json)               | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L35-L37](https://github.com/ToniNassta/proiect-tw/blob/f4346bf63b2e1198740dbd13f60995ac553cecaa/frontend/src/App.jsx#L35-L37) | edit data, save          |
| S3-R3 | data from README, not from the example  | [frontend/src/App.jsx#L1-L26](https://github.com/ToniNassta/proiect-tw/blob/f4346bf63b2e1198740dbd13f60995ac553cecaa/frontend/src/App.jsx#L1-L26)   | compare with README      |
| S3-R4 | stage 1 styles reused                   | [frontend/src/App.css](https://github.com/ToniNassta/proiect-tw/blob/f4346bf63b2e1198740dbd13f60995ac553cecaa/frontend/src/App.css)                 | look at the page         |
| S3-R5 | node_modules ignored, build passes      | [frontend/.gitignore](https://github.com/ToniNassta/proiect-tw/blob/f4346bf63b2e1198740dbd13f60995ac553cecaa/frontend/.gitignore)                   | npm run build            |
| S3-R6 | README Stage 3 section + AI log         | README.md, ai-log/[etapa-03.md](https://github.com/ToniNassta/proiect-tw/blob/f4346bf63b2e1198740dbd13f60995ac553cecaa/ai-log/etapa-03.md)          | read                     |
| S3-R7 | commit "Stage 3" pushed                 | [link to the commit](https://github.com/ToniNassta/proiect-tw/commits/master/)                                                                      | commit history           |

## Stage 4: components

The list is rendered from the data, through two components:

- `TaskList` receives the whole array and renders one card per item
- `TaskCard` receives a single item through props and displays it

## Tabelul 4.2: Tabelul de verificare al Etapei 4

| ID    | Requirement                         | Where (permalink)                                                                                                                                             | How to check       |
| ----- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| S4-R1 | 2+ components in src/components/    | [frontend/src/components/](https://github.com/ToniNassta/proiect-tw/tree/e84e387f764d00472a80a08138012365e44e32f6/frontend/src/components)                    | open folder        |
| S4-R2 | card receives data through props    | [ProdusCard.jsx#L8](https://github.com/ToniNassta/proiect-tw/blob/e84e387f764d00472a80a08138012365e44e32f6/frontend/src/components/ProdusCard.jsx#L8)         | read               |
| S4-R3 | map + key={id}, no console warnings | [ProdusList.jsx#L9-L10](https://github.com/ToniNassta/proiect-tw/blob/e84e387f764d00472a80a08138012365e44e32f6/frontend/src/components/ProdusList.jsx#L9-L10) | F12, Console       |
| S4-R4 | message for empty list              | [ProdusList.jsx#L5-L6](https://github.com/ToniNassta/proiect-tw/blob/e84e387f764d00472a80a08138012365e44e32f6/frontend/src/components/ProdusList.jsx#L5-L6)   | set array to []    |
| S4-R5 | state changes the card look         | [ProdusCard.jsx#L10](https://github.com/ToniNassta/proiect-tw/blob/e84e387f764d00472a80a08138012365e44e32f6/frontend/src/components/ProdusCard.jsx#L10)       | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log     | [ai-log/etapa-04.md](https://github.com/ToniNassta/proiect-tw/blob/df5db633d89e6ee02b063933b8d8718ab5b10073/ai-log/etapa-04.md)                               | read               |
| S4-R7 | commit "Stage 4" pushed             | [link catre toate commit-urile](https://github.com/ToniNassta/proiect-tw/commits/master/)                                                                     | commit history     |

## Stage 5: local state and events

The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

| ID    | Requirement                                     | Where (permalink)                 | How to check                         |
| ----- | ----------------------------------------------- | --------------------------------- | ------------------------------------ |
| S5-R1 | list kept in useState, in App                   | App.jsx#L..                       | read                                 |
| S5-R2 | toggling changes state and card look            | App.jsx#L..-L.., TaskCard.jsx#L.. | click a checkbox                     |
| S5-R3 | delete removes the item                         | App.jsx#L..-L.., TaskCard.jsx#L.. | click Delete                         |
| S5-R4 | header counter derived, not in state            | App.jsx#L..                       | toggle, watch header                 |
| S5-R5 | immutable updates (no push, splice, assignment) | App.jsx#L..-L..                   | read                                 |
| S5-R6 | light / dark toggle: state + data-theme on html | App.jsx#L..-L.., App.css#L..-L..  | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log            | README.md, ai-log/etapa-05.md     | F12, Console                         |
| S5-R8 | commit "Stage 5" pushed                         | link to the commit                | commit history                       |

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API
