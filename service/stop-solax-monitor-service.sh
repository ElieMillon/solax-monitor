#!/bin/bash
pkill --signal TERM -f "ng serve --port 4500"
pkill --signal TERM -f "chromium-browser.+localhost:4500"
