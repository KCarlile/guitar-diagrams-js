#!/bin/bash

# See this page for more info about running Super Linter locally:
# https://github.com/super-linter/super-linter/blob/main/docs/run-linter-locally.md

# Change this path to your local codebase path before running
LOCAL_CODEBASE_PATH="/Users/kennycarlile/Code/guitar-diagrams-js"

docker run \
    -e LOG_LEVEL=DEBUG \
    -e RUN_LOCAL=true \
    -e LINTER_RULES_PATH=.config/linters/ \
    -e CSS_FILE_NAME=stylelint.config.json \
    -e VALIDATE_JAVASCRIPT_ES=true \
    -e VALIDATE_HTML=true \
    -e VALIDATE_CSS=true \
    -e VALIDATE_MARKDOWN=true \
    -e IGNORE_GITIGNORED_FILES=true \
    -e DEFAULT_BRANCH=main \
    -v $LOCAL_CODEBASE_PATH:/tmp/lint \
    --rm \
    ghcr.io/super-linter/super-linter:latest
