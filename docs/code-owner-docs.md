# Code Owner Documentation

This documentation page is for code owners to understand the technical details of the project and the release process.

## Table of Contents

- [Code Owner Documentation](#code-owner-documentation)
  - [Table of Contents](#table-of-contents)
  - [Directory Structure](#directory-structure)
  - [Code Architecture](#code-architecture)
  - [Scripts](#scripts)
    - [`build.sh`](#buildsh)
    - [`linting.sh`](#lintingsh)
    - [`package-check.sh`](#package-checksh)
    - [`super-linter.sh`](#super-lintersh)
  - [GitHub Actions](#github-actions)
  - [Demo Hosting](#demo-hosting)
    - [Important Note](#important-note)
  - [Building, Packaging, and Releasing](#building-packaging-and-releasing)
    - [Local Builds and Releases](#local-builds-and-releases)
  - [Releases](#releases)
    - [Versioning](#versioning)

## Directory Structure

This section outlines the directory structure of the project.

- `.config/`: Configuration files.
  - `linters/`: Configuration files for linters.
    - `stylelint.config.json`: Configuration file for CSS linting used by Super-Linter.
- `.github/`: Files used by GitHub.
  - `ISSUE_TEMPLATE/`: Markdown files for GitHub issue templates.
    - `01-bug-report.md`: Template for GitHub issues of type bug.
    - `02-feature-request.md`: Template for GitHub issues of type feature request.
    - `03-usage-submission.md`: Template for GitHub issues of type usage submission.
    - `config.yml`: GitHub Actions config.
  - `workflows/`: YML files to define GitHub Actions.
    - `demo-hosting.yml`: GitHub Actions workflow to deploy `examples/` content to GoDaddy hosting for demos.
    - `linting.yml`: GitHub Actions workflow for linting codebase.
- `.scripts/`: Local scripts used for development, packaging, and releases.
  - `build.sh`: Build script to prepare package for deployment by running linting and deployment tasks. Run with `npm run build`.
  - `linting.sh`: Script to run Super-Linter for HTML, JS, CSS, and Markdown linting. Runs as part of the `build.sh` script.
  - `package-check.sh`: Script to run local linting against `package.json`. Runs as part of the `build.sh` script.
  - `super-linter.sh`: Script to run local linting. Called by `linting.sh`. Runs as part of the `build.sh` script.
- `docs/`: Documentation and examples for the project.
  - `examples/`: Example usage for the project.
    - `css/`: CSS files for `index.html` examples page.
      - `styles.css`: Defines styles for `index.html`, if necessary.
    - `js/`: JS files for `index.html` examples page.
      - `guitar-diagrams-js/`: Copied project JavaScript (`*.mjs`) files go into this directory when copied here by `.scripts/build.sh`.
      - `main.js`: Used by `../index.html` for examples; references the project's JavaScript files copied into `guitar-diagrams-js/` by `.scripts/build.sh`.
      - `testing.js`: Used by `../testing.html` for development and testing.
    - `api-docs.md`: Detailed API documentation for using the project library.
    - `CODE_OF_CONDUCT.md`: Community guidelines for communications and actions.
    - `code-owner-docs.md`: This document.
    - `CONTRIBUTING.md`: Community guidelines for contributing to the project.
    - `index.md`: Main documentation landing page.
    - `index.html`: Documentation with demonstrations of examples for how to use the project.
    - `testing.html`: Testing page used for development.
- `src/`: Contains development files.
  - `guitar-diagrams.mjs`: Main entry point for the project.
  - `guitar-diagrams-config.mjs`: Config object for defining the library's behavior.
  - `guitar-diagrams-marker.mjs`: Object for a marker instance.
- `.gitignore`: File patterns to ignore for Git.
- `LICENSE`: Software license file (GPL-3.0)
- `README.md`: Main/intro documentation for the project.

## Code Architecture

The `GuitarDiagramsJS` class is where site builders will start with leveraging the library. Every interaction happens with a `GuitarDiagramsJS` object, which then leverages the `GuitarDiagramsJSConfig` and the `GuitarDiagramsJSMarker` classes to for modularity and encapsulation. Site builders never need to know about the `GuitarDiagramsJSConfig` and `GuitarDiagramsJSMarker` classes.

## Scripts

The `.scripts/` directory contains Bash scripts for local development, build, and deployment tasks.

### `build.sh`

The build script prepares the project for release and deployment by performing these actions:

1. Call `package-check.js` to validate the `package.json` syntax.
1. Call `linting.sh` to check for HTML, CSS, JS, and Markdown syntax errors.
1. Copy `*.mjs` files from `src/` to `docs/examples/js/guitar-diagrams-js/` for use by `docs/examples/index.html`.
1. Calls `npm install ./` to add any NPM dependencies and update the `package-lock.json` file.

The build script can be executed by running `npm run build` in the root of the project.

### `linting.sh`

This script calls the `super-linter.sh` script (see below) and scans the output for any linting errors. This can be run as part of the `build.sh` script by running `npm run build` from the root of the project.

### `package-check.sh`

This script calls the `npx publint` to check the `package.json` file for correctness. This can be run as part of the `build.sh` script by running `npm run build` from the root of the project.

### `super-linter.sh`

This script starts a Docker container to run a local version of Super-Linter for linting HTML, CSS, JS, and Markdown. This can be run as part of the `build.sh` script by running `npm run build` from the root of the project.

## GitHub Actions

There are three workflows defined for GitHub Actions and those exist at the following location:

- `.github/`
  - `workflows/`
    - `demo-hosting.yml`
    - `linting.yml`

| File Name | Workflow Name | Trigger(s) | Branch(es) | Description |
| --------- | ------------- | ---------- | ---------- | ----------- |
| Deploy docs/examples/* to demo hosting | `demo-hosting.yml` | Release published | `main` | Copies `docs/examples/*` to @KCarlile's personal GoDaddy hosting via FTP for public demo of functionality at <https://demo.kcarlile.com/guitar-diagrams-js/>. |
| Lint codebase | `linting.yml` | Push, PR | `main`, `develop` | Runs Super-Linter against HTML, CSS, JS, and Markdown files in the codebase when code is pushed to `main` or `develop` and when a PR is created against `main` or `develop`. |

## Demo Hosting

Whenever a release is published, a GitHub Actions workflow runs to FTP the contents of the `docs/examples/` directory to @KCarlile's personal GoDaddy hosting account. This is so the demo examples can be easily viewed by anyone at <https://demo.kcarlile.com/guitar-diagrams-js/>.

### Important Note

The `.scripts/build.sh` script, which is run by calling `npm run build` from the root of the project, copies the JavaScript files from `src/*.mjs` to `docs/examples/js/guitar-diagrams-js/` for local reference for the demo page (`docs/examples/index.html`).

## Building, Packaging, and Releasing

### Local Builds and Releases

- When all of your code changes are complete, AND...
- You've executed `.scripts/build.sh` via `npm run build`, AND...
- You're not seeing any errors in the output of the build script, THEN...
- Commit your changes and push to GitHub, then issue a PR into the `develop` branch for testing.

## Releases

When enough changes (bugs and new features) have been merged into the `develop` branch to warrant a new version, create a release with a new version number.

1. Create a PR from the `develop` branch into `main` branch.
1. Once that PR is merged into `main`, checkout `main` locally and pull to get the latest changes. Then, update the version number in `package.json` in your local `main` branch and commit, then push back up to GitHub. (Release creation will fail if the version in `package.json` is not the same as the version you are creating.)
1. Use the [Release page](https://github.com/KCarlile/guitar-diagrams-js/releases) to create a new release.

### Versioning

Guitar Diagrams JS uses [semantic versioning](https://semver.org/) with version numbers in the format of X.Y.Z.

| Number | Release Significance | Description | Example |
| ------ | -------------------- | ----------- | ------- |
| X | Major | A change in major version denotes new features (and bug fixes) that break backward compatibility. | `1.5.1` :arrow_right: `2.0.0` |
| Y | Minor | A change in minor version denotes new features (and bug fixes) that retain backward compatibility. | `1.5.1` :arrow_right: `1.6.0` |
| Z | Patch | A change in patch version denotes bug fixes (no new features) that retain backward compatibility. | `1.5.1` :arrow_right: `1.5.2` |
