<!-- ELUCENIA technical documentation · acr-ti-rads · zh · no clinical/professional/rights approval -->

# ACR TI-RADS

[条件、来源与许可](https://elucenia.org/zh/tools/acr-ti-rads)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 成分

`comp`

- `cistico` — 囊性或几乎完全囊性（0）
- `espongiforme` — 海绵状（0）
- `misto` — 囊实性（1）
- `solido` — 实性或几乎完全实性（2）

### 回声

`eco`

- `anecoico` — 无回声（0）
- `hiper` — 高回声或等回声（1）
- `hipo` — 低回声（2）
- `muitohipo` — 极低回声（3）

### 形状（横断面）

`forma`

- `larga` — 宽大于高（0）
- `alta` — 高大于宽（3）

### 边缘

`margem`

- `lisa` — 光滑（0）
- `maldefinida` — 边界不清（0）
- `irregular` — 分叶状或不规则（2）
- `extra` — 甲状腺外侵犯（3）

### 强回声灶：粗大钙化（1）

`macro`

### 强回声灶：周边（环状）钙化（2）

`periferica`

### 点状强回声灶（3）

`puntiforme`

### 结节最大径（可选）

`tamanho`

cm · 选填 · 范围: 0.1–10

## 方法版本

ACR TI-RADS 2017；良性组成规则于2026-10-03对照ACR工作表核查

## 已记录的公式

囊性、几乎完全囊性和海绵状结节计0分（TR1），不累加其他类别的分数。 

累加成分、回声、形状、边缘和强回声灶的分数（强回声灶累加所有存在的类型；无强回声灶或大彗星尾伪像=0）。

TR1：0分 · TR2：2分 · TR3：3分 · TR4：4–6分 · TR5：7分或以上。

## 限制与适用人群

ACR TI-RADS 2017分类使用结节的超声表现及最大直径。囊性或海绵状组成不会获得其他组的分数。官方常见问题区分既往活检结节和PET阳性结节：活检结果和临床情境可能改变处理方式，但它们不是此计算器的输入。类别和大小阈值不能构成组织学诊断。

## 参考文献

- [Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS Committee. J Am Coll Radiol, 2017.](https://doi.org/10.1016/j.jacr.2017.01.046)

- [https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq](https://radssupport.acr.org/support/solutions/articles/11000071474-acr-ti-rads-faq)

- [https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf](https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/RADS/TI-RADS/Sonographers-Worksheet-TI-RADS.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
