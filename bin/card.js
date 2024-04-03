#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const fs = require('node:fs')
const path = require('node:path')
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')
console.log(output)
