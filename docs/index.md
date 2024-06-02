# Guitar Diagrams JS Documentation

## Overview

Lorem ipsum...

## Getting started

### Importing the library into your project

Lorem ipsum...

### Initializing a diagram

Lorem ipsum...

### Creating a diagram with markers

Lorem ipsum...

## API Usage

Lorem ipsum...some description, if necessary, for the API usage section.

### `guitar-diagrams.js` Class

#### `guitar-diagrams.js` Constructors

Constructor(s) in `guitar-diagrams.js` go here...

#### `guitar-diagrams.js` Static Public Members

Static members in `guitar-diagrams.js` go here... (We might need to talk about how to handled these.)

#### `guitar-diagrams.js` Public Properties

Properties in `guitar-diagrams.js` go here...

#### `guitar-diagrams.js` Public Methods

Methods in `guitar-diagrams.js` go here...

### `guitar-diagrams-config.js` Class

#### `guitar-diagrams-config.js` Constructors

Constructor(s) in `guitar-diagrams-config.js` go here...

#### `guitar-diagrams-config.js` Public Properties

Properties in `guitar-diagrams-config.js` go here...

##### canvasID (get)

Exists as a property of the config property on the GuitarDiagrams object. Gets the ID attribute of the canvas HTML element.

- **Parameters**: {string} The ID attribute of the canvas HTML element.
- **Return Value**: _None_
- **Default Value**: {string} 'gdjCanvas'

_Example:_

```javascript
gdj1.config.canvasID = 'diagram-1-canvas';
```

##### canvasID (set)

Exists as a property of the config property on the GuitarDiagrams object. Sets the ID attribute of the canvas HTML element.

- **Parameters**: _None_
- **Return Value**: {string} The ID attribute of the canvas HTML element.
- **Default Value**: {string} 'gdjCanvas'

_Example:_

```javascript
console.log('Canvas ID: ' + gdj1.config.canvasID);
```

#### `guitar-diagrams-config.js` Public Methods

_None._

### `guitar-diagrams-marker.js` Class

#### `guitar-diagrams-marker.js` Constructors

Constructor(s) in `guitar-diagram-marker.js` go here... (There's only a default constructor as of now.)

#### `guitar-diagrams-marker.js` Public Properties

Properties in `guitar-diagrams-marker.js` go here...

#### `guitar-diagrams-marker.js` Public Methods

Methods in `guitar-diagrams-marker.js` go here...
