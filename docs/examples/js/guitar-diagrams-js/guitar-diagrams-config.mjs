/**
 * @file Guitar Diagrams JS config class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams-config.mjs
 * @link https://github.com/KCarlile/guitar-diagrams-js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

/**
 * Class representing the Guitar Diagrams JS configuration.
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
    #colorDiagramBackground = null;
    #colorLabel = '#000000';

    // Markers
    #markerStrokeWidth = 2;
    #markerFontSize = 16;

    // ----- Dimensions/Orientation
    #fretCount = 5;
    #scaleFactor = 1;
    #orientHorizontally = false;

    // ----- Features
    #fretMarkersEnabled = true;
    #fretStartingNumber = 0;
    #stringNamesEnabled = false;
    #stringNames = ['E','A','D','G','B','e'];
    #controlsEnabled = false;
    #downloadImageEnabled = false;
    #changeOrientationEnabled = false;

    // ========== END private members

    // ========== BEGIN static members
    // ========== END static members

    // ========== BEGIN constructors
    /**
     * Create a GuitarDiagramsJSConfig object instance.
     */
    constructor(paramCanvasID = null) {
        if (paramCanvasID != null) {
            this.#canvasID = paramCanvasID;
        } // end if test
    } // end default constructor
    // ========== END constructors

    // ========== BEGIN properties
    // ----- References
    /**
     * Gets the ID attribute of the canvas HTML element.
     * @return {string} The ID attribute of the canvas HTML element.
     */
    get canvasID() {
        return this.#canvasID;
    } // end get canvasID property

    /**
     * Sets the ID attribute of the canvas HTML element.
     * @param {string} paramCanvasID - The ID attribute of the canvas HTML element.
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
     * Sets the HTML color code of the nut.
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
     * Sets the HTML color code of the nut outline.
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

    /**
     * Gets the HTML color code of the diagram background.
     * @return {string} The HTML color code of the diagram background.
     */
    get colorDiagramBackground() {
        return this.#colorDiagramBackground;
    } // end get colorDiagramBackground property

    /**
     * Gets the HTML color code of the diagram background.
     * @param {string} paramColorDiagramBackground - The HTML color code of the diagram background.
     */
    set colorDiagramBackground(paramColorDiagramBackground) {
        if (paramColorDiagramBackground == '' || paramColorDiagramBackground == null) {
            paramColorDiagramBackground = 'transparent';
        } // end if test

        this.#colorDiagramBackground = paramColorDiagramBackground;
    } // end get colorDiagramBackground property

    /**
     * Gets HTML color code of the label text for string names and fret number.
     * @return {string} The HTML color code of the label text for string names and fret number.
     */
    get colorLabel() {
        return this.#colorLabel;
    } // end get colorLabel property

    /**
     * Gets the HTML color code of the label text for string names and fret number.
     * @param {string} paramColorLabel - The HTML color code of the label text for string names and fret number.
     */
    set colorLabel(paramColorLabel) {
        this.#colorLabel = paramColorLabel;
    } // end get colorLabel property

    // ----- Markers
    /**
     * Gets the marker's stroke width.
     * @return {number} The marker's stroke width.
     */
    get markerStrokeWidth() {
        return this.#markerStrokeWidth;
    } // end get markerStrokeWidth property

    /**
     * Gets the marker's stroke width.
     * @param {number} paramMarkerStrokeWidth - The marker's stroke width.
     */
    set markerStrokeWidth(paramMarkerStrokeWidth) {
        this.#markerStrokeWidth = paramMarkerStrokeWidth;
    } // end get markerStrokeWidth property

    /**
     * Gets the marker's font size.
     * @return {number} The marker's font size.
     */
    get markerFontSize() {
        return this.#markerFontSize;
    } // end get markerFontSize property

    /**
     * Gets the marker's font size.
     * @param {number} paramMarkerFontSize - The marker's font size.
     */
    set markerFontSize(paramMarkerFontSize) {
        this.#markerFontSize = paramMarkerFontSize;
    } // end get markerFontSize property

    // ----- Dimensions/Orientation
    /**
     * Gets the number of frets on the diagram.
     * @return {number} The number of frets on the diagram.
     */
    get fretCount() {
        return this.#fretCount;
    } // end get fretCount property

    /**
     * Sets the number of frets on the diagram.
     * @param {number} paramFretCount - The number of frets on the diagram.
     */
    set fretCount(paramFretCount) {
        this.#fretCount = paramFretCount;
    } // end get fretCount property

    /**
     * Gets the scale factor of the diagram.
     * @return {number} The scale factor of the diagram.
     */
    get scaleFactor() {
        return this.#scaleFactor;
    } // end get scaleFactor property

    /**
     * Sets the scale factor of the diagram.
     * @param {number} paramScaleFactor - The scale factor of the diagram.
     */
    set scaleFactor(paramScaleFactor) {
        this.#scaleFactor = paramScaleFactor;
    } // end get scaleFactor property

    /**
     * Gets the horizontal status of the diagram.
     * @return {boolean} The horizontal status of diagram.
     */
    get orientHorizontally() {
        return this.#orientHorizontally;
    } // end get orientHorizontally property

    /**
     * Sets the horizontal status of the diagram.
     * @param {boolean} paramOrientHorizontally - The horizontal status of diagram.
     */
    set orientHorizontally(paramOrientHorizontally) {
        this.#orientHorizontally = paramOrientHorizontally;
    } // end get orientHorizontally property

    // ----- Features
    /**
     * Gets the enabled status of fret markers.
     * @return {boolean} The enabled status of fret markers.
     */
    get fretMarkersEnabled() {
        return this.#fretMarkersEnabled;
    } // end get fretMarkersEnabled property

    /**
     * Sets the enabled status of fret markers.
     * @param {boolean} paramFretMarkersEnabled - The enabled status of fret markers.
     */
    set fretMarkersEnabled(paramFretMarkersEnabled) {
        this.#fretMarkersEnabled = paramFretMarkersEnabled;
    } // end get fretMarkersEnabled property

    /**
     * Gets the starting fret number.
     * @return {number} The starting fret number.
     */
    get fretStartingNumber() {
        return this.#fretStartingNumber;
    } // end get fretStartingNumber property

    /**
     * Sets the starting fret number.
     * @param {number} paramFretStartingNumber - The starting fret number.
     */
    set fretStartingNumber(paramFretStartingNumber) {
        this.#fretStartingNumber = paramFretStartingNumber;
    } // end get fretStartingNumber property

    /**
     * Gets the enabled status of string names.
     * @return {boolean} The enabled status of string names.
     */
    get stringNamesEnabled() {
        return this.#stringNamesEnabled;
    } // end get stringNamesEnabled property

    /**
     * Sets the enabled status of string names.
     * @param {boolean} paramStringNamesEnabled - The enabled status of string names.
     */
    set stringNamesEnabled(paramStringNamesEnabled) {
        this.#stringNamesEnabled = paramStringNamesEnabled;
    } // end get stringNamesEnabled property

    /**
     * Gets the array of string names.
     * @return {array} The array of string names.
     */
    get stringNames() {
        return this.#stringNames;
    } // end get stringNames property

    /**
     * Sets the array of string names.
     * @param {array} paramStringNames - The array of string names.
     */
    set stringNames(paramStringNames) {
        this.#stringNames = paramStringNames;
    } // end get stringNames property

    /**
     * Gets the enabled status of the controls.
     * @return {boolean} The enabled status of the controls.
     */
    get controlsEnabled() {
        return this.#controlsEnabled;
    } // end get controlsEnabled property

    /**
     * Sets the enabled status of the controls.
     * @param {boolean} paramControlsEnabled - The enabled status of the controls.
     */
    set controlsEnabled(paramControlsEnabled) {
        this.#controlsEnabled = paramControlsEnabled;
    } // end get controlsEnabled property

    /**
     * Gets the enabled status of the download image button.
     * @return {boolean} The enabled status of the download image button.
     */
    get downloadImageEnabled() {
        return this.#downloadImageEnabled;
    } // end get downloadImageEnabled property

    /**
     * Sets the enabled status of the download image button.
     * @param {boolean} paramDownloadImageEnabled - The enabled status of the download image button.
     */
    set downloadImageEnabled(paramDownloadImageEnabled) {
        this.#downloadImageEnabled = paramDownloadImageEnabled;
    } // end get downloadImageEnabled property

    /**
     * Gets the enabled status of the change orientation button.
     * @return {boolean} The enabled status of the change orientation button.
     */
    get changeOrientationEnabled() {
        return this.#changeOrientationEnabled;
    } // end get changeOrientationEnabled property

    /**
     * Sets the enabled status of the change orientation button.
     * @param {boolean} paramChangeOrientationEnabled - The enabled status of the change orientation button.
     */
    set changeOrientationEnabled(paramChangeOrientationEnabled) {
        this.#changeOrientationEnabled = paramChangeOrientationEnabled;
    } // end get changeOrientationEnabled property
    // ========== END properties

    // ========== BEGIN private methods
    // ========== END private methods

    // ========== BEGIN public methods
    /**
     * Enables control functionality and all available individual controls by setting their enabled status to true.
     */
    enableAllControls() {
        this.controlsEnabled = true;
        this.downloadImageEnabled = true;
        this.changeOrientationEnabled = true;
    } // end enableAllControls method
    // ========== END public methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJSConfig class
