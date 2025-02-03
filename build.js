// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('node:fs');
const path = require('node:path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('              Kiyohito Keeth Kuwahara'),
  handle: chalk.white('kkeeth'),
  work: chalk.white('A Unit Leader of an Engineering Team at Kaminashi Inc.'),
  opensource:
    chalk.white(
      'Riot.js Collaborator and Riot.js Japan User Group Organizer ',
    ) + chalk.green('⬢'),
  x: chalk.gray('https://x.com/') + chalk.cyan('kuwahara_jsri'),
  npm: chalk.gray('https://npmjs.com/') + chalk.redBright('~kkeeth'),
  github: chalk.gray('https://github.com/') + chalk.white('kkeeth'),
  // linkedin:
  //   chalk.gray('https://linkedin.com/in/') +
  //   chalk.blue('kiyohito-keeth-kuwahara-611b09a3/'),
  standfm:
    chalk.gray('https://stand.fm/channels/') +
    chalk.cyanBright('5e70dd5881d4e84e1ff1cab4'),
  spotify:
    chalk.gray('https://open.spotify.com/show/') +
    chalk.green('4ZqUQtob7eJrz9DQV7lPVd'),
  art19: chalk.gray('https://art19.com/shows/') + chalk.blue('kkeethengineers'),
  listen: chalk.gray('https://listen.style/u/') + chalk.cyan('kkeeth'),
  zenndev: chalk.gray('https://zenn.dev/') + chalk.cyanBright('kkeeth'),
  meety:
    chalk.gray('https://meety.net/matches/') +
    chalk.magentaBright('RTeAfvEuUeOg'),
  npx: `${chalk.red('npx')} ${chalk.white(
    '@kkeeth/card (via GitHub Package Registry @kkeeth/card)',
  )}`,
  message: chalk.white.bold('              Please feel free to contact me!'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelX: chalk.white.bold('          𝕏:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  // labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  // labelStandfm: chalk.white.bold('   Stand.fm:'),
  labelSpotify: chalk.white.bold('    Spotify:'),
  labelArt19: chalk.white.bold('    Art19:'),
  labelListen: chalk.white.bold('   Listen:'),
  labelZenndev: chalk.white.bold('   Zenn.dev:'),
  labelMeety: chalk.white.bold('      Meety:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const xing = `${data.labelX}  ${data.x}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
// const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// const standfming = `${data.labelStandfm}  ${data.standfm}`
const spotifying = `${data.labelSpotify}  ${data.spotify}`;
const art19ing = `${data.labelArt19}  ${data.art19}`;
const listening = `${data.labelListen}  ${data.listen}`;
const zenning = `${data.labelZenndev}  ${data.zenndev}`;
const meetying = `${data.labelMeety}  ${data.meety}`;
const messaging = data.message;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline +
  working +
  newline +
  opensourcing +
  newline +
  newline +
  xing +
  newline +
  npming +
  newline +
  githubing +
  newline +
  // linkedining + newline +
  // standfming + newline +
  listening +
  newline +
  spotifying +
  newline +
  art19ing +
  newline +
  zenning +
  newline +
  meetying +
  newline +
  newline +
  messaging; // data.message

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options)),
);
