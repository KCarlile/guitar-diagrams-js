#!/bin/bash

echo ""
echo "########################################"
echo "# Guitar Diagrams JS build local script"
echo "########################################"
echo ""

LOCAL_PATH=$(dirname "$0")

echo "< Beginning Guitar Diagrams JS build local script..."
echo ""

echo ">> Beginning build for examples..."
SRC_SCRIPTS="$LOCAL_PATH/../src/*.mjs"
TARGET_PATH="$LOCAL_PATH/../docs/examples/js/guitar-diagrams-js/"
cp $SRC_SCRIPTS $TARGET_PATH
echo "<< Ending build for examples."
echo ""

echo "< Ending Guitar Diagrams JS build local script."
