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
gdj.testNeck();

console.log('Fretboard color: ' + gdj.colorFretboard);
console.log('Frets color: ' + gdj.colorFrets);
console.log('Nut color: ' + gdj.colorNut);
console.log('Strings color: ' + gdj.colorStrings);