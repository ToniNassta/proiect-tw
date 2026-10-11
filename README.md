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

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project
