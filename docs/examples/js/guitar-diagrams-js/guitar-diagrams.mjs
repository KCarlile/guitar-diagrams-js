/**
 * @file Guitar Diagrams JS main class.
 * @module js/lib/Guitar-Diagrams-JS/guitar-diagrams.mjs
 * @link https://github.com/KCarlile/guitar-diagrams-js
 *
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

import { GuitarDiagramsJSConfig } from './guitar-diagrams-config.mjs';
import { GuitarDiagramsJSMarker } from './guitar-diagrams-marker.mjs';

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
    // These are hard coded as they are relative sizes to each other.
    // Sizing can be changed by using the scaling method.
    static stringSpacing = 30;
    static fretboardPadding = 20;
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

    static stringNamePaddingFactor = 1.5;

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
     * @param {string} paramCanvasID - An optional canvas ID for a predefined canvas element.
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

        let fretNumberFontSize = this.#scale(GuitarDiagramsJS.fretNumberFontSize);
        let fretNumberIndent = this.#config.fretStartingNumber == 0 ? 0 : fretNumberFontSize;
        let stringNameFontSize = this.#scale(GuitarDiagramsJS.stringNameFontSize);
        let stringNameIndent = this.#config.stringNamesEnabled == false ? 0 : (stringNameFontSize * GuitarDiagramsJS.stringNamePaddingFactor);
        let canvasHeight = this.#scale(this.#getFretboardLength()) + stringNameIndent;
        let canvasWidth = this.#scale(this.#getFretboardWidth()) + fretNumberIndent;

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [canvasHeight, canvasWidth] = [canvasWidth, canvasHeight];
        } // end if test

        // set canvas size
        this.#canvas.setAttribute('width', canvasWidth);
        this.#canvas.setAttribute('height', canvasHeight);

        // set canvas background color
        let colorDiagramBackground = this.#config.colorDiagramBackground;

        // handle background color or transparency
        if ((colorDiagramBackground == '') || (colorDiagramBackground == null)) {
            this.#canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        } // end if test
        else {
            this.#canvasContext.fillStyle = this.#config.colorDiagramBackground;
            this.#canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
        } // end else test
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
            let stringNames = [...this.#config.stringNames]; // deep copy array

            // vertical draws string names left to right, but horizontal needs to draw them bottom to top
            if (this.#config.orientHorizontally == true) {
                stringNames = stringNames.reverse();
            } // end if test

            // iterate over each string
            for (const [stringNumber, stringName] of Object.entries(stringNames)) {
                if (this.#config.orientHorizontally == true) {
                    // horizontal
                    posX = (stringNameFontSize / 2);
                    posY = (stringIndent + (stringNumber * stringSpacing)) + stringNamesIndent;
                } // end if test
                else {
                    // vertical
                    posX = (stringIndent + (stringNumber * stringSpacing)) + stringNamesIndent;
                    posY = (stringNameFontSize / 2);
                } // end else test

                canvas.beginPath();
                canvas.fillStyle = this.#config.colorLabel;
                canvas.font = stringNameFontSize + 'px Arial';
                canvas.textAlign = 'center';
                canvas.textBaseline = 'middle';
                canvas.stroke();
                canvas.fillText(stringName, posX, posY);
                canvas.closePath();
            } // end for loop

            // translation resets the origin for the next drawing element
            if (this.#config.orientHorizontally == true) {
                // horizontal
                canvas.translate(stringNameFontSize * GuitarDiagramsJS.stringNamePaddingFactor, 0);
            } // end if test
            else {
                // vertical
                canvas.translate(0, stringNameFontSize * GuitarDiagramsJS.stringNamePaddingFactor);
            } // end else test
        } // end if test
    } // end drawStringNames method

    /**
     * Draws the fret number if starting fret is > 0.
     */
    #drawFretNumber() {
        const canvas = this.#canvasContext;
        let fretNumberFontSize = this.#scale(GuitarDiagramsJS.fretNumberFontSize);

        // draw the fret number, but only if the starting fret is not 0
        if (this.#config.fretStartingNumber != 0) {
            canvas.beginPath();
            canvas.fillStyle = this.#config.colorLabel;
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
        let fretboardWidth = this.#scale(this.#getFretboardWidth());
        let fretboardLength = this.#scale(this.#getFretboardLength());

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [fretboardWidth, fretboardLength] = [fretboardLength, fretboardWidth];
        } // end if test
        
        canvas.beginPath();
        canvas.fillStyle = this.#config.colorFretboard;
        canvas.fillRect(0, 0, fretboardWidth, fretboardLength);
        canvas.closePath();
    } // end drawFretboard method

    /**
     * Draws the nut if the fret starting number is 0. Otherwise, it omits the nut and includes the fret number.
     */
    #drawNut() {
        const canvas = this.#canvasContext;
        let fretboardWidth = this.#scale(this.#getFretboardWidth());
        let nutThickness = this.#scale(GuitarDiagramsJS.nutThickness);

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [fretboardWidth, nutThickness] = [nutThickness, fretboardWidth];
        } // end if test

        // draw the nut, but only if the starting fret number is 0
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
    #drawAllFretMarkers() {
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
    } // end drawAllFretMarkers method

    /**
     * Draws an individual fret marker.
     * @param {number} paramFretNumber - The number of the fret being drawn. 
     */
    #drawFretMarker(paramFretNumber) {
        const canvas = this.#canvasContext;
        let fretboardWidth = this.#scale(this.#getFretboardWidth());
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
        // draw the frets, but skip the 0-fret if starting fret number is 0
        for (let i = 0; i <= this.#config.fretCount; i++) {
            // if 0-fret but starting fret is not 0, then skip
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
        let fretboardWidth = this.#scale(this.#getFretboardWidth());
        let posX = 0;
        let posY = (fretSpacing * paramFretNumber) - (fretThickness / 2);

        // reset posY to 0 in cases where the previous calculation results in <0
        if (posY < 0) {
            posY = 0;
        } // end if test

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            [posX, posY] = [posY, posX];
            [fretboardWidth, fretThickness] = [fretThickness, fretboardWidth];
        } // end if test

        canvas.beginPath();
        canvas.fillStyle = this.#config.colorFrets;
        canvas.rect(posX, posY, fretboardWidth, fretThickness);
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
        let fretboardWidth = this.#scale(this.#getFretboardWidth());
        let posX = 0;
        let posY = 0;
        let endX = 0;
        let endY = 0;

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
        let stringCount = this.#config.stringNames.length;
        let fretSpacing = this.#scale(GuitarDiagramsJS.fretSpacing);
        let nutThickness = this.#scale(GuitarDiagramsJS.nutThickness);
        let stringSpacing = this.#scale(GuitarDiagramsJS.stringSpacing);
        let stringIndent = this.#scale(GuitarDiagramsJS.stringIndent);
        let strokeWidth = this.#scale(this.#config.markerStrokeWidth);
        let markerFontSize = this.#scale(this.#config.markerFontSize);
        let posX = stringIndent + ((stringCount - paramMarker.string) * stringSpacing) + (strokeWidth * .5);
        let posY = ((paramMarker.fret - 1) * fretSpacing) + (fretSpacing / 2);

        // if 0-fret marker, set at the proper Y-position for the nut
        if (paramMarker.fret == 0) {
            posY = nutThickness / 2;
        } // end if test

        // swap orientation
        if (this.#config.orientHorizontally == true) {
            posX = stringIndent + ((paramMarker.string - 1) * stringSpacing) + (strokeWidth * .5);
            [posX, posY] = [posY, posX];
        } // end if test

        // marker shape
        canvas.beginPath();
        canvas.fillStyle = paramMarker.colorFill
        canvas.strokeStyle = paramMarker.colorStroke;
        canvas.lineWidth = strokeWidth;

        switch(paramMarker.shape) {
            case GuitarDiagramsJS.Shape.Square:
                this.#drawMarkerSquare(posX, posY);
                break;
            case GuitarDiagramsJS.Shape.Triangle:
                this.#drawMarkerTriangle(posX, posY);
                break;
            case GuitarDiagramsJS.Shape.Diamond:
                this.#drawMarkerDiamond(posX, posY);
                break;
            default:
                this.#drawMarkerCircle(posX, posY);
        } // end switch case

        canvas.closePath();

        // marker text
        canvas.beginPath();
        canvas.fillStyle = paramMarker.colorFont;
        canvas.textAlign = 'center';
        canvas.textBaseline = 'middle';
        canvas.font = markerFontSize + 'px Arial';
        canvas.fillText(paramMarker.text, posX, (posY + strokeWidth));
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

        canvas.fillRect(
            (paramPosX - markerRadius),
            (paramPosY - markerRadius),
            (markerRadius * 2),
            (markerRadius * 2));
        canvas.strokeRect(
            (paramPosX - markerRadius),
            (paramPosY - markerRadius),
            (markerRadius * 2),
            (markerRadius * 2));
    } // end drawMarkerSquare method

    /**
     * Draws a square circle at the X,Y location provided.
     * @param {*} paramPosX - The X coordinate for the position of the marker.
     * @param {*} paramPosY - The Y coordinate for the position of the marker.
     */
    #drawMarkerCircle(paramPosX, paramPosY) {
        const canvas = this.#canvasContext
        let markerRadius = this.#scale(GuitarDiagramsJS.markerRadius);

        canvas.arc(paramPosX,
            paramPosY,
            markerRadius,
            0,
            (2 * Math.PI));
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

        canvas.moveTo(paramPosX,
            (paramPosY - triangleMarkerRadius));
        canvas.lineTo(
            (paramPosX + triangleMarkerRadius),
            (paramPosY - triangleMarkerRadius + triangleMarkerHeight));
        canvas.lineTo((paramPosX - triangleMarkerRadius),
            (paramPosY - triangleMarkerRadius + triangleMarkerHeight));
        canvas.lineTo(paramPosX,
            (paramPosY - triangleMarkerRadius));
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

        canvas.moveTo(paramPosX, (paramPosY - diamondMarkerRadius));
        canvas.lineTo((paramPosX + diamondMarkerRadius), paramPosY);
        canvas.lineTo(paramPosX, (paramPosY + diamondMarkerRadius));
        canvas.lineTo((paramPosX - diamondMarkerRadius), (paramPosY));
        canvas.lineTo(paramPosX, (paramPosY - diamondMarkerRadius));
        canvas.fill();
        canvas.stroke();
    } // end drawMarkerDiamond method

    /**
     * Adds any configured controls adjacent to the diagram.
     */
    #addControls() {
        if (this.#config.controlsEnabled) {
            const controlMargins = '.5em .5em 0 0';
            const controlClass = 'guitar-diagrams-control';
            const controlClassPrefix = 'guitar-diagrams-';

            const canvasElement = document.getElementById(this.#config.canvasID);

            const controlsDiv = document.createElement('div');
            controlsDiv.style = 'display: block; margin-top: .5em';
            canvasElement.insertAdjacentElement('afterend', controlsDiv);

            // add the controls in reverse order of desired display order (last to first)
            // other controls go here
            /*
            if (this.#config.someFeatureEnabled) {
                // ...
            } // end if test
            */

            // change orientation button
            const changeOrientationButtonExists = document.getElementById(this.#config.canvasID + '-change-orientation-button');

            if (this.#config.changeOrientationEnabled && (!changeOrientationButtonExists)) {
                let changeOrientationButton = document.createElement('input');

                changeOrientationButton.type = 'button';
                changeOrientationButton.id = this.#config.canvasID + '-change-orientation-button';
                changeOrientationButton.style = 'margin: ' + controlMargins + ';';
                changeOrientationButton.classList.add(controlClassPrefix + 'change-orientation-button');
                changeOrientationButton.classList.add(controlClass);
                changeOrientationButton.value = String.fromCodePoint(0x1F500);

                changeOrientationButton.addEventListener('click', () => {
                    // toggle/flip the value, then redraw
                    this.#config.orientHorizontally = !this.#config.orientHorizontally;
                    this.drawNeck();
                    this.drawAllMarkers();
                });

                controlsDiv.insertAdjacentElement('afterend', changeOrientationButton);
            } // end if test

            // image download button
            const downloadImageButtonExists = document.getElementById(this.#config.canvasID + '-download-image-button');

            if (this.#config.downloadImageEnabled && (!downloadImageButtonExists)) {
                let downloadButton = document.createElement('input');

                downloadButton.type = 'button';
                downloadButton.id = this.#config.canvasID + '-download-image-button';
                downloadButton.style = 'margin: ' + controlMargins + ';';
                downloadButton.classList.add(controlClassPrefix + 'download-image-button');
                downloadButton.classList.add(controlClass);
                downloadButton.value = String.fromCodePoint(0x1F4BE);

                downloadButton.addEventListener('click', () => {
                    const canvas = document.getElementById(this.#config.canvasID);
                    const dataURL = canvas.toDataURL('image/png');
                    let a = document.createElement('a');
                    a.href = dataURL;
                    a.download = this.#config.canvasID + '.png';
                    a.click();
                });

                controlsDiv.insertAdjacentElement('afterend', downloadButton);
            } // end if test
        } // end if test
    } // end addControls method

    /**
     * Gets the length of the fretboard.
     * @return {number} Length of the fretboard.
     */
    #getFretboardLength() {
        let fretSpacing = GuitarDiagramsJS.fretSpacing;
        let fretLength = GuitarDiagramsJS.fretThickness;
        let fretboardLength = (this.#config.fretCount * fretSpacing) + (fretLength / 2);

        return fretboardLength;
    } // end getFretboardLength method

    /**
     * Gets the length of the fretboard.
     * @return {number} Length of the fretboard.
     */
    #getFretboardWidth() {
        let stringSpacing = GuitarDiagramsJS.stringSpacing;
        let stringIndent = GuitarDiagramsJS.stringIndent;
        let fretboardWidth = (this.#config.stringNames.length * stringSpacing) + (stringIndent / 2);

        return fretboardWidth;
    } // end getFretboardLength method

    /**
     * Scales any provided numeric value for resizing the drawing based on the scaling factor.
     * @param {number} paramVector - The numeric variable to be scaled.  
     * @return {number} Scaled version of the numeric value provided.
     */
    #scale(paramVector) {
        let scale = paramVector;
        scale = this.#config.scaleFactor * paramVector;

        return scale;
    } // end scale method
    // ========== END private methods

    // ========== BEGIN public methods
    /**
     * Adds the canvas element to the parent element with the specified ID.
     * @param {string} paramParentElementID - The parent element's ID to which the canvas element will be added.
     */
    addCanvasToElement(paramParentElementID) {
        document.getElementById(paramParentElementID).appendChild(this.getCanvasElement());
    } // end addCanvasToElement method

    /**
     * Sets the canvas element's ID for an existing canvas.
     * @param {string} paramElementID - The canvas element's ID.
     */
    setCanvas(paramElementID) {
        let element = document.getElementById(paramElementID);
        
        if ((!!element) && (element.tagName.toLowerCase() == 'canvas')) {
            this.config.canvasID = paramElementID;
        } // end if test
        else {
            console.log('[Error] GuitarDiagramsJS.setCanvas(): Specified canvas element could not be found.' +
                ' { paramElementID: ' + paramElementID + ' }');
        } // end else test
    } // end setCanvas method

    /**
     * Draws the neck without markers.
     */
    drawNeck() {
        this.#initializeDrawing();
        this.#drawStringNames();
        this.#drawFretNumber();
        this.#drawFretboard();
        this.#drawNut();
        this.#drawAllFretMarkers();
        this.#drawAllFrets();
        this.#drawAllStrings();
        this.#addControls();
    } // end drawNeck method

    /**
     * Adds a marker to the diagram, based on the specified parameters, to be drawn.
     * @param {*} paramString - The specified string to add the marker.
     * @param {*} paramFret - The specified fret to add the marker.
     * @param {*} paramText - The specified text to display on the marker.
     * @param {*} paramShape - The specified shape to render for the marker; defaults to circle.
     */
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

    /**
     * Draws each marker added to the diagram.
     */
    drawAllMarkers() {
        const self = this;
        this.#markers.forEach(marker => {
            this.#drawMarker(marker);
        }); // end forEach loop
    } // end drawAllMarkers method

    /**
     * Prints to the console a list of all markers added.
     */
    logAllMarkers() {
        if (this.#markers.length > 0) {
            this.#markers.forEach ((marker) => {
                console.log('Marker text: ' + marker);
            }); // end foreach loop
        } // end if test
    } // end logAllMarkers method

    /**
     * Returns a canvas element to be added to the HTML page for use by Guitar Diagrams JS.
     * @return {Element} The generated canvas element.
     */
    getCanvasElement() {
        let canvasElement = document.createElement('canvas');
        canvasElement.id = this.#config.canvasID;
        canvasElement.classList.add('guitar-diagrams-canvas');

        return canvasElement;
    } // end getCanvasElement method
    // ========== END public methods

    // ========== BEGIN static methods
    // ========== END static methods
} // end GuitarDiagramsJS class
