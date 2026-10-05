# ACR TI-RADS — reviewed implementation package

[Download the complete 34-file package](ELUCENIA_ACR_TI_RADS_PILOT_FINAL45.zip). Unpack it as one directory, retaining `documentation/` and `localization/`. This package is a reviewed implementation update; existing repository attribution, security and license files remain unchanged.

SHA-256: `276a9a13696ba7f0703318561b278293a9db49d976927ef3d2d0d4f81d3288de`.

The package contains the local browser implementation, Node calculation entry, original reference cases, frozen independent synthetic expectations, obtained results, provenance and authored documentation in Portuguese (Brazil), English, Spanish, French, German, Italian, Arabic, Chinese, Japanese and Hindi. Serve the unpacked directory with a static HTTP server and open `index.html`; run `node test.cjs` for the numerical replay. Source links are references; calculation runs locally.

The local replay passed 1,040 cases and 3,131 assertions. Five original reference cases remain distinct from 1,035 frozen independent synthetic cases. The recorded browser test covers 70 calculation journeys over ten authored interfaces. These are technical tests, not clinical approval or professional language approval.

Method scope: the implemented ACR TI-RADS 2017 point/composition/diameter subset, with the benign-composition rule checked against the official ACR worksheet. The provenance explicitly records the one-point category limitation, inaccessible white-paper full text and unresolved instrument rights. No diagnosis or treatment recommendation is approved by this package. Apache-2.0 applies to ELUCENIA code only and grants no rights to third-party instruments, publications, translations, data or marks.

This archive was prepared from website build `osjJNvW6DuXxOifbRu_hV`; subsequent portal build `me65k-sTUFo65JinjU8iz` retained the same ACR numerical implementation and localized presentation. Publication of this package does not establish a production website deployment or completion of the other tools.
