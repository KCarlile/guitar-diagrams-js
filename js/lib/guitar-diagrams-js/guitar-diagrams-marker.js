/**
 * @file Guitar Diagrams JS marker class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams-marker.js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

/**
 * Class representing a Guitar Diagrams JS marker.
 */
export class GuitarDiagramsJSMarker {
    // ========== BEGIN private members
    // ----- Position and scale
    #string;
    #fret;
    #shape;
    #scale = 1;

    // ----- Appearance
    #colorFill = '#000000';
    #colorStroke = '#DDDDDD';
    #colorFont = '#FFFFFF';
    #text = '';

    // ========== END private members

    // ========== BEGIN static members
    // ========== END static members

    // ========== BEGIN constructors
    /**
     * Create a GuitarDiagramsJSMarker object instance.
     */
    constructor() {
    } // end default constructor
    // ========== END constructors

    // ========== BEGIN properties
    // ----- Position and scale
    /**
     * Gets the string number of the marker.
     * @return {number} The string number.
     */
    get string() {
        return this.#string;
    } // end get string property

    /**
     * Sets the string number of the marker.
     * @param {number} paramString - The string number of the marker.
     */
    set string(paramString) {
        this.#string = paramString;
    } // end get string property

    /**
     * Gets the fret number of the marker.
     * @return {number} The fret number.
     */
    get fret() {
        return this.#fret;
    } // end get fret property

    /**
     * Gets the shape of the marker.
     * @return {string} The shape of the marker.
     */
    get shape() {
        return this.#shape;
    } // end get shape property

    /**
     * Sets the shape of the marker.
     * @param {string} paramShape - The shape of the marker.
     */
    set shape(paramShape) {
        this.#shape = paramShape;
    } // end get shape property

    /**
     * Sets the fret number of the marker.
     * @param {number} paramFret - The fret number of the marker.
     */
    set fret(paramFret) {
        this.#fret = paramFret;
    } // end get fret property

    /**
     * Gets the relative scale of the marker.
     * @return {number} The relative scale of the marker.
     */
    get scale() {
        return this.#scale;
    } // end get scale property

    /**
     * Sets the relative scale of the marker.
     * @param {number} paramScale - The relative scale of the marker.
     */
    set scale(paramScale) {
        this.#scale = paramScale;
    } // end get scale property

    // ----- Appearance
    /**
     * Gets the HTML color code for fill.
     * @return {string} The HTML color code for fill.
     */
    get colorFill() {
        return this.#colorFill;
    } // end get colorFill property

    /**
     * Sets the HTML color code for fill.
     * @param {string} paramColorFill - The HTML color code for fill.
     */
    set colorFill(paramColorFill) {
        this.#colorFill = paramColorFill;
    } // end get colorFill property

    /**
     * Gets the HTML color code for stroke.
     * @return {string} The HTML color code for stroke.
     */
    get colorStroke() {
        return this.#colorStroke;
    } // end get colorStroke property

    /**
     * Sets the HTML color code for stroke.
     * @param {string} paramColorStroke - The HTML color code for stroke.
     */
    set colorStroke(paramColorStroke) {
        this.#colorStroke = paramColorStroke;
    } // end get colorStroke property

    /**
     * Gets the HTML color code for font.
     * @return {string} The HTML color code for font.
     */
    get colorFont() {
        return this.#colorFont;
    } // end get colorFont property

    /**
     * Sets the HTML color code for font.
     * @param {string} paramColorFont - The HTML color code for font.
     */
    set colorFont(paramColorFont) {
        this.#colorFont = paramColorFont;
    } // end get colorFont property

    /**
     * Gets the text.
     * @return {string} The text.
     */
    get text() {
        return this.#text;
    } // end get text property

    /**
     * Sets the text.
     * @param {string} paramText - The text.
     */
    set text(paramText) {
        this.#text = paramText;
    } // end get text property

    // ========== END properties

    // ========== BEGIN private methods
    // ========== END private methods

    // ========== BEGIN public methods
    /**
     * Returns a string representation of the marker GuitarDiagramsJSMarker instance.
     * @returns {string} The string representation of the GuitarDiagramsJSMarker instance.
     */
    toString() {
        const newline = "\n";
        const indent = '    ';

        let toString = '[GuitarDiagramsJSMarker] {' + newline;
        toString += indent + 'text: ' + this.#text + ',' + newline;
        toString += indent + 'string: ' + this.#string + ',' + newline;
        toString += indent + 'fret: ' + this.#fret + ',' + newline;
        toString += '}';
        return toString;
    } // end toString method
    // ========== END public methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJSMarker class
