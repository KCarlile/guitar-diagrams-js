/**
 * @file Guitar Diagrams JS main class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams.js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJSConfig } from './guitar-diagrams-config.js';

/**
 * Class representing primary Guitar Diagrams JS functionality.
 */
export class GuitarDiagramsJS {
    // ========== BEGIN private members
    // ----- References
    #config;

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
    } // end initializeDrawing method

    /**
     * Draws the fretboard and fret markers.
     */
    #drawFretboard() {
        this.#canvasContext.beginPath();
        this.#canvasContext.fillStyle = this.#config.colorFretboard;
        this.#canvasContext.fillRect(0, 0, this.#scale(GuitarDiagramsJS.fretboardWidth), this.#scale(GuitarDiagramsJS.fretboardHeight));
        
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
        this.#canvasContext.beginPath();
        this.#canvasContext.arc((this.#scale(GuitarDiagramsJS.fretboardWidth) / 2),
            ((this.#scale(GuitarDiagramsJS.fretStart) / 2) + (this.#scale(GuitarDiagramsJS.fretSpacing) * paramFretNumber)),
            this.#scale(GuitarDiagramsJS.fretMarkerRadius), 0, 2 * Math.PI);
        this.#canvasContext.fillStyle = this.#config.colorFretMarkers;
        this.#canvasContext.fill();
    } // end drawFretMarker method

    /**
     * Draws the nut if the fret starting number is 0. Otherwise, it omits the nut and includes the fret number.
     */
    #drawNut() {
        this.#canvasContext.beginPath();
        if (this.#config.fretStartingNumber == 0) {
            this.#canvasContext.fillStyle = this.#config.colorNut;
            this.#canvasContext.strokeStyle = this.#config.colorNutOutline;
            this.#canvasContext.rect(0, 0, this.#scale(GuitarDiagramsJS.fretboardWidth), this.#scale(GuitarDiagramsJS.nutHeight));
            this.#canvasContext.fill();
            this.#canvasContext.stroke();
            // move down the height of the nut
            this.#canvasContext.translate(0, this.#scale(GuitarDiagramsJS.nutHeight));
        } // end if test
        else {
            this.#canvasContext.fillStyle = '#000000';
            this.#canvasContext.font = '40px Arial';
            this.#canvasContext.fillText(this.#config.fretStartingNumber, -40, 40);
        } // end else test
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
        this.#canvasContext.beginPath();
        this.#canvasContext.lineWidth = this.#scale(GuitarDiagramsJS.fretThickness);
        this.#canvasContext.moveTo(0, this.#scale(GuitarDiagramsJS.fretStart) * paramFretNumber);
        this.#canvasContext.lineTo(this.#scale(GuitarDiagramsJS.fretboardWidth), this.#scale(GuitarDiagramsJS.fretStart) * paramFretNumber);
        this.#canvasContext.strokeStyle = this.#config.colorFrets;
        this.#canvasContext.stroke();
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
        // string location in X plane
        let stringXPos = this.#scale(GuitarDiagramsJS.stringIndent) + ((paramStringNumber - 1) * (this.#scale(GuitarDiagramsJS.stringSpacing)));

        // string width
        let stringWidth = this.#scale(GuitarDiagramsJS.stringBaseWidth) + ((maxStrings - (paramStringNumber - 1)) * this.#scale(GuitarDiagramsJS.stringWidthFactor));

        this.#canvasContext.beginPath();
        this.#canvasContext.lineWidth = stringWidth;
        this.#canvasContext.moveTo(stringXPos, 0);
        this.#canvasContext.lineTo(stringXPos, this.#scale(GuitarDiagramsJS.fretboardHeight - GuitarDiagramsJS.nutHeight));
        this.#canvasContext.strokeStyle = this.#config.colorStrings;
        this.#canvasContext.stroke();
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
