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

        const c = document.getElementById(this.config.canvasID);
        const ctx = c.getContext("2d");

        // Fretboard
        ctx.fillStyle = this.#config.colorFretboard;
        ctx.fillRect(0,0,width,height);

        // Nut
        ctx.fillStyle = this.#config.colorNut;
        ctx.strokeStyle = this.#config.colorNutOutline;
        ctx.rect(0,0,width,10);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();

        // Fret 1
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart);
        ctx.lineTo(width, fretStart);
        ctx.strokeStyle = this.#config.colorFrets;
        ctx.stroke();

        // Fret 2
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart * 2);
        ctx.lineTo(width, fretStart * 2);
        ctx.strokeStyle = this.#config.colorFrets;
        ctx.stroke();

        // Fret 3
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart * 3);
        ctx.lineTo(width, fretStart * 3);
        ctx.strokeStyle = this.#config.colorFrets;
        ctx.stroke();

        // Fret 4
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart * 4);
        ctx.lineTo(width, fretStart * 4);
        ctx.strokeStyle = this.#config.colorFrets;
        ctx.stroke();


        ctx.beginPath();

        const stringTop = 0 + 10;
        const stringBottom = height;

        // String 6 (E)
        ctx.lineWidth = string6width;
        ctx.moveTo(string6X, stringTop);
        ctx.lineTo(string6X, stringBottom);
        ctx.strokeStyle = this.#config.colorStrings;
        ctx.stroke();

        // String 5 (A)
        ctx.lineWidth = string5width;
        ctx.moveTo(string5X, stringTop);
        ctx.lineTo(string5X, stringBottom);
        ctx.strokeStyle = this.#config.colorStrings;
        ctx.stroke();

        // String 4 (D)
        ctx.lineWidth = string4width;
        ctx.moveTo(string4X, stringTop);
        ctx.lineTo(string4X, stringBottom);
        ctx.strokeStyle = this.#config.colorStrings;
        ctx.stroke();

        // String 3 (G)
        ctx.lineWidth = string3width;
        ctx.moveTo(string3X, stringTop);
        ctx.lineTo(string3X, stringBottom);
        ctx.strokeStyle = this.#config.colorStrings;
        ctx.stroke();

        // String 2 (b)
        ctx.lineWidth = string2width;
        ctx.moveTo(string2X, stringTop);
        ctx.lineTo(string2X, stringBottom);
        ctx.strokeStyle = this.#config.colorStrings;
        ctx.stroke();

        // String 1 (e)
        ctx.lineWidth = string1width;
        ctx.moveTo(string1X, stringTop);
        ctx.lineTo(string1X, stringBottom);
        ctx.strokeStyle = this.#config.colorStrings;
        ctx.stroke();

        // Fret Markers
        if (this.#config.fretMarkersEnabled) {
            ctx.beginPath();
            let radius = 8;
            ctx.arc((width / 2), ((fretStart / 2) + (fretSpacing * 2)), radius, 0, 2 * Math.PI);
            ctx.arc((width / 2), ((fretStart / 2) + (fretSpacing * 4)), radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.#config.colorFretMarkers;
            ctx.fill();
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
