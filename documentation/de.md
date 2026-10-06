<!-- ELUCENIA technical documentation · acr-ti-rads · de · no clinical/professional/rights approval -->

# ACR TI-RADS

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/acr-ti-rads)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Zusammensetzung

`comp`

- `cistico` — Zystisch oder nahezu vollständig zystisch (0)
- `espongiforme` — Spongiform (0)
- `misto` — Gemischt zystisch und solide (1)
- `solido` — Solide oder nahezu vollständig solide (2)

### Echogenität

`eco`

- `anecoico` — Echofrei (0)
- `hiper` — Hyperechogen oder isoechogen (1)
- `hipo` — Hypoechogen (2)
- `muitohipo` — Stark hypoechogen (3)

### Form (im Querschnitt)

`forma`

- `larga` — Breiter als hoch (0)
- `alta` — Höher als breit (3)

### Rand

`margem`

- `lisa` — Glatt (0)
- `maldefinida` — Unscharf begrenzt (0)
- `irregular` — Lobuliert oder unregelmäßig (2)
- `extra` — Extrathyreoidale Ausdehnung (3)

### Echogene Foci: Makroverkalkungen (1)

`macro`

### Echogene Foci: periphere (randständige) Verkalkungen (2)

`periferica`

### Punktförmige echogene Foci (3)

`puntiforme`

### Größter Knotendurchmesser (optional)

`tamanho`

cm · optional · Bereich: 0,1–10

## Fassung der Methode

ACR TI-RADS 2017; Regel für gutartige Zusammensetzung am 2026-10-03 anhand des ACR-Arbeitsblatts geprüft

## Dokumentierte Formel

Zystische, nahezu vollständig zystische und spongiforme Knoten erhalten 0 Punkte (TR1); Punkte anderer Kategorien werden nicht addiert. 

Punkte für Zusammensetzung, Echogenität, Form, Rand und echogene Foci addieren (bei Foci alle vorhandenen Typen addieren; keine Foci oder große Kometenschweifartefakte = 0).

TR1: 0 Punkte · TR2: 2 Punkte · TR3: 3 Punkte · TR4: 4–6 Punkte · TR5: mindestens 7.

## Grenzen und Population

Die ACR-TI-RADS-Klassifikation 2017 verwendet Ultraschallbefunde des Knotens und seinen größten Durchmesser. Eine zystische oder spongiforme Zusammensetzung erhält keine Punkte aus den übrigen Gruppen. Die offizielle FAQ unterscheidet zuvor biopsierte und PET-positive Knoten: Biopsieergebnisse und klinischer Kontext können das Vorgehen verändern und sind keine Eingaben dieses Rechners. Kategorie und Größenschwellen stellen keine histologische Diagnose dar.

## Referenzen

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

TR1 (benigne): FNA nicht indiziert

| Ergebnisdetails | |
| --- | --- |
| Punkte | 0 |


### 2

TR1 (benigne): FNA nicht indiziert

| Ergebnisdetails | |
| --- | --- |
| Punkte | 0 |


### 3

TR3 (leicht verdächtig): FNA indiziert (≥ 2,5 cm)

| Ergebnisdetails | |
| --- | --- |
| Punkte | 3 |
| FNA bei größtem Durchmesser | ≥ 2,5 cm |
| Verlaufskontrolle wenn | ≥ 1,5 cm (US in 1, 3 und 5 Jahren) |


### 4

TR4 (mäßig verdächtig): Ultraschallkontrolle, keine FNA

| Ergebnisdetails | |
| --- | --- |
| Punkte | 4 |
| FNA bei größtem Durchmesser | ≥ 1,5 cm |
| Verlaufskontrolle wenn | ≥ 1,0 cm (US in 1, 2, 3 und 5 Jahren) |


### 5

TR5 (hochverdächtig): FNA indiziert (≥ 1,0 cm)

| Ergebnisdetails | |
| --- | --- |
| Punkte | 13 |
| FNA bei größtem Durchmesser | ≥ 1,0 cm |
| Verlaufskontrolle wenn | ≥ 0,5 cm (jährlicher US für bis zu 5 Jahre) |

