// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown => {
  const { } = generateMarkdown;

  return `
  # ${questions(title)}

  ## Description 
  ${questions(description)}

  ## Installation
  ${questions(installation)}

  ## Usage
  ${questions(usage)}

  ## License
  ${questions(license)}

  ## Contributing
  ${questions(guidelines)}

  ## Tests
  ${questions(tests)}

  ## Questions
  Email me with questions at ${questions(email)}
  See more at github.com/${questions(username)}/
  `
};