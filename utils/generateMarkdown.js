let supportedLicenses = {
  Unlicense:{
    link:'https://spdx.org/licenses/Unlicense.html',
    badge:'https://img.shields.io/badge/license-Unlicense-lightgray'
  },
  MIT:{
    link: 'https://spdx.org/licenses/MIT.html',
    badge:'https://img.shields.io/badge/license-MIT-green'
  },
  Apache:{
    link:'https://spdx.org/licenses/Apache-2.0.html',
    badge:'https://img.shields.io/badge/license-Apache%202-blue'
  },
  GNU_GPL:{
    link:'https://spdx.org/licenses/GPL-3.0-or-later.html',
    badge:'https://img.shields.io/badge/license-GPL-blue'
  }

}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let retStr = '';
  if(license){
    retStr = 
    `![license:${license}](${supportedLicenses[license].badge})\n`;
  }
  return retStr;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license.replace('_',' ')}](${supportedLicenses[license].link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let retStr = '';
  if(license){
  retStr = 
  `
  ## License
  Licensed under the ${renderLicenseLink(license)} license.
  `;
  }
  return retStr
}

function renderTests(testsMD){
  let retStr = ''
  if(testsMD){
    retStr = `## Tests\n${testsMD}\n\n`
  }
  return retStr;
}

function renderCredits(creditsMD){
  let retStr = ''
  if(creditsMD){
    retStr = `## Credits\n${creditsMD}\n\n`
  }
  return retStr;
}

function renderContribution(contributionMD){
  let retStr = ''
  if(contributionMD){
    retStr = `## Contributing\n${contributionMD}\n\n`
  }
  return retStr;
}

function renderTOC(data){
  let retStr =
  `
* [Installation](#installation)
* [Usage](#usage)
${data.test?'* [Tests](#tests)':''}
${data.credits?'* [Credits](#credits)':''}
${data.contribute?'* [Contribution](#contribution)':''}
* [License](#license)
* [Questions](#questions)
`
return retStr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 const md=  
`# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.desc}

----- 
## Table of Contents
${renderTOC(data)}

-----
## Installation
${data.installation? data.installation : 'Install with ``` npm i ```'}

## Usage
${data.usage}

-----
${renderTests(data.test)}${renderCredits(data.credits)}${renderContribution(data.contribute)}

${renderLicenseSection(data.license)}


## Questions
For additional questions, find me on [GitHub](https://github.com/${data.gituser}) or email me at ${data.email}.

`;

return md;
}

module.exports = generateMarkdown;
