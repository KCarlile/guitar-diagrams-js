# Guitar Diagrams JS

[![GitHub Release](https://img.shields.io/github/v/release/KCarlile/guitar-diagrams-js?include_prereleases&logo=github&label=Latest%20version)](https://github.com/KCarlile/guitar-diagrams-js/releases)
[![GitHub Actions Workflow Status](https://github.com/KCarlile/guitar-diagrams-js/actions/workflows/release-package.yml/badge.svg)](https://github.com/KCarlile/guitar-diagrams-js/actions/workflows/release-package.yml)
[![Super-Linter](https://github.com/KCarlile/guitar-diagrams-js/actions/workflows/linting.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/standards/history/html52/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/TR/CSS/#css)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/KCarlile/guitar-diagrams-js/actions)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## Overview

_Guitar Diagrams JS_ is an open source JavaScript library for drawing guitar chords and scales on an HTML5 canvas.

Project: <https://github.com/KCarlile/guitar-diagrams-js>\
Version: 0.9.2

### Why should you use Guitar Diagrams JS?

Guitar Diagrams JS is intended for instructional content developers publishing their own sites with musical instruction related to scales and chords for stringed instruments. It's a called Guitar Diagrams JS because the primary use is for guitarists, but it can also be used for bass, banjo, mandolin, dobro, violin (or fiddle), viola, cello, ukulele, and more!

The benefit of Guitar Diagrams JS is that it provides a visual representation of the instrument without requiring the content creator to design images graphically, download them, and embed them in HTML. The Guitar Diagrams JS library empowers you to create consistent scale and chord diagrams without ever needing to open a graphics program.

Here are some other comparisons to Guitar Diagrams JS:

| Name | Description | Visual | Graphical | Instrument Representation | No Sheet Music | Cost |
| ---- | ----------- | ------ | --------- | ------------------------- | -------------- | ---- |
| Guitar Diagrams JS | Create diagrams with minimal code and no graphics | ✅ | ✅ | ✅ | ✅ | $0 |
| Tablature (tabs) | Create diagrams manually with text | ✅ | ✅ | ⚠️ | ✅ | $0 |
| Graphic Design Software | Create diagrams manually with a graphic design program | ✅ | ✅ | ⚠️ | ✅ | [\$22.99/month](https://www.adobe.com/products/photoshop/plans.html) |
| Sheet Music | Create sheet music | ✅ | ❌ | ❌ | ❌ | [\$99](https://www.finalemusic.com/products/finale/special-pricing/) or [\$27.99/month](https://www.avid.com/sibelius/sibelius-ultimate-subscriptions?usertype=individual) |

## Project Lead/Owner and Contributors

### Project Lead/Owner

**Kenny Carlile**\
Website: [KCarlile.com](https://www.kcarlile.com/)\
GitHub profile: [@KCarlile](https://github.com/KCarlile)

### Contributors

 If you contribute to the project in any way (code, documentation, testing, etc.), your name will appear in the list of contributors below:

- Kenny Carlile (project lead/owner)
- _Your name here_

## Documentation and Examples

Please see the following pages for more information:

- [`README.md`](README.md): this page
- [`docs/index.md`](docs/index.md): main landing page for project documentation
- [`docs/api-docs.md`](docs/api-docs.md): API usage documentation
- [`docs/code-owner-docs.md`](docs/code-owner-docs.md): technical documentation for code owners
- [`docs/examples/index.html`](docs/examples/index.html): usage examples
- [`docs/CODE_OF_CONDUCT.md`](docs/CODE_OF_CONDUCT.md): code of conduct for contributing members
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md): instructions for contributing to the project
- [`LICENSE`](LICENSE): license file for the project

## Change Log

See the repository's [Releases page](https://github.com/KCarlile/guitar-diagrams-js/releases) for each release and associated release notes.

## Technical Information for Site Builders

### Usage in Your Project

#### Option 1: Installation as a Node Dependency

For full details, see the Node JS packages released by this project here: <https://github.com/KCarlile/guitar-diagrams-js/pkgs/npm/guitar-diagrams-js>

You can install Guitar Diagrams JS in your project as a Node JS dependency via NPM. Run the following command from your project's directory:

```bash
npm install @kcarlile/guitar-diagrams-js@0.9.2
```

Or, alternately, you can manually edit your `package.json` file and add the following entry:

```json
"@kcarlile/guitar-diagrams-js": "0.9.2",
```

#### Option 2: Manual Installation via CDN

If you want to use a CDN-hosted package (e.g., Guitar Diagrams JS on JSDelivr at `https://cdn.jsdelivr.net/gh/KCarlile/guitar-diagrams-js@main/guitar-diagrams.js`), you can reference it in your code like this:

```html
<div id="diagram-1"></div>
<script type="module">
   import { GuitarDiagramsJS } from 'https://cdn.jsdelivr.net/gh/KCarlile/guitar-diagrams-js@main/guitar-diagrams.js';

   let gdj1 = new GuitarDiagramsJS();
   gdj1.config.canvasID = 'diagram-1-canvas'; // specify the canvas element's an ID
   gdj1.addCanvas('diagram-1'); // add the canvas to the specified element ID on the page
   gdj1.drawNeck(); // draw the fretboard
</script>
```

Be sure to add some target HTML element to your page with a matching ID (`gdj1.addCanvas('diagram-1');` where `diagram-1` is the ID) in your JS code so Guitar Diagrams JS knows where to add your drawing:

```html
<div id="diagram-1"></div>
```

#### Option 3: Manual Installation via Local Copies

You can also install this package manually by downloading it, placing the files in the correct location, and modifying your site's code to reference the library. The following steps outline this process:

1. Download the repository files from the [GitHub repository for Guitar Diagrams JS](https://github.com/KCarlile/guitar-diagrams-js).
1. The only files about which you should be concerned are the following:
   - `guitar-diagrams.js`: main functionality
   - `guitar-diagrams-config.js`: config object
   - `guitar-diagrams-marker.js`: marker object
1. Place those files in your application at `wherever/you/put/your/js/files/guitar-diagram-js/`.
1. In the JS file with your primary entrypoint, add an import statement:

   ```javascript
   import { GuitarDiagramsJS } from 'wherever/you/put/your/js/files/guitar-diagrams-js/guitar-diagrams.js';
   ```

1. Following that import statement, begin to reference the library:

   ```javascript
   let gdj1 = new GuitarDiagramsJS();
   gdj1.config.canvasID = 'diagram-1-canvas'; // specify the canvas element's an ID
   gdj1.addCanvas('diagram-1'); // add the canvas to the specified element ID on the page
   gdj1.drawNeck(); // draw the fretboard
   ```

1. Be sure to add some target HTML element to your page with a matching ID (`gdj1.addCanvas('diagram-1');` where `diagram-1` is the ID) in your JS code so Guitar Diagrams JS knows where to add your drawing:

   ```html
   <div id="diagram-1"></div>
   ```

### More Information

For more information, please see the [`docs/index.md`](docs/index.md) and ['docs/examples/index.html`](docs/examples/index.html) pages for API documentation and examples.

## Technical Information for Code Owners

See [`docs/code-owners.md`](docs/code-owners.md) for documentation related to development and deployment.

## Dependency Requirements

There are no specific requirements<sup>[1](#footnotes)</sup> for dependencies to use Guitar Diagrams JS other than the standard browser compatibility considerations with CSS, JavaScript, and HTML 5's `<canvas>` tag. Browser compatibility for the `<canvas>` tag can be found on [the MDN `<canvas>` page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#browser_compatibility).

----

## References

- Color reference: <https://htmlcolorcodes.com/color-chart/>
- Canvas API reference: <https://www.w3schools.com/jsref/api_canvas.asp>
- Bootstrap API: <https://getbootstrap.com/docs/>
- How to Use GitHub Super Linter in Your Projects: <https://www.freecodecamp.org/news/github-super-linter/>
- GitHub Action - Super-Linter: <https://github.com/super-linter/super-linter/>
  - [![Super-Linter](https://github.com/KCarlile/guitar-diagrams-js/actions/workflows/linting.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)
- GitHub Action - FTP Deploy: <https://github.com/SamKirkland/FTP-Deploy-Action>
  - [<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

### <a href="footnotes"></a>Footnotes

1. The [examples page](docs/examples/index.html) leverages the following dependencies for convenience, but they are not requried for Guitar Diagrams JS usage.
   - [Bootstrap framework](https://getbootstrap.com/) is used for easier layout and formatting.
   - [highlight.js](https://highlightjs.org/) is used for syntax highlighting in the code examples.
