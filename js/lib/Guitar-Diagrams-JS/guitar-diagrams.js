/**
 * @file Guitar Diagrams JS main class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams.js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJSConfig } from './guitar-diagrams-config.js';
import { GuitarDiagramsJSMarker } from './guitar-diagrams-marker.js';

/**
 * Class representing primary Guitar Diagrams JS functionality.
 */
export class GuitarDiagramsJS {
    // ========== BEGIN private members
    // ----- References
    #config;
    #markers = Array();

    // ----- Local
    #canvas;
    #canvasContext;
    // ========== END private members

    // ========== BEGIN static members
    static stringSpacing = 30;
    static fretboardPadding = 20;
    static fretboardWidth = (GuitarDiagramsJS.fretboardPadding * 2) + (GuitarDiagramsJS.stringSpacing * 5);
    static fretboardHeight = 500;
    static nutHeight = 10;
    
    static stringBaseWidth = 3;
    static stringWidthFactor = .75;
    static stringIndent = 20;
    static stringSpacing = 30;

    static fretStart = 100;
    static fretSpacing = 100;
    static fretThickness = 6;
    static fretMarkerRadius = 8;
    
    static markerRadius = 14;

    /**
     * Enumeration for marker shapes.
     * @readonly
     * @enum {string}
     */
    static Shape = {
        Circle: 'circle',
        Square: 'square',
        Triangle: 'triangle',
        Diamond: 'diamond'
    }; // end Shape enumeration
    // ========== END static members

    // ========== BEGIN constructors
    /**
     * Create a GuitarDiagramsJS object instance.
     */
    constructor(paramCanvasID = null) {
        this.#config = new GuitarDiagramsJSConfig(paramCanvasID);
    } // end default constructor
    // ========== END constructors

    // ========== BEGIN properties
    // ----- References
    /**
     * Gets the Guitar Diagrams JS Config object.
     * @return {object} The Guitar Diagrams JS Config object.
     */
    get config() {
        return this.#config;
    } // end get config property

    /**
     * Sets the Guitar Diagrams JS Config object.
     * @param {string} paramConfig - The Guitar Diagrams JS Config object.
     */
    set config(paramConfig) {
        this.#config = paramConfig;
    } // end get config property
    // ========== END properties

    // ========== BEGIN private methods
    /**
     * Initializes the canvas and canvas context variables.
     */
    #initializeDrawing() {
        this.#canvas = document.getElementById(this.#config.canvasID);
        this.#canvasContext = this.#canvas.getContext('2d');

