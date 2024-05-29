# Guitar Diagrams JS

## Overview

_Guitar Diagrams JS_ is an open source JavaScript library for drawing guitar chords and scales on an HTML5 canvas.

Project: <https://github.com/KCarlile/guitar-diagrams-js>\
Version: 0.1.0

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
- [`docs/index.md`](docs/index.md): API usage documentation
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
$ npm install @kcarlile/guitar-diagrams-js@0.1.0
```

Or, alternately, you can manually edit your `package.json` file and add the following entry:

```json
"@kcarlile/guitar-diagrams-js": "0.1.0",
```

#### Option 2: Manual Installation via CDN

If you want to use a CDN-hosted package (e.g., Guitar Diagrams JS on JSDelivr at `https://cdn.jsdelivr.net/gh/KCarlile/guitar-diagrams-js@main/guitar-diagrams.js`), you can reference it in your code like this:

```html
<div id="diagram1"></div>
<script type="module">
   import { GuitarDiagramsJS } from 'https://cdn.jsdelivr.net/gh/KCarlile/guitar-diagrams-js@main/guitar-diagrams.js';

   let gdj1 = new GuitarDiagramsJS();
   gdj1.config.canvasID = 'diagram1Canvas'; // specify the canvas element's an ID
   gdj1.addCanvas('diagram1'); // add the canvas to the specified element ID on the page
   gdj1.drawNeck(); // draw the fretboard
</script>
```

#### Option 3: Manual Installation via Local Copies

You can also install this package manually by downloading it, placing the files in the correct location, and modifying your site's code to reference the library. The following steps outline this process:

1. Download the repository files from the [GitHub repository for Guitar Diagrams JS](https://github.com/KCarlile/guitar-diagrams-js).
1. The only files about which you should be concerned are the following:
   1. `guitar-diagrams.js`: main functionality
   1. `guitar-diagrams-config.js`: config object
   1. `guitar-diagrams-marker.js`: marker object
1. Place those files in your application at `wherever/you/put/your/js/files/guitar-diagram-js/`.
1. In the JS file with your primary entrypoint, add an import statement:\

   ```javascript
   import { GuitarDiagramsJS } from 'wherever/you/put/your/js/files/guitar-diagrams-js/guitar-diagrams.js';
   ```

1. Following that import statement, begin to reference the library:\

   ```javascript
   let gdj1 = new GuitarDiagramsJS();
   gdj1.config.canvasID = 'diagram1Canvas'; // specify the canvas element's an ID
   gdj1.addCanvas('diagram1'); // add the canvas to the specified element ID on the page
   gdj1.drawNeck(); // draw the fretboard
   ```

1. Be sure to add some target element with the matching ID in your JS code so Guitar Diagrams JS knows where to add your drawing:\

   ```html
   <div id="diagram1"></div>
   ```

### More Information

For more information, please see the [`docs/index.md`](docs/index.md) and ['docs/examples/index.html`](docs/examples/index.html) pages for API documentation and examples.

## Technical Information for Code Owners

### Building and Packaging

When creating a new release, run `node install` in the project to update the `package-lock.json` file, then stage, commit, and push the changes to GitHub. Next, use the [Release page](https://github.com/KCarlile/guitar-diagrams-js/releases) to create a new release which will kick off a new package deployment using the GitHub Action workflow defined in `.github/workflows/release-package.yml`. One the workflow has completed successfully, the package will be hosted on the [Packages page](https://github.com/KCarlile/guitar-diagrams-js/pkgs/npm/guitar-diagrams-js).

See also [`docs/examples/js/guitar-diagrams-js/README.md`](docs/examples/js/guitar-diagrams-js/README.md) for information about symlinks for local testing and demo deployment information.

### Dependency Requirements

There are no specific requirements<sup>[1](#footnotes)</sup> for dependencies to use Guitar Diagrams JS other than the standard browser compatibility considerations with CSS, JavaScript, and HTML 5's `<canvas>` tag. Browser compatibility for the `<canvas>` tag can be found on [the MDN `<canvas>` page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#browser_compatibility).

----

## References

- Color reference: <https://htmlcolorcodes.com/color-chart/>
- Canvas API reference: <https://www.w3schools.com/jsref/api_canvas.asp>
- Bootstrap API: <https://getbootstrap.com/docs/>
- [<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

### <a href="footnotes"></a>Footnotes

1. The [examples page](docs/examples/index.html) leverages the following dependencies for convenience, but they are not requried for Guitar Diagrams JS usage.
   - [Bootstrap framework](https://getbootstrap.com/) is used for easier layout and formatting.
   - [highlight.js](https://highlightjs.org/) is used for syntax highlighting in the code examples.
