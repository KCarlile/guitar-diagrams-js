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
    //static fretboardLength = 500;
    static nutThickness = 10;
    
    static stringBaseWidth = 3;
    static stringWidthFactor = .75;
    static stringIndent = 20;
    static stringSpacing = 30;

    static fretSpacing = 100;
    static fretThickness = 6;
    static fretMarkerRadius = 8;
    
    static markerRadius = 14;

    static stringNameFontSize = 20;
    static fretNumberFontSize = 24;

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

    /**
     * Enumeration for notation symbols.
     * @readonly
     * @enum {string}
     */
    static Symbols = {
        Flat: '♭',
        Sharp: '♯',
        Natural: '♮',
        DoubleFlat: '𝄫',
        DoubleSharp: '𝄪'
    } // end Symbols enumeration
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

        this.#canvas.setAttribute("width", "800");

        //let posXTranslate = 60;
        //let posYTranslate = 0;

        //let nutThickness = this.#scale(GuitarDiagramsJS.nutThickness);
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);

        if (this.#config.fretStartingNumber != 0) {
            //nutThickness = 0;
        } // end if test

        //this.#canvasContext.canvas.height = (this.#config.fretCount * fretSpacing) + nutThickness;
        //this.#canvasContext.canvas.width = 600;
    } // end initializeDrawing method

    /**
     * Draws the names of the strings.
     */
    #drawStringNames() {
        const canvas = this.#canvasContext;

        if (this.#config.stringNamesEnabled) {
            let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
            let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);
            let stringNameFontSize = this.#scale(GuitarDiagramsJS.stringNameFontSize);
            let fretNumberFontSize = this.#scale(GuitarDiagramsJS.fretNumberFontSize);
            let stringNamesIndent = this.#config.fretStartingNumber == 0 ? 0 : fretNumberFontSize;
            let posX;
            let posY;

            let stringNames = this.#config.stringNames;

            if (this.#config.orientHorizontally == true) {
                stringNames = stringNames.reverse();
            } // end if test

            for (const [key, value] of Object.entries(stringNames)) {
                if (this.#config.orientHorizontally == true) {
                    // horizontal
                    posX = (stringNameFontSize / 2);
                    posY = (stringIndent + (key * stringSpacing)) + stringNamesIndent;
                } // end if test
                else {
                    // vertical
                    posX = (stringIndent + (key * stringSpacing)) + stringNamesIndent;
                    posY = (stringNameFontSize / 2);
                } // end else test

                canvas.beginPath();
                canvas.fillStyle = '#000000';
                canvas.font = stringNameFontSize + 'px Arial';
                canvas.textAlign = 'center';
                canvas.textBaseline = 'middle';
                canvas.stroke();
                canvas.fillText(value, posX, posY);
                canvas.closePath();
            } // end for loop

            if (this.#config.orientHorizontally == true) {
                // horizontal
                canvas.translate(stringNameFontSize, 0);
            } // end if test
            else {
                // vertical
                canvas.translate(0, stringNameFontSize);
            } // end else test
        } // end if test
    } // end drawStringNames method

    /**
     * Draws the fret number if starting fret is > 0.
     */
    #drawFretNumber() {
        const canvas = this.#canvasContext;
        let fretNumberFontSize = this.#scale(GuitarDiagramsJS.fretNumberFontSize);

        if (this.#config.fretStartingNumber != 0) {
            canvas.beginPath();
            canvas.fillStyle = '#000000';
            canvas.font = fretNumberFontSize + 'px Arial';
            canvas.textAlign = 'right';
            canvas.textBaseline = 'middle';
            canvas.stroke();
            canvas.fillText(this.#config.fretStartingNumber, (fretNumberFontSize / 2), (fretNumberFontSize / 2));
            canvas.closePath();

            if (this.#config.orientHorizontally == true) {
                // horizontal
                canvas.translate(0, fretNumberFontSize);
            } // end if test
            else {
                // vertical
                canvas.translate(fretNumberFontSize, 0);
            } // end else test
        } // end if test
    } // end #drawFretNumber method

    /**
     * Draws the fretboard.
     */
    #drawFretboard() {
        const canvas = this.#canvasContext;
        //let fretboardWidth = this.#scale(GuitarDiagramsJS.fretboardWidth);
        let fretboardWidth = this.#scale(this.#getFretboardWidth());
        //let fretboardLength = this.#scale(this.#getFretboardLength());
        let fretboardLength = this.#scale(this.#getFretboardLength());

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [fretboardWidth, fretboardLength] = [fretboardLength, fretboardWidth];
        } // end if test
        
        canvas.beginPath();
        canvas.fillStyle = this.#config.colorFretboard;
        canvas.fillRect(0, 0, fretboardWidth, fretboardLength);
    } // end drawFretboard method

    /**
     * Draws the nut if the fret starting number is 0. Otherwise, it omits the nut and includes the fret number.
     */
    #drawNut() {
        const canvas = this.#canvasContext;
        let fretboardWidth = this.#getFretboardWidth();
        let nutThickness = this.#scale(GuitarDiagramsJS.nutThickness);

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [fretboardWidth, nutThickness] = [nutThickness, fretboardWidth];
        } // end if test

        if (this.#config.fretStartingNumber == 0) {
            // draw the nut
            canvas.beginPath();
            canvas.fillStyle = this.#config.colorNut;
            canvas.strokeStyle = this.#config.colorNutOutline;
            canvas.rect(0, 0, fretboardWidth, nutThickness);
            canvas.fill();
            canvas.stroke();
            canvas.closePath();
        } // end if test
    } // end drawNut method

    /**
     * Draws the fret markers.
     */
    #drawFretMarkers() {
        if (this.#config.fretMarkersEnabled) {
            if ((this.#config.fretStartingNumber != 0) && ((this.#config.fretStartingNumber % 2) == 0)) {
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
    } // end drawFretMarkers method

    /**
     * Draws the fret marker.
     * @param {number} paramFretNumber - The number of the fret being drawn. 
     */
    #drawFretMarker(paramFretNumber) {
        const canvas = this.#canvasContext;
        let fretboardWidth = this.#getFretboardWidth();
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let fretMarkerRadius = this.#scale(GuitarDiagramsJS.fretMarkerRadius);

        let posX = fretboardWidth / 2;
        let posY = (fretSpacing / 2) + (fretSpacing * paramFretNumber);

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [posX, posY] = [posY, posX];
        } // end if test

        canvas.beginPath();
        canvas.arc(posX, posY, fretMarkerRadius, 0, 2 * Math.PI);
        canvas.fillStyle = this.#config.colorFretMarkers;
        canvas.fill();
        canvas.closePath();
    } // end drawFretMarker method

    /**
     * Draws the frets.
     */
    #drawAllFrets() {
        if (this.#config.fretStartingNumber != 0) {
            this.#drawFret(0);
        } // end if test

        for (let i = 0; i <= this.#config.fretCount; i++) {
            if ((i == 0) && (this.#config.fretStartingNumber == 0)) {
                continue;
            } // end if test

            this.#drawFret(i);
        } // end for loop
    } // end drawAllFrets method

    /**
     * Draws an individual fret.
     * @param {number} paramFretNumber - The fret number to be drawn. 
     */
    #drawFret(paramFretNumber) {
        const canvas = this.#canvasContext;
        let fretThickness = this.#scale(GuitarDiagramsJS.fretThickness);
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let fretboardWidth = this.#getFretboardWidth();
        let posX = 0;
        let posY = (fretSpacing * paramFretNumber) - (fretThickness / 2);
        let fretWidth = fretboardWidth;
        let fretLength = fretThickness;

        if (posY < 0) {
            posY = 0;
        } // end if test

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [posX, posY] = [posY, posX];
            [fretWidth, fretLength] = [fretLength, fretWidth];
        } // end if test

        canvas.beginPath();
        canvas.fillStyle = this.#config.colorFrets;
        canvas.lineWidth = 0;
        canvas.rect(posX, posY, fretWidth, fretLength);
        canvas.fill();
        canvas.closePath();
    } // end drawFret method

    /**
     * Draws the strings.
     */
    #drawAllStrings() {
        for (let i = 1; i <= this.#config.stringNames.length; i++) {
            this.#drawString(i);
        } // end for loop
    } // end drawAllStrings method

    /**
     * Draws an individual string.
     * @param {number} paramStringNumber - The number of the string to draw. 
     */
    #drawString(paramStringNumber) {
        const canvas = this.#canvasContext;
        const stringCount = this.#config.stringNames.length;

        let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);
        let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
        let stringBaseWidth = this.#scale(GuitarDiagramsJS.stringBaseWidth);
        let stringWidthFactor = this.#scale(GuitarDiagramsJS.stringWidthFactor);
        let fretboardLength = this.#scale(this.#getFretboardLength());
        let fretboardWidth = this.#getFretboardWidth();

        let posX, posY, endX, endY = 0;

        // check orientation
        if (this.#config.orientHorizontally == true) {
            // horizontal
            posX = 0;
            posY = (fretboardWidth - stringIndent) - ((paramStringNumber - 1) * (stringSpacing)) - (stringBaseWidth / 2);
            endX = fretboardLength;
            endY = stringBaseWidth + ((stringCount - (paramStringNumber - 1)) * stringWidthFactor);
        } // end if test
        else {
            // vertical
            posX = stringIndent + ((paramStringNumber - 1) * (stringSpacing)) - (stringBaseWidth / 2);
            posY = 0;
            endX = stringBaseWidth + ((stringCount - (paramStringNumber - 1)) * stringWidthFactor);
            endY = fretboardLength;
        } // end else test

        canvas.beginPath();
        canvas.fillStyle = this.#config.colorStrings;
        canvas.strokeStyle = this.#config.colorStrings;

        canvas.moveTo(posX, posY);

        canvas.rect(posX, posY, endX, endY);
        canvas.fill();
        canvas.closePath();
    } // end drawString method

    /**
     * Draws the specified marker.
     * @param {object} paramMarker - The marker to be drown.
     */
    #drawMarker(paramMarker) {
        const canvas = this.#canvasContext;

        //let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);
        //let fretboardWidth = this.#getFretboardWidth();
        let stringCount = this.#config.stringNames.length;
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
        let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);
        let strokeWidth = this.#scale(2);

        let posX = stringIndent + ((stringCount - paramMarker.string) * stringSpacing);
        let posY = ((paramMarker.fret - 1) * fretSpacing) + (fretSpacing / 2);

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            posX = stringIndent + ((paramMarker.string - 1) * stringSpacing);
            [posX, posY] = [posY, posX];
        } // end if test

        let markerFontSize = this.#scale(16);

        // marker shape
        canvas.beginPath();
        canvas.fillStyle = paramMarker.colorFill
        canvas.strokeStyle = paramMarker.colorStroke;
        canvas.lineWidth = strokeWidth;

        if (paramMarker.shape == GuitarDiagramsJS.Shape.Square) {
            this.#drawMarkerSquare(posX, posY);
        } // end if test
        else if (paramMarker.shape == GuitarDiagramsJS.Shape.Triangle) {
            this.#drawMarkerTriangle(posX, posY);
        } // end else if test
        else if (paramMarker.shape == GuitarDiagramsJS.Shape.Diamond) {
            this.#drawMarkerDiamond(posX, posY);
        } // end else if test
        else {
            this.#drawMarkerCircle(posX, posY);
        } // end else test

        canvas.closePath();

        // marker text
        canvas.beginPath();
        canvas.fillStyle = paramMarker.colorFont;
        canvas.textAlign = 'center';
        canvas.textBaseline = 'middle';
        canvas.font = markerFontSize + 'px Arial';
        canvas.fillText(paramMarker.text, posX, posY + strokeWidth);
        canvas.fill();
        canvas.closePath();
    } // end drawMarker method

    /**
     * Draws a square marker at the X,Y location provided.
     * @param {*} paramPosX - The X coordinate for the position of the marker.
     * @param {*} paramPosY - The Y coordinate for the position of the marker.
     */
    #drawMarkerSquare(paramPosX, paramPosY) {
        const canvas = this.#canvasContext
        let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);
        canvas.fillRect((paramPosX - markerRadius), (paramPosY - markerRadius), (markerRadius * 2), (markerRadius * 2));
        canvas.strokeRect((paramPosX - markerRadius), (paramPosY - markerRadius), (markerRadius * 2), (markerRadius * 2));
    } // end drawMarkerSquare method

    /**
     * Draws a square circle at the X,Y location provided.
     * @param {*} paramPosX - The X coordinate for the position of the marker.
     * @param {*} paramPosY - The Y coordinate for the position of the marker.
     */
    #drawMarkerCircle(paramPosX, paramPosY) {
        const canvas = this.#canvasContext
        let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);
        canvas.lineWidth = this.#scale(2);
        canvas.arc(paramPosX, paramPosY, markerRadius, 0, 2 * Math.PI);
        canvas.fill();
        canvas.stroke();
    } // end drawMarkerCircle method

    /**
     * Draws a triangle marker at the X,Y location provided.
     * @param {*} paramPosX - The X coordinate for the position of the marker.
     * @param {*} paramPosY - The Y coordinate for the position of the marker.
     */
    #drawMarkerTriangle(paramPosX, paramPosY) {
        const canvas = this.#canvasContext
        let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);
        let triangleMarkerRadius = markerRadius * 1.25;
        let triangleMarkerHeight = (triangleMarkerRadius * 2) * (Math.sqrt(3)/2);

        canvas.moveTo(paramPosX, paramPosY - triangleMarkerRadius);
        canvas.lineTo((paramPosX + triangleMarkerRadius), (paramPosY - triangleMarkerRadius + triangleMarkerHeight));
        canvas.lineTo((paramPosX - triangleMarkerRadius), (paramPosY - triangleMarkerRadius + triangleMarkerHeight));
        canvas.lineTo(paramPosX, paramPosY - triangleMarkerRadius);
        canvas.fill();
        canvas.stroke();
    } // end drawMarkerTriangle method
    
    /**
     * Draws a diamond marker at the X,Y location provided.
     * @param {*} paramPosX - The X coordinate for the position of the marker.
     * @param {*} paramPosY - The Y coordinate for the position of the marker.
     */
    #drawMarkerDiamond(paramPosX, paramPosY) {
        const canvas = this.#canvasContext
        let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);
        let diamondMarkerRadius = markerRadius * 1.25;

        canvas.beginPath();
        canvas.moveTo(paramPosX, paramPosY - diamondMarkerRadius);
        canvas.lineTo((paramPosX + diamondMarkerRadius), paramPosY);
        canvas.lineTo(paramPosX, (paramPosY + diamondMarkerRadius));
        canvas.lineTo((paramPosX - diamondMarkerRadius), (paramPosY));
        canvas.lineTo(paramPosX, (paramPosY - diamondMarkerRadius));
        canvas.fill();
        canvas.stroke();
    } // end drawMarkerDiamond method

    /**
     * Gets the length of the fretboard.
     * @return {number} Length of the fretboard.
     */
    #getFretboardLength() {
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let fretLength = this.#scale(GuitarDiagramsJS.fretThickness);
        let fretboardLength = this.#scale(this.#config.fretCount * fretSpacing) + (fretLength / 2);

        return fretboardLength;
    } // end getFretboardLength method

    /**
     * Gets the length of the fretboard.
     * @return {number} Length of the fretboard.
     */
    #getFretboardWidth() {
        let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
        let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);
        let fretboardWidth = (this.#config.stringNames.length * stringSpacing) + (stringIndent / 2);

        return fretboardWidth;
    } // end getFretboardLength method

    /**
     * Scales any provided numeric value for resizing the drawing based on the scaling factor.
     * @param {number} paramVector - The numeric variable to be scaled.  
     * @return {number} Scaled version of the numeric value provided.
     */
    #scale(paramVector) {
        return this.#config.scaleFactor * paramVector;
    } // end scale method
    // ========== END private methods

    // ========== BEGIN public methods
    /**
     * Draws the neck.
     */
    drawNeck() {
        this.#initializeDrawing();  // this is a mess
        this.#drawStringNames();    // working
        this.#drawFretNumber();     // working
        //this.#setCanvasSize();
        this.#drawFretboard();      // working
        this.#drawNut();            // working
        this.#drawFretMarkers();
        this.#drawAllFrets();
        this.#drawAllStrings();
    } // end drawNeck method

    addMarker(paramString, paramFret, paramText = '', paramShape = null) {
        let stringCount = this.#config.stringNames.length;
        let minFret = 0;
        let maxFret = this.#config.fretCount;

        if ((paramString < 1) || (paramString > stringCount) || (paramFret < minFret) || (paramFret > maxFret)) {
            console.log('[State] GuitarDiagramsJS.addMarker(): ' + '{ minFret: ' + minFret +
                ' | maxFret: ' + maxFret + ' }');
            console.log('[Error] GuitarDiagramsJS.addMarker(): Fret marker could not be placed on fretboard.' +
                ' { paramString: ' + paramString +
                ' | paramFret: ' + paramFret +
                ' | paramText: ' + paramText +
                ' | paramShape: ' + paramShape + ' }');
        } // end if test
        else {
            let marker = new GuitarDiagramsJSMarker();
            marker.string = paramString;
            marker.fret = paramFret;
            marker.text = paramText;
            marker.shape = paramShape == null ? GuitarDiagramsJS.Shape.Circle : paramShape;
            this.#markers.push(marker);
        } // end else test
    } // end addMarker method

    listAllMarkers() {
        this.#markers.forEach ((marker) => {
            console.log('Marker text: ' + marker);
        }); // end foreach loop
    } // end listAllMarkers method

    drawAllMarkers() {
        const self = this;
        this.#markers.forEach(marker => {
            this.#drawMarker(marker);
        }); // end forEach loop
    } // end drawAllMarkers method

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








    #setCanvasSize() {
        let nutThickness = this.#scale(GuitarDiagramsJS.nutThickness);
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);

        if (this.#config.fretStartingNumber != 0) {
            //nutThickness = 0;
        } // end if test

        //this.#canvasContext.canvas.height = (this.#config.fretCount * fretSpacing) + nutThickness;
        //this.#canvasContext.canvas.width = 600;
    } // end setCanvasSize method
} // end GuitarDiagramsJS class
