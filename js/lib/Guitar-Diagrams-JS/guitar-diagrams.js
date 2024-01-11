/**
 * @file Guitar Diagrams JS main class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams.js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

/**
 * Class representing primary Guitar Diagrams JS functionality.
 */
export class GuitarDiagramsJS {
    // ========== BEGIN private members
    // Colors
    #colorFretboard = '#795548';
    #colorNut = '#F2F3F4';
    #colorFrets = '#808B96';
    #colorStrings = '#CFD8DC';
    #colorNutOutline = '#000000';
    // ========== END private members

    // ========== BEGIN static members
    // ========== END static members

    // ========== BEGIN constructors
    /**
     * Create a GuitarDiagramsJS object instance.
     */
    constructor() {
    } // end default constructor
    // ========== END constructors

    // ========== BEGIN properties
    /**
     * Gets the HTML color code of the fretboard.
     * @return {string} The HTML color code of the fretboard.
     */
    get colorFretboard() {
        return this.#colorFretboard;
    } // end get colorFretboard property

    /**
     * Sets the HTML color code of the fretboard.
     * @param {string} paramColorFretboard - The HTML color code of the fretboard.
     */
    set colorFretboard(paramColorFretboard) {
        this.#colorFretboard = paramColorFretboard;
    } // end get colorFretboard property

    /**
     * Gets the HTML color code of the nut.
     * @return {string} The HTML color code of the nut.
     */
    get colorNut() {
        return this.#colorNut;
    } // end get colorNut property

    /**
     * Gets the HTML color code of the nut.
     * @param {string} paramColorNut - The HTML color code of the nut.
     */
    set colorNut(paramColorNut) {
        this.#colorNut = paramColorNut;
    } // end get colorNut property

    /**
     * Gets the HTML color code of the nut outline.
     * @return {string} The HTML color code of the nut outline.
     */
    get colorNutOutline() {
        return this.#colorNutOutline;
    } // end get colorNutOutline property

    /**
     * Gets the HTML color code of the nut outline.
     * @param {string} paramColorNutOutline - The HTML color code of the nut outline.
     */
    set colorNutOutline(paramColorNutOutline) {
        this.#colorNutOutline = paramColorNutOutline;
    } // end get colorNutOutline property

    /**
     * Gets the HTML color code of the frets.
     * @return {string} The HTML color code of the frets.
     */
    get colorFrets() {
        return this.#colorFrets;
    } // end get colorFrets property

    /**
     * Gets the HTML color code of the frets.
     * @param {string} paramColorFrets - The HTML color code of the frets.
     */
    set colorFrets(paramColorFrets) {
        this.#colorFrets = paramColorFrets;
    } // end get colorFrets property

    /**
     * Gets the HTML color code of the strings.
     * @return {string} The HTML color code of the strings.
     */
    get colorStrings() {
        return this.#colorStrings;
    } // end get colorStrings property

    /**
     * Gets the HTML color code of the strings.
     * @param {string} paramColorFrets - The HTML color code of the strings.
     */
    set colorStrings(paramColorStrings) {
        this.#colorStrings = paramColorStrings;
    } // end get colorStrings property
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

        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");

        // Fretboard
        ctx.fillStyle = this.colorFretboard;
        ctx.fillRect(0,0,width,height);

        // Nut
        ctx.fillStyle = this.colorNut;
        ctx.strokeStyle = this.colorNutOutline;
        ctx.rect(0,0,width,10);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();

        // Fret 1
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart);
        ctx.lineTo(width, fretStart);
        ctx.strokeStyle = this.colorFrets;
        ctx.stroke();

        // Fret 2
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart * 2);
        ctx.lineTo(width, fretStart * 2);
        ctx.strokeStyle = this.colorFrets;
        ctx.stroke();

        // Fret 3
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart * 3);
        ctx.lineTo(width, fretStart * 3);
        ctx.strokeStyle = this.colorFrets;
        ctx.stroke();

        // Fret 4
        ctx.lineWidth = fretThickness;
        ctx.moveTo(0, fretStart * 4);
        ctx.lineTo(width, fretStart * 4);
        ctx.strokeStyle = this.colorFrets;
        ctx.stroke();


        ctx.beginPath();

        const stringTop = 0 + 10;
        const stringBottom = height;

        // String 6 (E)
        ctx.lineWidth = string6width;
        ctx.moveTo(string6X, stringTop);
        ctx.lineTo(string6X, stringBottom);
        ctx.strokeStyle = this.colorStrings;
        ctx.stroke();

        // String 5 (A)
        ctx.lineWidth = string5width;
        ctx.moveTo(string5X, stringTop);
        ctx.lineTo(string5X, stringBottom);
        ctx.strokeStyle = this.colorStrings;
        ctx.stroke();

        // String 4 (D)
        ctx.lineWidth = string4width;
        ctx.moveTo(string4X, stringTop);
        ctx.lineTo(string4X, stringBottom);
        ctx.strokeStyle = this.colorStrings;
        ctx.stroke();

        // String 3 (G)
        ctx.lineWidth = string3width;
        ctx.moveTo(string3X, stringTop);
        ctx.lineTo(string3X, stringBottom);
        ctx.strokeStyle = this.colorStrings;
        ctx.stroke();

        // String 2 (b)
        ctx.lineWidth = string2width;
        ctx.moveTo(string2X, stringTop);
        ctx.lineTo(string2X, stringBottom);
        ctx.strokeStyle = this.colorStrings;
        ctx.stroke();

        // String 1 (e)
        ctx.lineWidth = string1width;
        ctx.moveTo(string1X, stringTop);
        ctx.lineTo(string1X, stringBottom);
        ctx.strokeStyle = this.colorStrings;
        ctx.stroke();
    } // end testNeck method
    // ========== END private methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJS class
