<!-- ELUCENIA technical documentation · acr-ti-rads · it · no clinical/professional/rights approval -->

# ACR TI-RADS

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/acr-ti-rads)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Composizione

`comp`

- `cistico` — Cistico o quasi completamente cistico (0)
- `espongiforme` — Spongiforme (0)
- `misto` — Misto cistico e solido (1)
- `solido` — Solido o quasi completamente solido (2)

### Ecogenicità

`eco`

- `anecoico` — Anecogeno (0)
- `hiper` — Iperecogeno o isoecogeno (1)
- `hipo` — Ipoecogeno (2)
- `muitohipo` — Marcatamente ipoecogeno (3)

### Forma (in sezione trasversale)

`forma`

- `larga` — Più largo che alto (0)
- `alta` — Più alto che largo (3)

### Margine

`margem`

- `lisa` — Regolare (0)
- `maldefinida` — Mal definito (0)
- `irregular` — Lobulato o irregolare (2)
- `extra` — Estensione extratiroidea (3)

### Foci ecogeni: macrocalcificazioni (1)

`macro`

### Foci ecogeni: calcificazioni periferiche (ad anello) (2)

`periferica`

### Foci ecogeni puntiformi (3)

`puntiforme`

### Diametro massimo del nodulo (facoltativo)

`tamanho`

cm · facoltativo · intervallo: 0,1–10

## Edizione del metodo

ACR TI-RADS 2017; regola della composizione benigna verificata nella scheda ACR il 2026-10-03

## Formula documentata

I noduli cistici, quasi completamente cistici e spongiformi ricevono 0 punti (TR1); non aggiungere punti delle altre categorie. 

Sommare i punti di composizione, ecogenicità, forma, margine e foci ecogeni (per i foci, sommare tutti i tipi presenti; assenza di foci o grandi artefatti a coda di cometa = 0).

TR1: 0 punti · TR2: 2 punti · TR3: 3 punti · TR4: 4–6 punti · TR5: almeno 7.

## Limiti e popolazione

La classificazione ACR TI-RADS 2017 usa i reperti ecografici del nodulo e il suo diametro maggiore. La composizione cistica o spongiforme non riceve punti dagli altri gruppi. Le FAQ ufficiali distinguono i noduli precedentemente sottoposti a biopsia e quelli PET-positivi: i risultati della biopsia e il contesto clinico possono modificare la gestione e non sono dati di ingresso di questo calcolatore. La categoria e le soglie dimensionali non costituiscono una diagnosi istologica.

## Riferimenti

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

TR1 (benigno): agoaspirato non indicato

| Dettagli del risultato | |
| --- | --- |
| Punti | 0 |


### 2

TR1 (benigno): agoaspirato non indicato

| Dettagli del risultato | |
| --- | --- |
| Punti | 0 |


### 3

TR3 (lievemente sospetto): agoaspirato indicato (≥ 2,5 cm)

| Dettagli del risultato | |
| --- | --- |
| Punti | 3 |
| Agoaspirato se il diametro maggiore | ≥ 2,5 cm |
| Follow-up se | ≥ 1,5 cm (US a 1, 3 e 5 anni) |


### 4

TR4 (moderatamente sospetto): follow-up ecografico, senza agoaspirato

| Dettagli del risultato | |
| --- | --- |
| Punti | 4 |
| Agoaspirato se il diametro maggiore | ≥ 1,5 cm |
| Follow-up se | ≥ 1,0 cm (US a 1, 2, 3 e 5 anni) |


### 5

TR5 (altamente sospetto): agoaspirato indicato (≥ 1,0 cm)

| Dettagli del risultato | |
| --- | --- |
| Punti | 13 |
| Agoaspirato se il diametro maggiore | ≥ 1,0 cm |
| Follow-up se | ≥ 0,5 cm (US annuale fino a 5 anni) |

