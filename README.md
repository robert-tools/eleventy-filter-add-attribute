# 🗂️ @robert.tools/eleventy-filter-add-attribute

Adding attributes to a html element.

## 📜 Usage

### 🟢 Installation

```bash
npm install @robert.tools/eleventy-filter-add-attribute
```

### 📝 Sample usage

```typescript
import { addAttribute } from '@robert.tools/eleventy-filter-add-attribute';

addAttribute('hello', 'myKey'); // ' myKey="hello" '
addAttribute('hello', 'myKey', false); // ''  # condition=false
addAttribute('', 'myKey', true, { keyOnly: true }); // ' myKey '  # condition=false
```

```nunjucks
{% set myAttr = "hello" | addAttribute('myKey') %}
<div {{ myAttr }}>
```

## 🗃️ commands

After an npm install with `npm i` the following commands are available:

* adding attribute: `addAttribute`

## ⚖️ Notes

This software is hand-crafted, test-driven and assisted by AI tools. I know each
line of my code. ✌️

| Tool | Comment |
| --- | --- |
| ![assisted by Jest](https://img.shields.io/badge/Jest-TDD-008800?logo=jest) | Test-driven development with Jest |
| ![assisted by robert.tools](https://img.shields.io/badge/robert.tools-ecosystem-008800) | Part of the robert.tools ecosystem |
| ![assisted by GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-assisted-8A2BE2?logo=githubcopilot) | Code completion |
| ![assisted by OpenAI](https://img.shields.io/badge/OpenAI-assisted-8A2BE2?logo=openai) | chatGPT research |
