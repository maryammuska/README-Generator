// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)'
  }else if (license == 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-red.svg)](https://opensource.org/licenses/Zlib)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseTemplate = renderLicenseSection(data.license)

  return `# ${data.title}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation 

${data.installation}

## Usage

${data.usage}

## License

${licenseTemplate}

## Contributing

${data.contributing}

## Tests

${data.test_instructions}

## Questions

${data.gitusername} ${data.github_url}
${data.email}


`;
}

module.exports = generateMarkdown;