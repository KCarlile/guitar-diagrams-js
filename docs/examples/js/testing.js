/**
 * @file testing module.
 * @module js/testing
 * @link https://github.com/KCarlile/guitar-diagrams-js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from '../../../src/guitar-diagrams.mjs';

// ========== BEGIN testing
let gdjTesting = new GuitarDiagramsJS();
gdjTesting.config.canvasID = 'diagram-testing-canvas';
gdjTesting.config.stringNamesEnabled = true;
gdjTesting.config.orientHorizontally = true;
//gdj4.config.fretStartingNumber = 3;
gdjTesting.config.enableAllControls();
//gdjTesting.config.controlsEnabled = true;
//gdjTesting.config.downloadImageEnabled = true;
//gdjTesting.config.changeOrientationEnabled = true;

//gdj4.config.scaleFactor = .5;
gdjTesting.addCanvas('diagram-testing');
gdjTesting.drawNeck();
gdjTesting.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdjTesting.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdjTesting.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdjTesting.addMarker(4, 4, '4');
gdjTesting.addMarker(5, 5, '5');
gdjTesting.addMarker(6, 4, '6');
gdjTesting.addMarker(3, 1);
gdjTesting.addMarker(6, 0, '0');
gdjTesting.addMarker(5, 0, '0');
gdjTesting.addMarker(4, 0, '0');
gdjTesting.addMarker(3, 0, 'X');
gdjTesting.addMarker(2, 0, 'X');
gdjTesting.addMarker(1, 0, 'X');
gdjTesting.drawAllMarkers();
// ========== END testing
