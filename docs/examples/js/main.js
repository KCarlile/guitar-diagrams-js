/**
 * @file main module.
 * @module js/main
 * @link https://github.com/KCarlile/guitar-diagrams-js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from '../../../guitar-diagrams.js';

// ========== BEGIN example 1
let gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram1Canvas';
gdj1.addCanvas('diagram1');
gdj1.drawNeck();
// ========== END example 1

// ========== BEGIN example 2
let gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram2Canvas';
gdj2.config.stringNamesEnabled = true;
gdj2.addCanvas('diagram2');
gdj2.drawNeck();
gdj2.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj2.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj2.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj2.addMarker(4, 4, '4');
gdj2.addMarker(5, 0, '0');
gdj2.addMarker(6, 0, 'X');
gdj2.addMarker(3, 1);
gdj2.drawAllMarkers();
// ========== END example 2

// ========== BEGIN example 3
let gdj3 = new GuitarDiagramsJS();
gdj3.config.canvasID = 'diagram3Canvas';
gdj3.config.stringNamesEnabled = true;
gdj3.config.orientHorizontally = true;
gdj3.config.fretStartingNumber = 3;
gdj3.config.stringNames = ['D','A','D','G'];
gdj3.config.fretCount = 3;
gdj3.addCanvas('diagram3');
gdj3.drawNeck();
gdj3.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj3.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj3.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj3.addMarker(4, 4, '4');
gdj3.addMarker(5, 5, '5');
gdj3.addMarker(6, 4, '6');
gdj3.addMarker(3, 1);
gdj3.drawAllMarkers();
// ========== END example 3

// ========== BEGIN testing
let gdjTesting = new GuitarDiagramsJS();
gdjTesting.config.canvasID = 'diagramTestingCanvas';
gdjTesting.config.stringNamesEnabled = true;
gdjTesting.config.orientHorizontally = true;
//gdj4.config.fretStartingNumber = 3;
gdjTesting.config.downloadImageEnabled = true;
//gdj4.config.scaleFactor = .5;
gdjTesting.addCanvas('diagramTesting');
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
// ========== BEGIN testing
