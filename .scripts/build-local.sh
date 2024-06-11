#!/bin/bash

echo ""
echo "########################################"
echo "# Guitar Diagrams JS build local script"
echo "########################################"
echo ""

LOCAL_PATH=$(dirname "$0")

echo "< Beginning Guitar Diagrams JS build local script..."
echo ""

echo ">> Beginning package checking..."
source "$LOCAL_PATH/package-check.sh"
echo "<< Ending package checking."
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

echo ">> Beginning build for examples..."
SRC_SCRIPTS="$LOCAL_PATH/../src/*.mjs"
TARGET_PATH="$LOCAL_PATH/../docs/examples/js/guitar-diagrams-js/"
cp $SRC_SCRIPTS $TARGET_PATH
echo "<< Ending build for examples."
echo ""

echo "< Ending Guitar Diagrams JS build local script."
