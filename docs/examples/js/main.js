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
//gdj1.config.scaleFactor = .5;
gdj1.config.fretStartingNumber = 3;
//gdj1.config.fretCount = 3;
gdj1.config.stringNamesEnabled = true;
document.getElementById('diagram1').appendChild(gdj1.getCanvasElement());
gdj1 = setupDiagram(gdj1);
gdj1.logAllMarkers();


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


let gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram2Canvas';
gdj2.config.stringNamesEnabled = true;
gdj2.config.orientHorizontally = true;
gdj2.config.fretStartingNumber = 3;
//gdj2.config.scaleFactor = .5;
gdj2.config.stringNames = ['D','A','D','G'];
//gdj2.config.fretCount = 3;
document.getElementById('diagram2').appendChild(gdj2.getCanvasElement());
gdj2 = setupDiagram(gdj2);

function setupDiagram(diagram) {
    diagram.drawNeck();
    diagram.addMarker(1, 1, '1', GuitarDiagramsJS.Shape.Square);
    diagram.addMarker(2, 2, '2', GuitarDiagramsJS.Shape.Triangle);
    diagram.addMarker(3, 3, '3', GuitarDiagramsJS.Shape.Diamond);
    diagram.addMarker(4, 4, '4');
    diagram.addMarker(5, 5, '5');
    diagram.addMarker(6, 4, '6');
    diagram.addMarker(3, 1);
    diagram.drawAllMarkers();

    return diagram;
} // end setupDiagram function
