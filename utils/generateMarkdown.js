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
  const sections = [
    "Description",
    "Installation",
    "Contributing",
    "Usage",
    "Tests",
    "License",
    "Questions",
  ];
  //title
  let readme = `# ${data.title}\n`;
  //table of contents
  readme += "## Table of Contents\n\n";
  for (const section of sections) {
    readme += `- [${section}](#${section})\n`;
  }
  readme += "\n";
  //description
  readme += `##${sections[0]}\n\n`;
  readme += `${data.desc}\n\n`;
  //installation
  readme += `##${sections[1]}\n\n`;
  readme += `${data.install}\n\n`;
  //contributors
  readme += `##${sections[2]}\n\n`;
  readme += `${data.contribute}\n\n`;
  //usage
  readme += `##${sections[3]}\n\n`;
  readme += `${data.usage}\n\n`;
  //tests
  readme += `##${sections[4]}\n\n`;
  readme += `${data.test}\n\n`;
  //license
  readme += `##${sections[5]}\n\n`;
  readme += `${data.license}\n\n`;
  //questions
  readme += `##${sections[6]}\n\n`;
  readme += `Additional questions?\nYou can find me [HERE](https://github.com/${data.username}" on GitHub.\nOr, you can email me at ${data.email}.\n\n`;

  return readme;
}

module.exports = generateMarkdown;
