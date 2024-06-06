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
- **Default Value**: {string} '#FFFFFF'

_Example:_

```javascript
gdj1.config.colorDiagramBackground = '#000000';
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
