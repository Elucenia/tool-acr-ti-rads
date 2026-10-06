<!-- ELUCENIA technical documentation · acr-ti-rads · fr · no clinical/professional/rights approval -->

# ACR TI-RADS

[conditions, sources et autorisations](https://elucenia.org/fr/outils/acr-ti-rads)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Composition

`comp`

- `cistico` — Kystique ou presque entièrement kystique (0)
- `espongiforme` — Spongiforme (0)
- `misto` — Mixte solide et kystique (1)
- `solido` — Solide ou presque entièrement solide (2)

### Échogénicité

`eco`

- `anecoico` — Anéchogène (0)
- `hiper` — Hyperéchogène ou isoéchogène (1)
- `hipo` — Hypoéchogène (2)
- `muitohipo` — Très hypoéchogène (3)

### Forme (en coupe transversale)

`forma`

- `larga` — Plus large que haut (0)
- `alta` — Plus haut que large (3)

### Contour

`margem`

- `lisa` — Régulier (0)
- `maldefinida` — Mal délimité (0)
- `irregular` — Lobulé ou irrégulier (2)
- `extra` — Extension extrathyroïdienne (3)

### Foyers échogènes : macrocalcifications (1)

`macro`

### Foyers échogènes : calcifications périphériques (en anneau) (2)

`periferica`

### Foyers échogènes ponctiformes (3)

`puntiforme`

### Diamètre maximal du nodule (facultatif)

`tamanho`

cm · facultatif · intervalle: 0,1–10

## Édition de la méthode

ACR TI-RADS 2017 ; règle de composition bénigne vérifiée dans la fiche ACR le 2026-10-03

## Formule documentée

Les nodules kystiques, presque entièrement kystiques et spongiformes reçoivent 0 point (TR1) ; ne pas ajouter les points des autres catégories. 

Additionner les points de composition, d’échogénicité, de forme, de contour et de foyers échogènes (pour les foyers, additionner tous les types présents ; absence de foyers ou grands artefacts en queue de comète = 0).

TR1 : 0 point · TR2 : 2 points · TR3 : 3 points · TR4 : 4–6 points · TR5 : 7 ou plus.

## Limites et population

La classification ACR TI-RADS 2017 utilise les signes échographiques du nodule et son plus grand diamètre. Une composition kystique ou spongiforme ne reçoit pas de points des autres groupes. La FAQ officielle distingue les nodules déjà biopsiés et les nodules positifs en TEP : les résultats de la biopsie et le contexte clinique peuvent modifier la conduite, et ne sont pas des entrées de ce calculateur. La catégorie et les seuils de taille ne constituent pas un diagnostic histologique.

## Références

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

TR1 (bénin) : cytoponction à l'aiguille fine non indiquée

| Détails du résultat | |
| --- | --- |
| Points | 0 |


### 2

TR1 (bénin) : cytoponction à l'aiguille fine non indiquée

| Détails du résultat | |
| --- | --- |
| Points | 0 |


### 3

TR3 (légèrement suspect) : cytoponction à l'aiguille fine indiquée (≥ 2,5 cm)

| Détails du résultat | |
| --- | --- |
| Points | 3 |
| cytoponction à l'aiguille fine si le plus grand diamètre | ≥ 2,5 cm |
| Suivi si | ≥ 1,5 cm (échographie à 1, 3 et 5 ans) |


### 4

TR4 (modérément suspect) : suivi échographique, pas de cytoponction à l'aiguille fine

| Détails du résultat | |
| --- | --- |
| Points | 4 |
| cytoponction à l'aiguille fine si le plus grand diamètre | ≥ 1,5 cm |
| Suivi si | ≥ 1,0 cm (échographie à 1, 2, 3 et 5 ans) |


### 5

TR5 (hautement suspect) : cytoponction à l'aiguille fine indiquée (≥ 1,0 cm)

| Détails du résultat | |
| --- | --- |
| Points | 13 |
| cytoponction à l'aiguille fine si le plus grand diamètre | ≥ 1,0 cm |
| Suivi si | ≥ 0,5 cm (échographie annuelle pendant jusqu'à 5 ans) |

