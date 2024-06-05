#!/bin/bash

echo ""
echo "########################################"
echo "# Guitar Diagrams JS build script"
echo "########################################"
echo ""

LOCAL_PATH=$(dirname "$0")

echo "< Beginning Guitar Diagrams JS build script..."
echo ""

echo ">> Beginning linting..."
source "$LOCAL_PATH/linting.sh"
RETURN_CODE=$?
echo "<< Ending linting."
echo ""

# If linting fails, it shouldn't reach this point, but just in case...
if (( RETURN_CODE > 0 )); then
    echo "[ERROR] Linting failed: see above or run linting.sh with the argument "verbose" for full logs."
    exit 1
fi

echo ">> Beginning npm install..."
npm install ./
echo "<< Ending npm install."
echo ""

echo ">> Beginning npm run build..."
npm run build
echo "<< Ending run build."
echo ""

echo "< Ending Guitar Diagrams JS build script."
