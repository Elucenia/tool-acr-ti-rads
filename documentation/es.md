<!-- ELUCENIA technical documentation · acr-ti-rads · es · no clinical/professional/rights approval -->

# ACR TI-RADS

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/acr-ti-rads)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Composición

`comp`

- `cistico` — Quístico o casi completamente quístico (0)
- `espongiforme` — Espongiforme (0)
- `misto` — Mixto quístico y sólido (1)
- `solido` — Sólido o casi completamente sólido (2)

### Ecogenicidad

`eco`

- `anecoico` — Anecoico (0)
- `hiper` — Hiperecoico o isoecoico (1)
- `hipo` — Hipoecoico (2)
- `muitohipo` — Muy hipoecoico (3)

### Forma (en el plano transversal)

`forma`

- `larga` — Más ancho que alto (0)
- `alta` — Más alto que ancho (3)

### Margen

`margem`

- `lisa` — Liso (0)
- `maldefinida` — Mal definido (0)
- `irregular` — Lobulado o irregular (2)
- `extra` — Extensión extratiroidea (3)

### Focos ecogénicos: macrocalcificaciones (1)

`macro`

### Focos ecogénicos: calcificaciones periféricas (en anillo) (2)

`periferica`

### Focos ecogénicos puntiformes (3)

`puntiforme`

### Diámetro máximo del nódulo (opcional)

`tamanho`

cm · opcional · intervalo: 0,1–10

## Edición del método

ACR TI-RADS 2017; regla de composición benigna contrastada con la ficha ACR el 2026-10-03

## Fórmula documentada

Los nódulos quísticos, casi completamente quísticos y espongiformes reciben 0 puntos (TR1); no se añaden puntos de las demás categorías. 

Sume los puntos de composición, ecogenicidad, forma, margen y focos ecogénicos (en estos, sume todos los tipos presentes; ausencia de focos o artefactos grandes en cola de cometa = 0).

TR1: 0 puntos · TR2: 2 puntos · TR3: 3 puntos · TR4: 4–6 puntos · TR5: 7 o más.

## Límites y población

La clasificación ACR TI-RADS 2017 utiliza los hallazgos ecográficos del nódulo y su mayor diámetro. La composición quística o espongiforme no recibe puntos de los demás grupos. Las preguntas frecuentes oficiales distinguen los nódulos previamente biopsiados y los positivos en PET: los resultados de la biopsia y el contexto clínico pueden modificar el manejo y no son entradas de esta calculadora. La categoría y los umbrales de tamaño no constituyen un diagnóstico histológico.

## Referencias

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

TR1 (benigno): PAAF no indicada

| Detalles del resultado | |
| --- | --- |
| Puntos | 0 |


### 2

TR1 (benigno): PAAF no indicada

| Detalles del resultado | |
| --- | --- |
| Puntos | 0 |


### 3

TR3 (levemente sospechoso): PAAF indicada (≥ 2,5 cm)

| Detalles del resultado | |
| --- | --- |
| Puntos | 3 |
| PAAF si el diámetro mayor | ≥ 2,5 cm |
| Seguimiento si | ≥ 1,5 cm (US en 1, 3 y 5 años) |


### 4

TR4 (moderadamente sospechoso): seguimiento ecográfico, sin PAAF

| Detalles del resultado | |
| --- | --- |
| Puntos | 4 |
| PAAF si el diámetro mayor | ≥ 1,5 cm |
| Seguimiento si | ≥ 1,0 cm (US en 1, 2, 3 y 5 años) |


### 5

TR5 (altamente sospechoso): PAAF indicada (≥ 1,0 cm)

| Detalles del resultado | |
| --- | --- |
| Puntos | 13 |
| PAAF si el diámetro mayor | ≥ 1,0 cm |
| Seguimiento si | ≥ 0,5 cm (US anual por hasta 5 años) |

