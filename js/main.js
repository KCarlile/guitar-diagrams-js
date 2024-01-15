/**
 * @file main module.
 * @module js/main
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from './lib/Guitar-Diagrams-JS/guitar-diagrams.js';

//const gdjControl = new GuitarDiagramsJS();
//document.getElementById('diagram1').appendChild(gdjControl.getCanvasElement());
//gdjControl.config.fretMarkersEnabled = false;
//gdjControl.config.orientHorizontally = true;
//gdjControl.config.fretStartingNumber = 2;
//gdjControl.testNeck();
/*
console.log('Canvas ID: ' + gdjControl.config.canvasID);
console.log('Fretboard color: ' + gdjControl.config.colorFretboard);
console.log('Frets color: ' + gdjControl.config.colorFrets);
console.log('Nut color: ' + gdjControl.config.colorNut);
console.log('Strings color: ' + gdjControl.config.colorStrings);
console.log('Fret Markers color: ' + gdjControl.config.colorFretMarkers);
console.log('Fret Markers enabled: ' + gdjControl.config.fretMarkersEnabled);
*/
const gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram2Canvas';
//gdj1.config.scaleFactor = .5;
//gdj1.config.fretStartingNumber = 3;
console.log('Scale Factor: ' + gdj1.config.scaleFactor);
document.getElementById('diagram2').appendChild(gdj1.getCanvasElement());
gdj1.drawNeck();
