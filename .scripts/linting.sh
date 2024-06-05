#!/bin/bash

# Argument 1: "verbose" enables full log printing
# usage: $ ./linting.sh verbose

echo ""
echo "########################################"
echo "# Guitar Diagrams JS linting script"
echo "########################################"
echo ""

SHOW_FULL_LOG="$(echo "$1" | tr a-z A-Z)"
LOCAL_PATH=$(dirname "$0")

echo "< Beginning Guitar Diagrams JS linting script..."
echo ""

echo ">> Beginning Super-Linter (local) run..."
FULL_LOG="$(bash -x "$LOCAL_PATH/"super-linter.sh)"
LOG="$(echo "${FULL_LOG}" | grep -e "ERROR_COUNTER for CSS" -e "ERROR_COUNTER for HTML" -e "ERROR_COUNTER for JAVASCRIPT_ES" -e "ERROR_COUNTER for MARKDOWN")"

if [ "$SHOW_FULL_LOG" == "VERBOSE" ]; then
    echo "========================================"
    echo "= BEGIN full log..."
    echo "========================================"
    echo "$FULL_LOG"
    echo "========================================"
    echo "= END full log."
    echo "========================================"
fi

echo "<< Ending Super-Linter (local) run."
echo ""

echo "< Ending Guitar Diagrams JS linting script."
echo ""

echo "$LOG"
echo ""

REGEX=".*ERROR_COUNTER for (CSS|HTML|JAVASCRIPT_ES|MARKDOWN): ([0-9]+)"
FAILURES=0

while IFS= read -r LINE; do
    if [[ "$LINE" =~ $REGEX ]]; then
        LANGUAGE=${BASH_REMATCH[1]}
        ERROR_COUNT=${BASH_REMATCH[2]}

        if [ "$ERROR_COUNT" -eq "0" ]; then
            echo "${BASH_REMATCH[1]}: PASSED"
        else
            FAILURES=$((FAILURES + 1))
            echo "${BASH_REMATCH[1]} errors: ${BASH_REMATCH[2]}"
        fi
    fi
done <<< "$LOG"

if (( FAILURES > 0 )); then
    echo "[ERROR] Failures found: ${FAILURES} (see above)"
    exit 1
fi
