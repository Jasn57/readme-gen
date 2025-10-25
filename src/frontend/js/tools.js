const vscode = document.getElementById('tool-vscode');
const figma = document.getElementById('tool-figma');
const github = document.getElementById('tool-github');
const linux = document.getElementById('tool-linux');
const virtualbox = document.getElementById('tool-virtualbox');

let tool_output = "";

vscode.addEventListener('click', () => {
  tool_output += "![VS Code](https://img.shields.io/badge/VS%20Code-0078D7?style=for-the-badge&logo=visual-studio-code&logoColor=white) ";
});

figma.addEventListener('click', () => {
  tool_output += "![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ";
});

github.addEventListener('click', () => {
  tool_output += "![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) ";
});

linux.addEventListener('click', () => {
  tool_output += "![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black) ";
});

virtualbox.addEventListener('click', () => {
  tool_output += "![VirtualBox](https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white) ";
});
