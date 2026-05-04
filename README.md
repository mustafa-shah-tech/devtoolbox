# DevToolbox

A clean, minimal, multi-tool website featuring free browser-based utility tools designed for developers and students. Built with HTML, CSS, and vanilla JavaScript. No backend, no build steps.

## Folder Structure

```
devtoolbox/
├── index.html            # Homepage listing all tools
├── css/
│   ├── style.css         # Global styles, variables, grid
│   └── tool.css          # Specific styles for tool pages
├── js/
│   ├── search.js         # Live search functionality for homepage
│   └── tools/            # Logic for each individual tool
│       ├── word-counter.js
│       ├── ...
├── tools/                # HTML pages for each individual tool
│   ├── word-counter.html
│   ├── ...
└── README.md             # Project documentation
```

## How to add a new tool

1. **Create the HTML File:** 
   Add a new file in `tools/new-tool.html`. You can copy the structure of an existing tool page (like `word-counter.html`). Update the title, meta description, breadcrumb, and tool UI.
2. **Create the JS File:** 
   Add a new script in `js/tools/new-tool.js`. Include your tool's logic here and ensure you link it at the bottom of your `new-tool.html` file.
3. **Add to Homepage:**
   Open `index.html` and add a new `.tool-card` within the appropriate `<section class="category-section">`.
4. **Update "Related Tools" (optional):**
   You can add the new tool to the related tools section of other tool pages as desired.

## Monetization

AdSense placeholders (`<div class="ad-slot">...</div>`) are pre-placed on the homepage and every tool page. Replace the placeholder comment with the actual AdSense script when deploying.

## License

Free to use.
