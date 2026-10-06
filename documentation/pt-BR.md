<!-- ELUCENIA technical documentation · acr-ti-rads · pt-BR · no clinical/professional/rights approval -->

# ACR TI-RADS

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/acr-ti-rads)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Composição

`comp`

- `cistico` — Cístico ou quase todo cístico (0)
- `espongiforme` — Espongiforme (0)
- `misto` — Misto sólido-cístico (1)
- `solido` — Sólido ou quase todo sólido (2)

### Ecogenicidade

`eco`

- `anecoico` — Anecoico (0)
- `hiper` — Hiper ou isoecoico (1)
- `hipo` — Hipoecoico (2)
- `muitohipo` — Muito hipoecoico (3)

### Forma (no corte transversal)

`forma`

- `larga` — Mais largo que alto (0)
- `alta` — Mais alto que largo (3)

### Margem

`margem`

- `lisa` — Lisa (0)
- `maldefinida` — Mal definida (0)
- `irregular` — Lobulada ou irregular (2)
- `extra` — Extensão extratireoidiana (3)

### Focos ecogênicos: macrocalcificações (1)

`macro`

### Focos ecogênicos: calcificações periféricas (em anel) (2)

`periferica`

### Focos ecogênicos: puntiformes (3)

`puntiforme`

### Maior diâmetro do nódulo (opcional)

`tamanho`

cm · opcional · intervalo: 0,1–10

## Edição do método

ACR TI-RADS 2017; benign composition rule checked against ACR worksheet on 2026-10-03

## Fórmula documentada

Nódulos císticos ou quase totalmente císticos e espongiformes recebem 0 pontos (TR1); não se somam pontos das outras categorias. 

Soma dos pontos de composição, ecogenicidade, forma, margem e focos ecogênicos (nestes, some todos os tipos presentes; artefato em cauda de cometa grande ou ausência de focos = 0).

TR1: 0 ponto · TR2: 2 pontos · TR3: 3 pontos · TR4: 4 a 6 pontos · TR5: 7 ou mais.

## Limites e população

A classificação ACR TI-RADS 2017 usa achados ultrassonográficos do nódulo e seu maior diâmetro. Composição cística ou espongiforme não recebe pontos dos demais grupos. A FAQ oficial distingue nódulos previamente biopsiados e nódulos positivos no PET: os resultados da biópsia e o contexto clínico podem modificar a conduta, e não são entradas desta calculadora. A categoria e os limiares de tamanho não constituem diagnóstico histológico.

## Referências

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

TR1 (benigno): PAAF não indicada

| Detalhes do resultado | |
| --- | --- |
| Pontos | 0 |


### 2

TR1 (benigno): PAAF não indicada

| Detalhes do resultado | |
| --- | --- |
| Pontos | 0 |


### 3

TR3 (levemente suspeito): PAAF indicada (≥ 2,5 cm)

| Detalhes do resultado | |
| --- | --- |
| Pontos | 3 |
| PAAF se maior diâmetro | ≥ 2,5 cm |
| Seguimento se | ≥ 1,5 cm (US em 1, 3 e 5 anos) |


### 4

TR4 (moderadamente suspeito): seguimento ultrassonográfico, sem PAAF

| Detalhes do resultado | |
| --- | --- |
| Pontos | 4 |
| PAAF se maior diâmetro | ≥ 1,5 cm |
| Seguimento se | ≥ 1,0 cm (US em 1, 2, 3 e 5 anos) |


### 5

TR5 (altamente suspeito): PAAF indicada (≥ 1,0 cm)

| Detalhes do resultado | |
| --- | --- |
| Pontos | 13 |
| PAAF se maior diâmetro | ≥ 1,0 cm |
| Seguimento se | ≥ 0,5 cm (US anual por até 5 anos) |

