/**
 * @file main module.
 * @module js/main
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from '../../../guitar-diagrams.js';

let gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram1Canvas';
document.getElementById('diagram1').appendChild(gdj1.getCanvasElement());
gdj1.drawNeck();


let gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram2Canvas';
gdj2.config.stringNamesEnabled = true;
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


// https://gist.github.com/Kaundur/2aca9a9edb003555f44195e826af4084
/*
var canvas = document.getElementById("diagram1Canvas");
// Convert the canvas to data
var image = canvas.toDataURL();
// Create a link
var aDownloadLink = document.createElement('a');
// Add the name of the file to the link
aDownloadLink.download = 'canvas_image.png';
// Attach the data to the link
aDownloadLink.href = image;
// Get the code to click the download link
aDownloadLink.click();
*/


let gdj3 = new GuitarDiagramsJS();
gdj3.config.canvasID = 'diagram3Canvas';
gdj3.config.stringNamesEnabled = true;
gdj3.config.orientHorizontally = true;
gdj3.config.fretStartingNumber = 3;
gdj3.config.stringNames = ['D','A','D','G'];
gdj3.config.fretCount = 3;
document.getElementById('diagram3').appendChild(gdj3.getCanvasElement());
gdj3.drawNeck();
gdj3.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj3.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj3.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj3.addMarker(4, 4, '4');
gdj3.addMarker(5, 5, '5');
gdj3.addMarker(6, 4, '6');
gdj3.addMarker(3, 1);
gdj3.drawAllMarkers();

let gdj4 = new GuitarDiagramsJS();
gdj4.config.canvasID = 'diagram4Canvas';
gdj4.config.stringNamesEnabled = true;
gdj4.config.orientHorizontally = true;
document.getElementById('diagram4').appendChild(gdj4.getCanvasElement());
gdj4.drawNeck();
gdj4.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
gdj4.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
gdj4.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
gdj4.addMarker(4, 4, '4');
gdj4.addMarker(5, 5, '5');
gdj4.addMarker(6, 4, '6');
gdj4.addMarker(3, 1);
gdj4.drawAllMarkers();
