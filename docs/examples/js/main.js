/**
 * @file main module.
 * @module js/main
 * @link https://github.com/KCarlile/guitar-diagrams-js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from './guitar-diagrams-js/guitar-diagrams.js';

// ========== BEGIN example 1
let gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram1Canvas'; // specify the canvas element's an ID
gdj1.addCanvas('diagram1'); // add the canvas to the specified element ID on the page
gdj1.drawNeck(); // draw the fretboard
// ========== END example 1

// ========== BEGIN example 2
let gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram2Canvas';
gdj2.config.stringNamesEnabled = true;
gdj2.addCanvas('diagram2');
gdj2.drawNeck();
gdj2.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square); // add a square marker on string 1, fret 1, text '1'
gdj2.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle); // add a triangle marker on string 2, fret 2, text '2'
gdj2.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond); // add a diamond marker on string 3, fret 3, text '3'
gdj2.addMarker(4, 4, '4'); // add a default (circle) marker on string 4, fret 4, text '4'
gdj2.addMarker(5, 0, '0'); // add a default (circle) marker on string 5, fret 0, text '0'
gdj2.addMarker(6, 0, 'X'); // add a default (circle) marker on string 6, fret 0, text 'X'
gdj2.addMarker(3, 1); // add a default (circle) marker on string 3, fret 1, text empty
gdj2.drawAllMarkers(); // draw the markers
// ========== END example 2

// ========== BEGIN example 3
let gdj3 = new GuitarDiagramsJS();
gdj3.config.canvasID = 'diagram3Canvas';
gdj3.config.stringNamesEnabled = true; // set string names enabled
gdj3.config.orientHorizontally = true; // set horizontal orientation
gdj3.config.fretStartingNumber = 3; // set starting fret
gdj3.config.stringNames = ['D','A','D','G']; // set string names and count
gdj3.config.fretCount = 3; // set starting fret
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

// ========== BEGIN example 4
let gdj4 = new GuitarDiagramsJS();
gdj4.config.canvasID = 'diagram4Canvas';
gdj4.config.scaleFactor = .6; // set scaling factor (.6 == 60%)
gdj4.addCanvas('diagram4');
gdj4.drawNeck();
gdj4.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj4.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj4.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj4.addMarker(4, 4, '4');
gdj4.addMarker(5, 5, '5');
gdj4.addMarker(6, 4, '6');
gdj4.addMarker(3, 1);
gdj4.drawAllMarkers();
// ========== END example 4

// ========== BEGIN example 5
let gdj5 = new GuitarDiagramsJS();
gdj5.config.stringNamesEnabled = true;
gdj5.config.fretStartingNumber = 2;
gdj5.config.canvasID = 'diagram5Canvas';
gdj5.config.colorFretboard = '#FFE0B2'; // specify the fretboard background color
gdj5.config.colorNut = '#FFFFFF'; // specify the nut color
gdj5.config.colorNutOutline = '#7E5109'; // specify the nut outline color
gdj5.config.colorFrets = '#AEB6BF'; // specify the fret color
gdj5.config.colorStrings = '#566573'; // specify the string color
gdj5.config.colorFretMarkers = '#424949'; // specify the fret marker color
gdj5.config.colorDiagramBackground = '#000000'; // specify the diagram background color
gdj5.config.colorLabel = '#FFFFFF'; // specify the label color for string names and starting fret
gdj5.config.markerStrokeWidth = 1; // specify the marker's stroke width
gdj5.config.markerFontSize = 10; // specify the marker text's font size
gdj5.addCanvas('diagram5');
gdj5.drawNeck();
gdj5.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj5.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj5.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj5.addMarker(4, 4, '4');
gdj5.addMarker(5, 5, '5');
gdj5.addMarker(6, 4, '6');
gdj5.addMarker(3, 1);
gdj5.drawAllMarkers();
// ========== END example 5
