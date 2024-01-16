# Guitar Diagram JS

## Overview

_Guitar Diagram JS_ is an open source JavaScript library for drawing guitar chords and scales on an HTML5 canvas.

Version: 0.1

## Author

**Kenny Carlile**\
[KCarlile.com](https://www.kcarlile.com/)\
[KCarlile on GitHub](https://github.com/KCarlile)

## Technical

### References

- color reference: [https://htmlcolorcodes.com/color-chart/]
- canvas API reference: [https://www.w3schools.com/jsref/api_canvas.asp]

## To Do List

- [ ] Configuration:
  - [x] Make the fretboard (and everything) scalable
  - [x] Allow for setting the fret number; if >0, hide the nut
  - [ ] Horizontal fretboard
  - [ ] Specify number of frets
  - [ ] Dynamic canvas size based on fret spacing * frets
  - [ ] Option to change string count for bass or mandolin
- [ ] Allow for adding fingerings with:
  - [ ] Numbers for fingers or scale tones (with accidentals), note names (with accidentals)
  - [x] Shapes and colors (roots, chord-tones, others)
- [ ] Support 0-fret open strings (0) AND muted open strings (X)
- [ ] Allow for mirroring for left-handed players
- [ ] Allow for optional image download button
- [ ] Allow for changing of orientation/rotation
- [x] Function to generate canvas tag
- [x] Simplify scaling with local pre-scaled variables: `let width = scale(SomeBigStaticPath);`
