<!-- ELUCENIA technical documentation · acr-ti-rads · ja · no clinical/professional/rights approval -->

# ACR TI-RADS

[条件・出典・許諾](https://elucenia.org/ja/tools/acr-ti-rads)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 構成

`comp`

- `cistico` — 嚢胞性またはほぼ完全な嚢胞性 (0)
- `espongiforme` — 海綿状 (0)
- `misto` — 嚢胞性と充実性の混合 (1)
- `solido` — 充実性またはほぼ完全な充実性 (2)

### エコー輝度

`eco`

- `anecoico` — 無エコー (0)
- `hiper` — 高エコーまたは等エコー (1)
- `hipo` — 低エコー (2)
- `muitohipo` — 著しい低エコー (3)

### 形状（横断像）

`forma`

- `larga` — 横長 (0)
- `alta` — 縦長 (3)

### 辺縁

`margem`

- `lisa` — 平滑 (0)
- `maldefinida` — 不明瞭 (0)
- `irregular` — 分葉状または不整 (2)
- `extra` — 甲状腺外進展 (3)

### 高エコー点：粗大石灰化 (1)

`macro`

### 高エコー点：辺縁（リング状）石灰化 (2)

`periferica`

### 点状高エコー (3)

`puntiforme`

### 結節の最大径（任意）

`tamanho`

cm · 任意 · 範囲: 0.1–10

## 方法の版

ACR TI-RADS 2017；良性組成の規則を2026-10-03にACRワークシートで確認

## 記載された計算式

嚢胞性、ほぼ完全な嚢胞性、海綿状の結節は0点（TR1）とし、他の項目の点数を加算しません。 

構成、エコー輝度、形状、辺縁、高エコー点の点数を合計します（高エコー点は該当するすべての種類を加算し、なしまたは大きなコメットテールアーチファクトは0点）。

TR1：0点 · TR2：2点 · TR3：3点 · TR4：4～6点 · TR5：7点以上。

## 限界・対象集団

ACR TI-RADS 2017の分類は、結節の超音波所見と最大径を用います。嚢胞性または海綿状の構成では、他の群からの点は加算されません。公式FAQは、以前に生検を受けた結節とPET陽性の結節を区別しています。生検結果と臨床状況によって対応が変わり得ますが、これらはこの計算器の入力ではありません。カテゴリーと大きさの閾値は、組織学的診断にはなりません。

## 参考文献

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
