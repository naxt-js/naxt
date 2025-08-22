# Naxt

**Naxt** is a minimal DOM-first UI micro-framework.  
It lets you build interactive web apps with plain JavaScript — no JSX, no virtual DOM, no build step.

## Features

- ⚡ **Direct DOM rendering** — no virtual layer  
- 🧩 **Tiny API** — helpers like `nx.div()`, `nx.button()`, `nx.input()`  
- 🔁 **Stateful re-render** — `nx.setState()` updates the app and preserves inputs, focus, and selections  
- 🎨 **CSS in JS** — `nx.css()` injects styles into the page  
- 🪄 **Meta helpers** — update `<title>` and `<meta description>` easily  
- 📦 **Zero build** — just a single `.js` file, use with `<script type="module">`

## Basic Setup

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading...</title>
</head>

<body>
    <div id="app"></div>
    <script src="https://raw.githack.com/naxt-js/naxt/main/naxt.js"></script>
    <script type="module" src="app.js"></script>
</body>

</html>
```