        // Translations
        if (this.#config.fretStartingNumber != 0) {
            this.#canvasContext.translate(60,0);
        } // end if test
    } // end initializeDrawing method

    /**
     * Draws the fretboard and fret markers.
     */
    #drawFretboard() {
        let fretboardWidth = this.#scale(GuitarDiagramsJS.fretboardWidth);
        let fretboardHeight = this.#scale(GuitarDiagramsJS.fretboardHeight);

        this.#canvasContext.beginPath();
        this.#canvasContext.fillStyle = this.#config.colorFretboard;
        this.#canvasContext.fillRect(0, 0, fretboardWidth, fretboardHeight);
        
        // fret markers
        if (this.#config.fretMarkersEnabled) {
            if ((this.#config.fretStartingNumber != 0) && (this.#config.fretStartingNumber % 2 == 0)) {
                this.#drawFretMarker(1);
                this.#drawFretMarker(3);
            } // end else test
            else {
                if (this.#config.fretStartingNumber != 0) {
                    this.#drawFretMarker(0);
                } // end if test
                
                this.#drawFretMarker(2);
                this.#drawFretMarker(4);
            } // end else test
        } // end if test
    } // end drawFretboard method

    /**
     * Draws the fret marker.
     * @param {number} paramFretNumber - The number of the fret being drawn. 
     */
    #drawFretMarker(paramFretNumber) {
        let fretboardWidth = this.#scale(GuitarDiagramsJS.fretboardWidth);
        let fretStart = this.#scale(GuitarDiagramsJS.fretStart);
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let fretMarkerRadius = this.#scale(GuitarDiagramsJS.fretMarkerRadius);

        this.#canvasContext.beginPath();
        this.#canvasContext.arc((fretboardWidth / 2),
            ((fretStart / 2) + (fretSpacing * paramFretNumber)),
            fretMarkerRadius, 0, 2 * Math.PI);
        this.#canvasContext.fillStyle = this.#config.colorFretMarkers;
        this.#canvasContext.fill();
        this.#canvasContext.closePath();
    } // end drawFretMarker method

    /**
     * Draws the nut if the fret starting number is 0. Otherwise, it omits the nut and includes the fret number.
     */
    #drawNut() {
        let fretboardWidth = this.#scale(GuitarDiagramsJS.fretboardWidth);
        let nutHeight = this.#scale(GuitarDiagramsJS.nutHeight);

        this.#canvasContext.beginPath();

        if (this.#config.fretStartingNumber == 0) {
            this.#canvasContext.fillStyle = this.#config.colorNut;
            this.#canvasContext.strokeStyle = this.#config.colorNutOutline;
            this.#canvasContext.rect(0, 0, fretboardWidth, nutHeight);
            this.#canvasContext.fill();
            this.#canvasContext.stroke();
            // move down the height of the nut
            this.#canvasContext.translate(0, nutHeight);
        } // end if test
        else {
            this.#canvasContext.fillStyle = '#000000';
            this.#canvasContext.font = '40px Arial';
            this.#canvasContext.fillText(this.#config.fretStartingNumber, -60, 40);
        } // end else test

        this.#canvasContext.closePath();
    } // end drawNut method

    /**
     * Draws the frets.
     */
    #drawAllFrets() {
        this.#drawFret(1);
        this.#drawFret(2);
        this.#drawFret(3);
        this.#drawFret(4);
    } // end drawAllFrets method

    /**
     * Draws an individual fret.
     * @param {number} paramFretNumber - The fret number to be drawn. 
     */
    #drawFret(paramFretNumber) {
        let fretThickness = this.#scale(GuitarDiagramsJS.fretThickness);
        let fretStart = this.#scale(GuitarDiagramsJS.fretStart);
        let fretboardWidth = this.#scale(GuitarDiagramsJS.fretboardWidth);

        this.#canvasContext.beginPath();
        this.#canvasContext.lineWidth = fretThickness;
        this.#canvasContext.moveTo(0, fretStart * paramFretNumber);
        this.#canvasContext.lineTo(fretboardWidth, (fretStart * paramFretNumber));
        this.#canvasContext.strokeStyle = this.#config.colorFrets;
        this.#canvasContext.stroke();
        this.#canvasContext.closePath();
    } // end drawFret method

    /**
     * Draws the strings.
     */
    #drawAllStrings() {
        this.#drawString(1);
        this.#drawString(2);
        this.#drawString(3);
        this.#drawString(4);
        this.#drawString(5);
        this.#drawString(6);
    } // end drawAllStrings method

    /**
     * Draws an individual string.
     * @param {number} paramStringNumber - The number of the string to draw. 
     */
    #drawString(paramStringNumber) {
        const maxStrings = 6;

        let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);
        let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
        let stringBaseWidth = this.#scale(GuitarDiagramsJS.stringBaseWidth);
        let stringWidthFactor = this.#scale(GuitarDiagramsJS.stringWidthFactor);
        let fretboardHeight = this.#scale(GuitarDiagramsJS.fretboardHeight);
        let nutHeight = (this.#config.fretStartingNumber > 0) ? 0 : this.#scale(GuitarDiagramsJS.nutHeight);

        // string location in X plane
        let stringXPos = stringIndent + ((paramStringNumber - 1) * (stringSpacing));

        // string width
        let stringWidth = stringBaseWidth + ((maxStrings - (paramStringNumber - 1)) * stringWidthFactor);

        this.#canvasContext.beginPath();
        this.#canvasContext.lineWidth = stringWidth;
        this.#canvasContext.moveTo(stringXPos, 0);
        this.#canvasContext.lineTo(stringXPos, fretboardHeight - nutHeight);
        this.#canvasContext.strokeStyle = this.#config.colorStrings;
        this.#canvasContext.stroke();
        this.#canvasContext.closePath();
    } // end drawString method

    /**
     * Scales any number for resizing the drawing based on the provided scaling factor.
     * @param {number} paramScalingFactor - The scaling factor as a decimal (e.g., .5 or 1.5) 
     * @returns 
     */
    #scale(paramScalingFactor) {
        return this.#config.scaleFactor * paramScalingFactor;
    } // end scale method

    /*
    #rotate90CCW() {
        let canvasElement = document.getElementById(this.#config.canvasID);
        canvasElement.style = 'transform: rotate(-90deg);';
    } // end rotate90CCW method
    */
    // ========== END private methods

    // ========== BEGIN public methods
    /**
     * Draws the neck.
     */
    drawNeck() {
        this.#initializeDrawing();
        this.#drawFretboard();
        this.#drawNut();
        this.#drawAllFrets();
        this.#drawAllStrings();
    } // end drawNeck method

    addMarker(paramString, paramFret, paramText = '', paramShape = null) {
        let marker = new GuitarDiagramsJSMarker();
        marker.string = paramString;
        marker.fret = paramFret;
        marker.text = paramText;
        marker.shape = paramShape == null ? GuitarDiagramsJS.Shape.Circle : paramShape;
        this.#markers.push(marker);
    } // end addMarker method

    listAllMarkers() {
        this.#markers.forEach ((marker) => {
            console.log('Marker text: ' + marker);
        });
    } // end listAllMarkers method

    drawAllMarkers() {
        const self = this;
        this.#markers.forEach ((marker) => {
            this.#drawMarker(marker);
        });
    } // end drawAllMarkers method

    #drawMarker(marker) {
        const maxStrings = 6;

        let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);
        let fretStart = this.#scale(GuitarDiagramsJS.fretStart);
        let fretboardWidth = this.#scale(GuitarDiagramsJS.fretboardWidth);
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
        let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);

        let posX = stringIndent + ((maxStrings - marker.string) * stringSpacing);
        let posY = ((marker.fret - 1) * fretSpacing) + (fretSpacing / 2);

        let markerFontSize = this.#scale(16);

        // marker shape
        this.#canvasContext.beginPath();
        this.#canvasContext.fillStyle = marker.colorFill
        this.#canvasContext.strokeStyle = marker.colorStroke;

        
        if (marker.shape == GuitarDiagramsJS.Shape.Square) {
            this.#canvasContext.lineWidth = this.#scale(2);
            this.#canvasContext.fillRect((posX - markerRadius), (posY - markerRadius), (markerRadius * 2), (markerRadius * 2));
            this.#canvasContext.strokeRect((posX - markerRadius), (posY - markerRadius), (markerRadius * 2), (markerRadius * 2));
        } // end if test
        else if (marker.shape == GuitarDiagramsJS.Shape.Triangle) {
            let triangleMarkerRadius = markerRadius * 1.25;
            let triangleMarkerHeight = (triangleMarkerRadius * 2) * (Math.sqrt(3)/2);

            this.#canvasContext.lineWidth = this.#scale(2);
            this.#canvasContext.beginPath();
            this.#canvasContext.moveTo(posX, posY - triangleMarkerRadius);
            this.#canvasContext.lineTo((posX + triangleMarkerRadius), (posY - triangleMarkerRadius + triangleMarkerHeight));
            this.#canvasContext.lineTo((posX - triangleMarkerRadius), (posY - triangleMarkerRadius + triangleMarkerHeight));
            this.#canvasContext.lineTo(posX, posY - triangleMarkerRadius);
            this.#canvasContext.fill();
            this.#canvasContext.stroke();
            this.#canvasContext.closePath();
        } // end else if test
        else if (marker.shape == GuitarDiagramsJS.Shape.Diamond) {
            let diamondMarkerRadius = markerRadius * 1.25;

            this.#canvasContext.lineWidth = this.#scale(2);
            this.#canvasContext.beginPath();
            this.#canvasContext.moveTo(posX, posY - diamondMarkerRadius);
            this.#canvasContext.lineTo((posX + diamondMarkerRadius), posY);
            this.#canvasContext.lineTo(posX, (posY + diamondMarkerRadius));
            this.#canvasContext.lineTo((posX - diamondMarkerRadius), (posY));
            this.#canvasContext.lineTo(posX, (posY - diamondMarkerRadius));
            this.#canvasContext.fill();
            this.#canvasContext.stroke();
            this.#canvasContext.closePath();
        } // end else if test
        else {
            this.#canvasContext.lineWidth = this.#scale(4);
            this.#canvasContext.arc(posX, posY, markerRadius, 0, 2 * Math.PI);
            this.#canvasContext.stroke();
        } // end else test
        this.#canvasContext.fill();

        // marker text
        this.#canvasContext.beginPath();
        this.#canvasContext.fillStyle = marker.colorFont;
        this.#canvasContext.textAlign = 'center';
        this.#canvasContext.textBaseline = 'middle';
        this.#canvasContext.font = markerFontSize + 'px Arial';
        this.#canvasContext.fillText(marker.text, posX, posY + this.#scale(2));
        this.#canvasContext.fill();
        this.#canvasContext.closePath();
    } // end drawMarker method

    /**
     * Returns a canvas element to be added to the HTML page for use by Guitar Diagrams JS.
     * @return {Element} The generated canvas element.
     */
    getCanvasElement() {
        let canvasElement = document.createElement('canvas');
        canvasElement.id = this.#config.canvasID;
        canvasElement.width = 300;
        canvasElement.height = 600;

        return canvasElement;
    } // end getCanvasElement method
    // ========== END public methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJS class
