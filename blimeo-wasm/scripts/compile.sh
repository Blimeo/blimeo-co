#!/bin/bash
rm -rf pkg/ && rm ../static/blimeo*
wasm-pack build
cp pkg/* ../public/