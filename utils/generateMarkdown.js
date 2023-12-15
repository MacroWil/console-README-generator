// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = `![License Badge](https://shields.io/badge/license-${license}-green)`;
  }

  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  // select correct license link
  switch (license) {
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += `## License\n\n`;
    licenseSection += `See ${renderLicenseLink(
      license
    )} for more information about licensing.\n\n`;
  }
  return licenseSection;
}

//function to generate markdown for README
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
  let readme = `# ${data.title}\n\n`;
  //license badge
  readme += `${renderLicenseBadge(data.license)}\n\n`;
  //table of contents
  readme += "## Table of Contents\n\n";
  for (const section of sections) {
    if (!(section === "License" && data.license === "None")) {
      readme += `- [${section}](#${section.toLowerCase()})\n`;
    }
  }
  readme += "\n";
  //description
  readme += `## ${sections[0]}\n\n`;
  readme += `${data.desc}\n\n`;
  //installation
  readme += `## ${sections[1]}\n\n`;
  readme += `${data.install}\n\n`;
  //contributors
  readme += `## ${sections[2]}\n\n`;
  readme += `${data.contribute}\n\n`;
  //usage
  readme += `## ${sections[3]}\n\n`;
  readme += `${data.usage}\n\n`;
  //tests
  readme += `## ${sections[4]}\n\n`;
  readme += `${data.test}\n\n`;
  //license
  readme += `${renderLicenseSection(data.license)}\n`;
  //questions
  readme += `## ${sections[6]}\n\n`;
  readme += `Additional questions?\nYou can find me [HERE](https://github.com/${data.username}) on GitHub.\nOr, you can email me at ${data.email}.\n\n`;

  return readme;
}

module.exports = generateMarkdown;
