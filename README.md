
# CSS-JS Converter for JavaScript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Installation](#installation)
  - [CDN](#cdn)
- [About](#about)
- [Sample](#sample)
  - [JSON](#json)
  - [CSS](#css)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## About

CSSJS Converter for JavaScript  
Converts CSS to JSON and back.  
Version 1.0.0

Released under the MIT license.

## Installation

### CDN

```bash
<script type="text/javascript" src="https://huydt03.github.io/CSSJS/libs/css-js.js"></script>
```

## Usage

### JavaScript / Typescript

```typescript

import { toCss, toJs } from 'css-js';

// To JSON
const json = toJs(cssString);

// To CSS
const css = toCss(jsonObject);
```

## Sample

See `index.html` 

### JSON

```json
{
    "*": {
        "box-sizing": "border-box"
    },
    "body": {
        "width": "100vw",
        "height": "100vh",
        "margin": "0",
        "display": "flex",
        "flex-direction": "column",
        "color": "#454444"
    },
    "header, footer": {
        "font-weight": "bold",
        "text-align": "center",
        "padding": "12px",
        "color": "#ccc"
    },
    "header": {
        "background": "#00BCD4",
        "color": "#fff",
        "font-size": "1.5em"
    },
    "main > section": {
        "flex-direction": "column"
    },
    "@media screen and (max-width: 640px)": {
        "main": {
            "flex-direction": "column"
        }
    }
}
```

### CSS

```css
*{
  box-sizing: border-box;
}
body{
  width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    color: #454444;
}
header, footer{
    font-weight: bold;
  text-align: center;
    padding: 12px;
    color: #ccc;
}
header{
    background: #00BCD4;
    color: #fff;
    font-size: 1.5em;
}
main > section{
  flex-direction: column;
}
@media screen and (max-width: 640px){
  main{
    flex-direction: column;
  }
}
```