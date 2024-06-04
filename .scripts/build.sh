#!/bin/bash

echo ""
echo "########################################"
echo "# Guitar Diagrams JS build script"
echo "########################################"
echo ""

LOCAL_PATH=$(dirname "$0")

echo "< Beginning Guitar Diagrams JS build script..."
echo ""

echo ">> Beginning Super-Linter (local) run..."
bash -x "$LOCAL_PATH/"super-linter.sh
echo "<< Ending Super-Linter (local) run."
echo ""

echo ">> Beginning npm install..."
npm install ./
echo "<< Ending npm install."
echo ""

echo "< Ending Guitar Diagrams JS build script."
