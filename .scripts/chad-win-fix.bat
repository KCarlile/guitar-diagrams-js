echo "Trying to fix Windows symlink issues..."

del ..\docs\examples\js\guitar-diagrams-js\guitar-diagrams.js
del ..\docs\examples\js\guitar-diagrams-js\guitar-diagrams-config.js
del ..\docs\examples\js\guitar-diagrams-js\guitar-diagrams-marker.js

mklink ..\docs\examples\js\guitar-diagrams-js\guitar-diagrams.js ..\guitar-diagrams.js
mklink ..\docs\examples\js\guitar-diagrams-js\guitar-diagrams-config.js ..\guitar-diagrams-config.js
mklink ..\docs\examples\js\guitar-diagrams-js\guitar-diagrams-marker.js ..\guitar-diagrams-marker.js
pause