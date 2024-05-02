/**
 * @file main module.
 * @module js/main
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from './lib/guitar-diagrams-js/guitar-diagrams.js';

const gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram1Canvas';
//gdj1.config.scaleFactor = .75;
//gdj1.config.fretStartingNumber = 3;
//gdj1.config.fretCount = 3;
gdj1.config.stringNamesEnabled = true;
console.log('Scale Factor: ' + gdj1.config.scaleFactor);
document.getElementById('diagram1').appendChild(gdj1.getCanvasElement());
gdj1.drawNeck();
gdj1.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj1.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj1.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj1.addMarker(4, 4, '4');
gdj1.addMarker(5, 5, '5');
gdj1.addMarker(6, 4, '6');
gdj1.addMarker(3, 1);
gdj1.drawAllMarkers();

const gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram2Canvas';
gdj2.config.stringNamesEnabled = true;
gdj2.config.orientHorizontally = true;
console.log('Orient horizontally: ' + gdj2.config.orientHorizontally);
document.getElementById('diagram2').appendChild(gdj2.getCanvasElement());
gdj2.drawNeck();
gdj2.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj2.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj2.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj2.addMarker(4, 4, '4');
gdj2.addMarker(5, 5, '5');
gdj2.addMarker(6, 4, '6');
gdj2.addMarker(3, 1);
gdj2.drawAllMarkers();
