philidem.com
============

This repo contains the source code for building content
for philidem.com. The build produces static content that
can be published via any static file server.

# Usage

## Prerequisites

0. Install Node.js 4.2+

## Initial Setup

0. Clone repo and change to repo directory
0. Run `npm install`

## Local Development Server:

**To launch server that watches for file changes and refreshes automatically:**

```bash
./run-server.sh
```

**To launch server that does not watch for file changes:**

```bash
node server.js
```

Open your web browser to `http://localhost:8888/`

## Build & Deploy

**To run production build:**

```bash
./run-build.sh --production true --url-prefix http://philidem.github.io/
```

**Alternative for non-Unix-like environments:**

```bash
node build.js --production true --url-prefix http://philidem.github.io/
```

**To deploy production build:**

Copy contents of `dist` directory to storage location associated
with `http://philidem.github.io/`.
