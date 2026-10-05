<!-- ELUCENIA technical documentation · acr-ti-rads · en · no clinical/professional/rights approval -->

# ACR TI-RADS

[conditions, sources and permissions](https://elucenia.org/en/tools/acr-ti-rads)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Composition

`comp`

- `cistico` — Cystic or almost completely cystic (0)
- `espongiforme` — Spongiform (0)
- `misto` — Mixed cystic and solid (1)
- `solido` — Solid or almost completely solid (2)

### Echogenicity

`eco`

- `anecoico` — Anechoic (0)
- `hiper` — Hyperechoic or isoechoic (1)
- `hipo` — Hypoechoic (2)
- `muitohipo` — Very hypoechoic (3)

### Shape (on a transverse image)

`forma`

- `larga` — Wider than tall (0)
- `alta` — Taller than wide (3)

### Margin

`margem`

- `lisa` — Smooth (0)
- `maldefinida` — Ill-defined (0)
- `irregular` — Lobulated or irregular (2)
- `extra` — Extrathyroidal extension (3)

### Echogenic foci: macrocalcifications (1)

`macro`

### Echogenic foci: peripheral (rim) calcifications (2)

`periferica`

### Punctate echogenic foci (3)

`puntiforme`

### Maximum nodule diameter (optional)

`tamanho`

cm · optional · range: 0.1–10

## Method edition

ACR TI-RADS 2017; benign composition rule checked against the ACR worksheet on 2026-10-03

## Documented formula

Cystic, almost completely cystic and spongiform nodules receive 0 points (TR1); do not add points from other categories. 

Add the points for composition, echogenicity, shape, margin and echogenic foci (for foci, add all present types; none or large comet-tail artifacts = 0).

TR1: 0 points · TR2: 2 points · TR3: 3 points · TR4: 4–6 points · TR5: 7 or more.

## Limits and population

The ACR TI-RADS 2017 classification uses the nodule’s ultrasound findings and greatest diameter. Cystic or spongiform composition receives no points from the other groups. The official FAQ distinguishes previously biopsied nodules and PET-positive nodules: biopsy results and clinical context can change management and are not inputs to this calculator. The category and size thresholds are not a histological diagnosis.

## References

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
