# Coloring Book

Creates a coloring book out of a photo that you upload.
Uses the [Canny edge detector algorithm](https://en.wikipedia.org/wiki/Canny_edge_detector) ([Demo](http://inspirit.github.io/jsfeat/sample_canny_edge.html))
## Table of Contents

1. [Repo Structure](#repo-structure)
  1. [Server](#server)
  2. [Client](#client)
2. [Development](#development)
  1. [Installing Dependencies](#installing-dependencies)
  2. [UI Mockup](#ui-mockup)
  3. [Features](#features)
  4. [Style Guide](#style-guide)

## Repo Structure

### server:

The server is run by express and is mainly an API. All image processing will be done on the server, not the client.

### client:

TBD

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g browserify
npm install
npm install -g grunt-cli
gulp build
gulp
```

Note that we will **not** be using bower for this project. Instead use npm to install any client dependencies and build them with browserify.

### UI Mockup

Coming soon

### Features

View the project roadmap [here](https://github.com/imagecolor/coloringbook/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Style Guide

See [STYLE-GUIDE.md](STYLE-GUIDE.md) for style guidelines.


