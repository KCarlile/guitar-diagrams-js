# API Documentation

Lorem ipsum...some description, if necessary, for the API usage section.

## Table of Contents

- [API Documentation](#api-documentation)
  - [Table of Contents](#table-of-contents)
  - [`guitar-diagrams.js` Class](#guitar-diagramsjs-class)
    - [`guitar-diagrams.js` Constructors (non-default)](#guitar-diagramsjs-constructors-non-default)
    - [`guitar-diagrams.js` Static Public Members](#guitar-diagramsjs-static-public-members)
    - [`guitar-diagrams.js` Public Properties](#guitar-diagramsjs-public-properties)
    - [`guitar-diagrams.js` Public Methods](#guitar-diagramsjs-public-methods)
  - [`guitar-diagrams-config.js` Class](#guitar-diagrams-configjs-class)
    - [`guitar-diagrams-config.js` Constructors (non-default)](#guitar-diagrams-configjs-constructors-non-default)
    - [`guitar-diagrams-config.js` Public Properties](#guitar-diagrams-configjs-public-properties)
      - [canvasID (get)](#canvasid-get)
      - [canvasID (set)](#canvasid-set)
      - [colorFretboard (get)](#colorfretboard-get)
      - [colorFretboard (set)](#colorfretboard-set)
      - [colorNut (get)](#colornut-get)
      - [colorNut (set)](#colornut-set)
      - [colorNutOutline (get)](#colornutoutline-get)
      - [colorNutOutline (set)](#colornutoutline-set)
      - [colorFrets (get)](#colorfrets-get)
      - [colorFrets (set)](#colorfrets-set)
      - [colorStrings (get)](#colorstrings-get)
      - [colorStrings (set)](#colorstrings-set)
      - [colorFretMarker (get)](#colorfretmarker-get)
      - [colorFretMarker (set)](#colorfretmarker-set)
      - [colorDiagramBackground (get)](#colordiagrambackground-get)
      - [colorDiagramBackground (set)](#colordiagrambackground-set)
      - [colorLabel (get)](#colorlabel-get)
      - [colorLabel (set)](#colorlabel-set)
      - [markerStrokeWidth (get)](#markerstrokewidth-get)
      - [markerStrokeWidth (set)](#markerstrokewidth-set)
      - [markerFontSize (get)](#markerfontsize-get)
      - [markerFontSize (set)](#markerfontsize-set)
      - [fretCount (get)](#fretcount-get)
      - [fretCount (set)](#fretcount-set)
      - [scaleFactor (get)](#scalefactor-get)
      - [scaleFactor (set)](#scalefactor-set)
      - [orientHorizontally (get)](#orienthorizontally-get)
      - [orientHorizontally (set)](#orienthorizontally-set)
      - [fretMarkerEnabled (get)](#fretmarkerenabled-get)
      - [fretMarkerEnabled (set)](#fretmarkerenabled-set)
      - [fretStartingNumber (get)](#fretstartingnumber-get)
      - [fretStartingNumber (set)](#fretstartingnumber-set)
      - [stringNamesEnabled (get)](#stringnamesenabled-get)
      - [stringNamesEnabled (set)](#stringnamesenabled-set)
      - [stringNames (get)](#stringnames-get)
      - [stringNames (set)](#stringnames-set)
      - [downloadImageEnabled (get)](#downloadimageenabled-get)
      - [downloadImageEnabled (set)](#downloadimageenabled-set)
    - [`guitar-diagrams-config.js` Public Methods](#guitar-diagrams-configjs-public-methods)
  - [`guitar-diagrams-marker.js` Class](#guitar-diagrams-markerjs-class)
    - [`guitar-diagrams-marker.js` Constructors (non-default)](#guitar-diagrams-markerjs-constructors-non-default)
    - [`guitar-diagrams-marker.js` Public Properties](#guitar-diagrams-markerjs-public-properties)
    - [`guitar-diagrams-marker.js` Public Methods](#guitar-diagrams-markerjs-public-methods)

---

## <a name="guitar-diagrams.js"></a>`guitar-diagrams.js` Class

### <a name="guitar-diagrams.js-constructor"></a>`guitar-diagrams.js` Constructors (non-default)

Constructor(s) in `guitar-diagrams.js` go here... or _None._

### <a name="guitar-diagrams.js-static-public-members"></a>`guitar-diagrams.js` Static Public Members

Static members in `guitar-diagrams.js` go here... (We might need to talk about how to handled these.)

### <a name="guitar-diagrams.js-public-properties"></a>`guitar-diagrams.js` Public Properties

Properties in `guitar-diagrams.js` go here...

### <a name="guitar-diagrams.js-public-methods"></a>`guitar-diagrams.js` Public Methods

Methods in `guitar-diagrams.js` go here...

## <a name="guitar-diagrams-config.js"></a>`guitar-diagrams-config.js` Class

### <a name="guitar-diagrams.js-constructors"></a>`guitar-diagrams-config.js` Constructors (non-default)

Constructor(s) in `guitar-diagrams-config.js` go here...

### <a name="guitar-diagrams.js-public-properties"></a>`guitar-diagrams-config.js` Public Properties

Properties in `guitar-diagrams-config.js` go here...

#### canvasID (get)

Exists as a property of the config property on the GuitarDiagrams object. Sets the ID attribute of the canvas HTML element.

- **Parameters**: _None_
- **Return Value**: {string} The ID attribute of the canvas HTML element.
- **Default Value**: {string} 'gdjCanvas'

_Example:_

```javascript
console.log('Canvas ID: ' + gdj1.config.canvasID);
```

#### canvasID (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the ID attribute of the canvas HTML element.

- **Parameters**: {string} The ID attribute of the canvas HTML element.
- **Return Value**: _None_
- **Default Value**: {string} 'gdjCanvas'

_Example:_

```javascript
gdj1.config.canvasID = 'diagram-1-canvas';
```

#### colorFretboard (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the fretboard.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the fretboard.
- **Default Value**: {string} '#795548'

_Example:_

```javascript
console.log('Fretboard color: ' + gdj5.config.colorFretboard);
```

#### colorFretboard (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the fretboard.

- **Parameters**: {string} The HTML color code of the fretboard.
- **Return Value**: _None_
- **Default Value**: {string} '#795548'

_Example:_

```javascript
gdj1.config.colorFretboard = '#FFE0B2';
```

#### colorNut (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the nut.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the nut.
- **Default Value**: {string} '#F2F3F4'

_Example:_

```javascript
console.log(gdj1.config.colorNut);
```

#### colorNut (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the nut.

- **Parameters**: {string} The HTML color code of the nut.
- **Return Value**: _None_
- **Default Value**: {string} '#F2F3F4'

_Example:_

```javascript
gdj1.config.colorNut = '#FFFFFF';
```

#### colorNutOutline (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the nut outline.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the nut outline.
- **Default Value**: {string} '#000000'

_Example:_

```javascript
console.log(gdj1.config.colorNutOutline);
```

#### colorNutOutline (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the nut outline.

- **Parameters**: {string} The HTML color code of the nut outline.
- **Return Value**: _None_
- **Default Value**: {string} '#000000'

_Example:_

```javascript
gdj1.config.colorNutOutline = '#7E5109';
```

#### colorFrets (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the frets.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the frets.
- **Default Value**: {string} '#808B96'

_Example:_

```javascript
console.log(gdj1.config.colorFrets);
```

#### colorFrets (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the frets.

- **Parameters**: {string} The HTML color code of the nut outline.
- **Return Value**: _None_
- **Default Value**: {string} '#808B96'

_Example:_

```javascript
gdj1.config.colorFrets = '#AEB6BF';
```

#### colorStrings (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the strings.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the strings.
- **Default Value**: {string} '#CFD8DC'

_Example:_

```javascript
console.log(gdj1.config.colorStrings);
```

#### colorStrings (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the strings.

- **Parameters**: {string} The HTML color code of the strings.
- **Return Value**: _None_
- **Default Value**: {string} '#CFD8DC'

_Example:_

```javascript
gdj1.config.colorStrings = '#566573';
```

#### colorFretMarker (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the fret markers.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the fret markers.
- **Default Value**: {string} '#FFFFFF'

_Example:_

```javascript
console.log(gdj1.config.colorFretMarker);
```

#### colorFretMarker (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the fret markers.

- **Parameters**: {string} The HTML color code of the fret markers.
- **Return Value**: _None_
- **Default Value**: {string} '#FFFFFF'

_Example:_

```javascript
gdj1.config.colorFretMarker = '#424949';
```

#### colorDiagramBackground (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the HTML color code of the diagram background.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the diagram background.
- **Default Value**: {string} null

_Example:_

```javascript
console.log(gdj1.config.colorDiagramBackground);
```

#### colorDiagramBackground (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the HTML color code of the diagram background.

- **Parameters**: {string} The HTML color code of the diagram background.
- **Return Value**: _None_
- **Default Value**: {string} null

_Example:_

```javascript
gdj1.config.colorDiagramBackground = '#000000';
```

#### colorLabel (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets HTML color code of the label text for string names and fret number.

- **Parameters**: _None_
- **Return Value**: {string} The HTML color code of the label text for string names and fret number.
- **Default Value**: {string} '#000000'

_Example:_

```javascript
console.log(gdj1.config.colorLabel);
```

#### colorLabel (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets HTML color code of the label text for string names and fret number.

- **Parameters**: {string} The HTML color code of the label text for string names and fret number.
- **Return Value**: _None_
- **Default Value**: {string} '#000000'

_Example:_

```javascript
gdj1.config.colorLabel = '#000000';
```

#### markerStrokeWidth (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the marker's stroke width.

- **Parameters**: _None_
- **Return Value**: {number} The marker's stroke width.
- **Default Value**: {number} 2

_Example:_

```javascript
console.log(gdj1.markerStrokeWidth);
```

#### markerStrokeWidth (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the marker's stroke width.

- **Parameters**: {number} The marker's stroke width.
- **Return Value**: _None_
- **Default Value**: {number} 2

_Example:_

```javascript
gdj1.config.markerStrokeWidth = 1;
```

#### markerFontSize (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the marker's font size.

- **Parameters**: _None_
- **Return Value**: {number} The marker's font size.
- **Default Value**: {number} 16

_Example:_

```javascript
console.log(gdj1.config.markerFontSize);
```

#### markerFontSize (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the marker's font size.

- **Parameters**: {number} The marker's font size.
- **Return Value**: _None_
- **Default Value**: {number} 16

_Example:_

```javascript
gdj1.config.markerFontSize = 10;
```

#### fretCount (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the number of frets on the diagram.

- **Parameters**: _None_
- **Return Value**: {number} The number of frets on the diagram.
- **Default Value**: {number} 5

_Example:_

```javascript
console.log(gdj1.config.fretCount);
```

#### fretCount (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the number of frets on the diagram.

- **Parameters**: {number} The number of frets on the diagram.
- **Return Value**: _None_
- **Default Value**: {number} 5

_Example:_

```javascript
gdj1.config.fretCount = 3;
```

#### scaleFactor (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the scale factor of the diagram.

- **Parameters**: _None_
- **Return Value**: {number} The scale factor of the diagram.
- **Default Value**: {number} 1

_Example:_

```javascript
console.log(gdj1.config.scaleFactor);
```

#### scaleFactor (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the scale factor of the diagram.

- **Parameters**: {number} The scale factor of the diagram.
- **Return Value**: _None_
- **Default Value**: {number} 1

_Example:_

```javascript
gdj1.config.scaleFactor = .6;
```

#### orientHorizontally (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the horizontal status of the diagram.

- **Parameters**: _None_
- **Return Value**: {boolean} The horizontal status of diagram.
- **Default Value**: {boolean} false;

_Example:_

```javascript
console.log(gdj1.config.orientHorizontally);
```

#### orientHorizontally (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the horizontal status of the diagram.

- **Parameters**: {boolean} The horizontal status of diagram.
- **Return Value**: _None_
- **Default Value**: {boolean} false;

_Example:_

```javascript
gdj1.config.orientHorizontally = true;
```

#### fretMarkerEnabled (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the enabled status of fret markers.

- **Parameters**: _None_
- **Return Value**: {boolean} The enabled status of fret markers.
- **Default Value**: {boolean} true;

_Example:_

```javascript
console.log(gdj1.config.fretMarkerEnabled);
```

#### fretMarkerEnabled (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the enabled status of fret markers.

- **Parameters**: {boolean} The enabled status of fret markers.
- **Return Value**: _None_
- **Default Value**: {boolean} true;

_Example:_

```javascript
gdj1.config.fretMarkerEnabled = true;
```

#### fretStartingNumber (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the starting fret number.

- **Parameters**: _None_
- **Return Value**: {number} The starting fret number.
- **Default Value**: {number} 0;

_Example:_

```javascript
console.log(gdj1.config.fretStartingNumber);
```

#### fretStartingNumber (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the starting fret number.

- **Parameters**: {number} The starting fret number.
- **Return Value**: _None_
- **Default Value**: {number} 0;

_Example:_

```javascript
gdj1.config.fretStartingNumber = 3;
```

#### stringNamesEnabled (get)

Exists as a property of the config property on the GuitarDiagrams object.  Gets the enabled status of string names.

- **Parameters**: _None_
- **Return Value**: {boolean} The enabled status of string names.
- **Default Value**: {boolean} false;

_Example:_

```javascript
console.log(gdj1.config.stringNamesEnabled);
```

#### stringNamesEnabled (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the enabled status of string names.

- **Parameters**: {boolean} The enabled status of string names.
- **Return Value**: _None_
- **Default Value**: {boolean} false;

_Example:_

```javascript
gdj1.config.stringNamesEnabled = true;
```

#### stringNames (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the array of string names.

- **Parameters**: _None_
- **Return Value**: {array} The array of string names.
- **Default Value**: {array} ['E','A','D','G','B','e'];

_Example:_

```javascript
console.log(gdj1.config.stringNames);
```

#### stringNames (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the array of string names.

- **Parameters**: {array} The array of string names.
- **Return Value**: _None_
- **Default Value**: {array} ['E','A','D','G','B','e'];

_Example:_

```javascript
gdj1.config.stringNames = ['D','A','D','G'];
```

#### downloadImageEnabled (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the enabled status of the download image button.

- **Parameters**: _None_
- **Return Value**: {boolean} The enabled status of the download image button.
- **Default Value**: {boolean} false;

_Example:_

```javascript
console.log(gdj1.config.downloadImageEnabled);
```

#### downloadImageEnabled (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the enabled status of the download image button.

- **Parameters**: {boolean} The enabled status of the download image button.
- **Return Value**: _None_
- **Default Value**: {boolean} false;

_Example:_

```javascript
gdj1.config.downloadImageEnabled = true;
```

### <a name="guitar-diagrams.js-public-methods"></a>`guitar-diagrams-config.js` Public Methods

_None._

## <a name="guitar-diagrams-marker.js"></a>`guitar-diagrams-marker.js` Class

### <a name="guitar-diagrams-marker.js-contstructors"></a>`guitar-diagrams-marker.js` Constructors (non-default)

Constructor(s) in `guitar-diagram-marker.js` go here... (There's only a default constructor as of now.)

### <a name="guitar-diagrams-marker.js-public-properties">`guitar-diagrams-marker.js` Public Properties

Properties in `guitar-diagrams-marker.js` go here...

### <a name="guitar-diagrams-marker.js-public-methods">`guitar-diagrams-marker.js` Public Methods

Methods in `guitar-diagrams-marker.js` go here...
