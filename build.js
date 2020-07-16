'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('              Kiyohito Keeth Kuwahara'),
  handle: chalk.white('kkeeth'),
  work: chalk.white('Servant Leader of Front-end developer teams,\n              Member of the Board at Yumemi Inc.'),
  opensource: chalk.white('Riot.js Collaborator and Riot.js Japan User Group Organizer ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('kuwahara_jsri'),
  npm: chalk.gray('https://npmjs.com/') + chalk.redBright('~kkeeth'),
  github: chalk.gray('https://github.com/') + chalk.green('kkeeth'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('kiyohito-keeth-kuwahara-611b09a3/'),
  standfm: chalk.gray('https://stand.fm/channels/') + chalk.cyanBright('5e70dd5881d4e84e1ff1cab4'),
  anchorfm: chalk.gray('https://anchor.fm/') + chalk.magentaBright('kkeeth'),
  npx: chalk.red('npx') + ' ' + chalk.white('@kkeeth/card (via GitHub Package Registry @kkeeth/card)'),
  message: chalk.white.bold('              Please feel free to contact me!'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelStandfm: chalk.white.bold('    Standfm:'),
  labelAnchorfm: chalk.white.bold('    Anchorfm:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const standfming = `${data.labelStandfm}  ${data.standfm}`
const anchorming = `${data.labelAnchorfm}  ${data.anchorfm}`
const messaging = data.message

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               standfming + newline + // data.labelStandfm + data.standfm
               anchorming + newline + newline + // data.labelAnchorfm + dataanchorfm
               messaging // data.message

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
