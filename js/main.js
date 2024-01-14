/**
 * @file main module.
 * @module js/main
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from './lib/Guitar-Diagrams-JS/guitar-diagrams.js';

const gdj = new GuitarDiagramsJS();
document.getElementById('diagram1').appendChild(gdj.getCanvasElement());
//gdj.config.fretMarkersEnabled = false;
//gdj.config.orientHorizontally = true;
//gdj.config.fretStartingNumber = 2;
gdj.testNeck();

console.log('Canvas ID: ' + gdj.config.canvasID);
console.log('Fretboard color: ' + gdj.config.colorFretboard);
console.log('Frets color: ' + gdj.config.colorFrets);
console.log('Nut color: ' + gdj.config.colorNut);
console.log('Strings color: ' + gdj.config.colorStrings);
console.log('Fret Markers color: ' + gdj.config.colorFretMarkers);
console.log('Fret Markers enabled: ' + gdj.config.fretMarkersEnabled);
