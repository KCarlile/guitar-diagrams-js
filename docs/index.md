# Guitar Diagrams JS Documentation

## Getting Started with Guitar Diagrams JS

### Importing the Library into Your Project

There are three primary ways to include the Guitar Diagrams JS library into your project:

1. Reference the Guitar Diagrams JS library from a hosted CDN provider
1. Reference the Guitar Diagrams JS library from a local copy of the JavaScript (JS) files

:information_source: Note: in some future state, Guitar Diagrams JS may be available as a NPM package. (See issue [#65](https://github.com/KCarlile/guitar-diagrams-js/issues/65).)

#### Option 1: Manual Reference via CDN-Hosted Files

If you want to use a CDN-hosted package (e.g., Guitar Diagrams JS on JSDelivr at `https://cdn.jsdelivr.net/gh/KCarlile/guitar-diagrams-js@main/src/guitar-diagrams.mjs`), you can reference it in your code like this:

```html
<script type="module">
   import { GuitarDiagramsJS } from 'https://cdn.jsdelivr.net/gh/KCarlile/guitar-diagrams-js@main/src/guitar-diagrams.mjs';
   // code to configure and use Guitar Diagrams JS goes here
</script>
```

Be sure to add some target HTML element to your page with a matching ID (`gdj1.addCanvasToElement('diagram-1');` where `'diagram-1'` is the ID) in your JS code so Guitar Diagrams JS knows where to add your drawing:

```html
<div id="diagram-1"></div>
```

#### Option 2: Manual Reference via Local Copies of Files

You can also install this package manually by downloading it, placing the files in the correct location, and modifying your site's code to reference the library. The following steps outline this process:

1. Download the repository files from the [GitHub repository for Guitar Diagrams JS](https://github.com/KCarlile/guitar-diagrams-js).
1. The only files about which you should be concerned are the following:
   - `guitar-diagrams.mjs`: main functionality
   - `guitar-diagrams-config.mjs`: config object
   - `guitar-diagrams-marker.mjs`: marker object
1. Place those files in your application at `wherever/you/put/your/js/files/guitar-diagram-js/`.
1. In the JS file with your primary entrypoint, add an import statement:

   ```javascript
   <script type="module">
      import { GuitarDiagramsJS } from 'wherever/you/put/your/js/files/guitar-diagrams-js/guitar-diagrams.mjs';
      // code to configure and use Guitar Diagrams JS goes here
   </script>
   ```

1. Be sure to add some target HTML element to your page with a matching ID (`gdj1.addCanvasToElement('diagram-1');` where `'diagram-1'` is the ID) in your JS code so Guitar Diagrams JS knows where to add your drawing:

   ```html
   <div id="diagram-1"></div>
   ```

### Leveraging the Guitar Diagrams JS Library in Your Project

Once you've successfully referenced the library using one of the methods outlined above, you'll need to prepare your HTML and JavaScript to leverage the library.

#### Specifying the Location of the Diagram

In your HTML markup, ensure that you have some block-level element (`<p>`, `<div>`, etc.) with a unique ID that you can reference from JavaScript, such as:

```html
<div id="diagram-1"></div>
```

Remember the unique ID of this block-level element as you'll be using it in the next section.

### Initializing a Diagram

After your import statement, add the JavaScript to associate your block-level element's unique ID with an instance of a Guitar Diagrams JS object, like this:

```javascript
let gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram-1-canvas';
gdj1.addCanvasToElement('diagram-1');
gdj1.drawNeck();
```

This will result in the most basic guitar diagram of a blank fretboard. The following explains what each line does:

| Line | Code | Description | Notes |
| ---- | ---- | ----------- | ----- |
| 1 | `let gdj1 = new GuitarDiagramsJS();`| Instantiate a new `GuitarDiagramsJS` object and assign it to the `gdj1` variable|  |
| 2 | `gdj1.config.canvasID = 'diagram-1-canvas';` | Set the canvasID value of the gdj1's config object to `'diagram-1-canvas'` | `'diagram-1-canvas'` is a unique ID for the `<canvas>` HTML element that will be added to your HTML within the block-level element. This ID is important so you can reference it later if you want to style the canvas itself. |
| 3 | `gdj1.addCanvasToElement('diagram-1');` | Add the Guitar Diagrams JS HTML `<canvas>` element to the parent block-level HTML element as specified by the element's unique ID | The ID string being passed here is the one specified in your HTML, like the example above: ```<div id="diagram-1"></div>``` |
| 4 | `gdj1.drawNeck();` | Draw the neck of the diagram with the previously specified parameters |  |

See _Example 1_ on the [Examples page](examples/index.html).

### Creating a Diagram with Markers

To add markers to a diagram, after calling `gdj1.drawNeck();`, you'll need to specify those markers and then draw them, like this:

```javascript
let gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram-2-canvas';
gdj2.config.stringNamesEnabled = true;
gdj2.addCanvasToElement('diagram-2');
gdj2.drawNeck();
gdj2.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj2.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj2.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj2.addMarker(4, 4, '4');
gdj2.addMarker(5, 0, '0');
gdj2.addMarker(6, 0, 'X');
gdj2.addMarker(3, 1);
gdj2.drawAllMarkers();
```

This will result in a basic guitar fretboard diagram with 7 different markers added. The following explains what each line does:

| Line | Code | Description | Notes |
| ---- | ---- | ----------- | ----- |
| 1 | `let gdj2 = new GuitarDiagramsJS();`| Instantiate a new `GuitarDiagramsJS` object and assign it to the `gdj1` variable|  |
| 2 | `gdj2.config.canvasID = 'diagram-2-canvas';` | Set the canvasID value of the gdj1's config object to `'diagram-2-canvas'` | `'diagram-2-canvas'` is a unique ID for the `<canvas>` HTML element that will be added to your HTML within the block-level element. This ID is important so you can reference it later if you want to style the canvas itself. |
| 3 | `gdj1.addCanvasToElement('diagram-2');` | Add the Guitar Diagrams JS HTML `<canvas>` element to the parent block-level HTML element as specified by the element's unique ID | The ID string being passed here is the one specified in your HTML, like the example above, but with a different ID for diagram 2: ```<div id="diagram-2"></div>``` |
| 4 | `gdj1.drawNeck();` | Draw the neck of the diagram with the previously specified parameters |  |
| 5 | `gdj2.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);` | Adds a marker on the string 1, fret 1, with text "1", and square shape |  |
| 6 | `gdj2.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);` | Adds a marker on the string 2, fret 2, with text "2", and triangle shape |  |
| 7 | `gdj2.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);` | Adds a marker on the string 3, fret 3, with text "3", and diamond shape |  |
| 8 | `gdj2.addMarker(4, 4, '4');` | Adds a marker on the string 4, fret 4, with text "4" | If a shape is not specified, circle is the default shape. |
| 9 | `gdj2.addMarker(5, 0, '0');` | Adds a marker on the string 5, fret 0, with text "0" | If a shape is not specified, circle is the default shape. "0" for fret marker indicates an open string. |
| 10 | `gdj2.addMarker(6, 0, 'X');` | Adds a marker on the string 6, fret 0, with text "X" | If a shape is not specified, circle is the default shape. "X" for fret marker indicates a muted string. |
| 11 | `gdj2.addMarker(3, 1);` | Adds a marker on the string 3, fret 1 | If text is not specified, the marker will be blank. If a shape is not specified, circle is the default shape. |
| 12 | `gdj2.drawAllMarkers();` | Draws all of the specified markers on the fretboard | If a specified marker would be rendered beyond the visible fretboard, it will not be rendered and an error will be logged to the console. |

See _Example 2_ on the [Examples page](examples/index.html).

See the full [API documentation](api-docs.md) for all of the options for markers.

## API Usage Details

See the [API Documentation page](api-docs.md) for more information about how to use the API, including constructors (non-default), properties, public methods, and more.
