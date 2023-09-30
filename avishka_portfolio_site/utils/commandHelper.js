const COMMANDS = [
  {
    command: "About",
    description: "About Me",
  },
  {
    command: "Education",
    description: "My Education",
  },
  {
    command: "Skills",
    description: "My Tech Skills",
  },
  // {
  //   command: "projects",
  //   description: "My Tech Projects",
  // },
  {
    command: "Contact",
    description: "Contact Me",
  },
  {
    command: "Blog",
    description: "Visit my blog",
  },
  {
    command: "Resume",
    description: "Here is my Resume",
  },
  // {
  //   command: "youtube",
  //   description: "Visit my youtube channel (@avishkasooriyapperuma5529)",
  // },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Avishka. I am ${getAge(
    "February 24, 2000"
  )} and I\'m a DevOps Engineer in Proffession
    <br/><br/>
    I have worked with various tools such as Jenkins, Ansible, Git and Docker. I have also worked with the AWS cloud platform and worked on automating infrastructure using Terraform and Ansible(Iac). I’m familiar with SQL, Linux, and scripting in Python and Shell.
    <br /><br />
    I am a former Community Co-lead of <a href="https://www.fossnsbm.org/" target="_blank">FOSS Community chapter of NSBM University</a> ('22-23). And I am a fresh graduate from University college of Dublin, Ireland with a BSc (Hons) in Computer Science with a Second Class Honours Grade 01 .
    <br /><br />
    Simply, I am a tech enthusiast, a fast learner, and a good team player. I like to meet new people with new knowledge and share my knowledge with them and gain more.
    <br /><br />
  `,
  education:
    () => `I completed my A/Ls at <a href="https://www.anandacollege.edu.lk/" target="_blank">Ananda College,Colombo 10</a> and completed my Bachelor's Degree from <a href="https://www.nsbm.ac.lk/" target="_blank">NSBM Green University town</a>, which is affiliated with <a href="https://www.ucd.ie/" target="_blank">University College Dublin</a>.`,
  skills: () => `
  <br /><br />
  <div class="skill"><b>core</b>: Bash, Python, Java, Git<br /></div><br /><br />
  <div class="skill"><b>frameworks</b>: Terraform(Iac), Jenkins, Groovy, Docker, Kubernates, React, NextJS, Laravel,<br /></div><br /><br />
  <div class="skill"><b>Cloud</b>:AWS, Digital Ocean, Azure, OVH <br /></div>
  <div class="skill"><b>database</b>:MySQL, PostgreSQL <br /></div>
  <br /><br />
  `,
  projects: getProjects,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://medium.com/@avishkadilshan400", "_blank");
    return "";
  },
  youtube: () => {
    window.open("https://www.youtube.com/channel/UCY7KaU033v6xu9ANv9N5AOQ", "_blank");
    return "";
  },

  resume: () => {
    const filePath = '/Avishka_Sooriyapperuma.pdf';
    window.open(filePath, "_blank");
    return "";
  },
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}

// Function to process user input
function processInput(CONTENTS) {
  const lowercasedInput = CONTENTS.toLowerCase();

  // Now use lowercasedInput to compare with commands
  const matchingCommand = COMMANDS.find((cmd) => cmd.command === lowercasedInput);

  if (matchingCommand) {
    // Do something with the matching command
    console.log(`Executing command: ${matchingCommand.command}`);
  } else {
    // Handle invalid command
    console.log("Invalid command");
  }
}

