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
    // ========== END private members

    // ========== BEGIN static members
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
    #rotate90CCW() {
        let canvasElement = document.getElementById(this.#config.canvasID);
        canvasElement.style = 'transform: rotate(-90deg);';
    } // end rotate90CCW method
    // ========== END private methods

    // ========== BEGIN public methods
    /**
     * Tests drawing
     */
    testNeck() {
        const stringWidthFactor = .75;
        const stringIndent = 20;
        const stringSpacing = 30;

        let string6X = stringIndent;
        let string5X = string6X + stringSpacing;
        let string4X = string5X + stringSpacing;
        let string3X = string4X + stringSpacing;
        let string2X = string3X + stringSpacing;
        let string1X = string2X + stringSpacing;

        const string1width = 3;
        const string2width = string1width + stringWidthFactor;
        const string3width = string2width + stringWidthFactor;
        const string4width = string3width + stringWidthFactor;
        const string5width = string4width + stringWidthFactor;
        const string6width = string5width + stringWidthFactor;

        const width = stringIndent + (stringSpacing * 5) + stringIndent;
        const height = 500;

        const fretStart = 100;
        const fretSpacing = 100;
        const fretThickness = 6;

        const canvas = document.getElementById(this.config.canvasID);
        let canvasContext = canvas.getContext("2d");

        // Translations
        if (this.#config.fretStartingNumber != 0) {
            canvasContext.translate(40,0);
        } // end if test

        // Fretboard
        canvasContext.fillStyle = this.#config.colorFretboard;
        canvasContext.fillRect(0,0,width,height);

        // Nut

        if (this.#config.fretStartingNumber == 0) {
            canvasContext.fillStyle = this.#config.colorNut;
            canvasContext.strokeStyle = this.#config.colorNutOutline;
            canvasContext.rect(0,0,width,10);
            canvasContext.fill();
            canvasContext.stroke();
            // move down the height of the nut
            canvasContext.translate(0,10);
        } // end if test
        else {
            canvasContext.fillStyle = '#000000';
            canvasContext.font = '40px Arial';
            canvasContext.fillText(this.#config.fretStartingNumber, -40, 40);
        } // end else test

        canvasContext.beginPath();

        // Fret 1
        canvasContext.lineWidth = fretThickness;
        canvasContext.moveTo(0, fretStart);
        canvasContext.lineTo(width, fretStart);
        canvasContext.strokeStyle = this.#config.colorFrets;
        canvasContext.stroke();

        // Fret 2
        canvasContext.lineWidth = fretThickness;
        canvasContext.moveTo(0, fretStart * 2);
        canvasContext.lineTo(width, fretStart * 2);
        canvasContext.strokeStyle = this.#config.colorFrets;
        canvasContext.stroke();

        // Fret 3
        canvasContext.lineWidth = fretThickness;
        canvasContext.moveTo(0, fretStart * 3);
        canvasContext.lineTo(width, fretStart * 3);
        canvasContext.strokeStyle = this.#config.colorFrets;
        canvasContext.stroke();

        // Fret 4
        canvasContext.lineWidth = fretThickness;
        canvasContext.moveTo(0, fretStart * 4);
        canvasContext.lineTo(width, fretStart * 4);
        canvasContext.strokeStyle = this.#config.colorFrets;
        canvasContext.stroke();


        canvasContext.beginPath();

        const stringTop = 0;
        const stringBottom = height;

        // String 6 (E)
        canvasContext.lineWidth = string6width;
        canvasContext.moveTo(string6X, stringTop);
        canvasContext.lineTo(string6X, stringBottom);
        canvasContext.strokeStyle = this.#config.colorStrings;
        canvasContext.stroke();

        // String 5 (A)
        canvasContext.lineWidth = string5width;
        canvasContext.moveTo(string5X, stringTop);
        canvasContext.lineTo(string5X, stringBottom);
        canvasContext.strokeStyle = this.#config.colorStrings;
        canvasContext.stroke();

        // String 4 (D)
        canvasContext.lineWidth = string4width;
        canvasContext.moveTo(string4X, stringTop);
        canvasContext.lineTo(string4X, stringBottom);
        canvasContext.strokeStyle = this.#config.colorStrings;
        canvasContext.stroke();

        // String 3 (G)
        canvasContext.lineWidth = string3width;
        canvasContext.moveTo(string3X, stringTop);
        canvasContext.lineTo(string3X, stringBottom);
        canvasContext.strokeStyle = this.#config.colorStrings;
        canvasContext.stroke();

        // String 2 (b)
        canvasContext.lineWidth = string2width;
        canvasContext.moveTo(string2X, stringTop);
        canvasContext.lineTo(string2X, stringBottom);
        canvasContext.strokeStyle = this.#config.colorStrings;
        canvasContext.stroke();

        // String 1 (e)
        canvasContext.lineWidth = string1width;
        canvasContext.moveTo(string1X, stringTop);
        canvasContext.lineTo(string1X, stringBottom);
        canvasContext.strokeStyle = this.#config.colorStrings;
        canvasContext.stroke();

        // Fret Markers
        if (this.#config.fretMarkersEnabled) {
            canvasContext.beginPath();
            let radius = 8;

            if ((this.#config.fretStartingNumber != 0) && (this.#config.fretStartingNumber % 2 == 0)) {
                canvasContext.arc((width / 2), ((fretStart / 2) + (fretSpacing * 1)), radius, 0, 2 * Math.PI);
                canvasContext.arc((width / 2), ((fretStart / 2) + (fretSpacing * 3)), radius, 0, 2 * Math.PI);
            } // end else test
            else {
                if (this.#config.fretStartingNumber != 0) {
                    canvasContext.arc((width / 2), ((fretStart / 2) + (fretSpacing * 0)), radius, 0, 2 * Math.PI);
                } // end if test
                
                canvasContext.arc((width / 2), ((fretStart / 2) + (fretSpacing * 2)), radius, 0, 2 * Math.PI);
                canvasContext.arc((width / 2), ((fretStart / 2) + (fretSpacing * 4)), radius, 0, 2 * Math.PI);
            } // end else test
            
            canvasContext.fillStyle = this.#config.colorFretMarkers;
            canvasContext.fill();
        } // end if test

        if (this.config.orientHorizontally) {
            this.#rotate90CCW();
        } // end if test
    } // end testNeck method

    /**
     * Returns a canvas element to be added to the HTML page for use by Guitar Diagrams JS.
     * @return {Element} The generated canvas element.
     */
    getCanvasElement() {
        let canvasElement = document.createElement('canvas');
        canvasElement.id = this.#config.canvasID;
        canvasElement.width = 300;
        canvasElement.height = 500;

        return canvasElement;
    } // end getCanvasElement method
    // ========== END public methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJS class
