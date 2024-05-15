/**
 * @file main module.
 * @module js/main
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJS } from './lib/guitar-diagrams-js/guitar-diagrams.js';

let gdj1 = new GuitarDiagramsJS();
gdj1.config.canvasID = 'diagram1Canvas';
//gdj1.config.scaleFactor = .75;
//gdj1.config.fretStartingNumber = 3;
//gdj1.config.fretCount = 3;
gdj1.config.stringNamesEnabled = true;
console.log('Scale Factor: ' + gdj1.config.scaleFactor);
document.getElementById('diagram1').appendChild(gdj1.getCanvasElement());
gdj1 = setupDiagram(gdj1);

let gdj2 = new GuitarDiagramsJS();
gdj2.config.canvasID = 'diagram2Canvas';
gdj2.config.stringNamesEnabled = true;
gdj2.config.orientHorizontally = true;
//gdj2.config.fretStartingNumber = 1;
gdj2.config.fretCount = 3;
console.log('Orient horizontally: ' + gdj2.config.orientHorizontally);
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
