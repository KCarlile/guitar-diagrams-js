/**
 * @file Guitar Diagrams JS config class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams-config.js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

/**
 * Class representing primary Guitar Diagrams JS configuration.
 */
export class GuitarDiagramsJSConfig {
    // ========== BEGIN private members
    // ----- References
    #canvasID = 'gdjCanvas';

    // ----- Colors
    #colorFretboard = '#795548';
    #colorNut = '#F2F3F4';
    #colorFrets = '#808B96';
    #colorStrings = '#CFD8DC';
    #colorNutOutline = '#000000';
    #colorFretMarkers = '#FFFFFF';

    // ----- Dimensions

    // ----- Features
    #fretMarkersEnabled = true;
    // ========== END private members

    // ========== BEGIN static members
    // ========== END static members

    // ========== BEGIN constructors
    /**
     * Create a GuitarDiagramsJS object instance.
     */
    constructor(paramCanvasID = null) {
        if (paramCanvasID != null) {
            this.#canvasID = paramCanvasID;
        } // end if test

        console.log('Canvas ID: ' + this.#canvasID);
    } // end default constructor
    // ========== END constructors

    // ========== BEGIN properties
    // ----- References
    /**
     * Gets the ID attribute of the canvas HTML tag.
     * @return {string} The ID attribute of the canvas HTML tag.
     */
    get canvasID() {
        return this.#canvasID;
    } // end get canvasID property

    /**
     * Sets the ID attribute of the canvas HTML tag.
     * @param {string} paramColorFretboard - The ID attribute of the canvas HTML tag.
     */
    set canvasID(paramCanvasID) {
        this.#canvasID = paramCanvasID;
    } // end get canvasID property

    // ----- Colors
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

    /**
     * Gets the HTML color code of the fret markers.
     * @return {string} The HTML color code of the fret markers.
     */
    get colorFretMarkers() {
        return this.#colorFretMarkers;
    } // end get colorFretMarkers property

    /**
     * Gets the HTML color code of the fret markers.
     * @param {string} paramColorFretMarkers - The HTML color code of the fret markers.
     */
    set colorFretMarkers(paramColorFretMarkers) {
        this.#colorFretMarkers = paramColorFretMarkers;
    } // end get colorFretMarkers property


    // ----- Features
    /**
     * Gets the enabled status of fret markers.
     * @return {string} The enabled status of fret markers.
     */
    get fretMarkersEnabled() {
        return this.#fretMarkersEnabled;
    } // end get fretMarkersEnabled property

    /**
     * Gets the enabled status of fret markers.
     * @param {string} paramFretMarkersEnabled - The enabled status of fret markers.
     */
    set fretMarkersEnabled(paramFretMarkersEnabled) {
        this.#fretMarkersEnabled = paramFretMarkersEnabled;
    } // end get fretMarkersEnabled property
    // ========== END properties

    // ========== BEGIN private methods
    // ========== END private methods

    // ========== BEGIN public methods
    // ========== END public methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJS class
