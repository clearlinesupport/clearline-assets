#!/bin/sh
set -e

# Install tidy if not available
if ! command -v tidy >/dev/null 2>&1; then
  apt-get update
  apt-get install -y tidy
fi

# Install Node.js and npm if not available
if ! command -v npm >/dev/null 2>&1; then
  apt-get update
  apt-get install -y nodejs npm
fi

# Install project dependencies if package.json exists
if [ -f package.json ]; then
  npm install
fi

