const java = document.getElementById('lang-java');
const css = document.getElementById('lang-css');
const html = document.getElementById('lang-html');
const javascript = document.getElementById('lang-javascript');
const python = document.getElementById('lang-python');
const c = document.getElementById("lang-c");
const cplusplus = document.getElementById("lang-c++");
const csharp = document.getElementById("lang-c#");
const go = document.getElementById("lang-go");
const rust = document.getElementById("lang-rust");
const php = document.getElementById("lang-php");
const kotlin = document.getElementById("lang-kotlin");
const swift = document.getElementById("lang-swift");
const lua = document.getElementById("lang-lua");
const typescript = document.getElementById('lang-typescript');

let lang_output = "";

java.addEventListener('click', () => { 
   lang_output += "![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) ";
});

css.addEventListener('click', () => {
   lang_output += "![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ";
});  

html.addEventListener('click', () => {
   lang_output += "![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ";
});

javascript.addEventListener('click', () => {
   lang_output += "![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ";
});

python.addEventListener('click', () => {
   lang_output += "![Python](https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ";
});

c.addEventListener('click', () => {
   lang_output += "![C](https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black)"
});

cplusplus.addEventListener('click', () => {
   lang_output += "![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)"
});

csharp.addEventListener('click', () => {
   lang_output += "![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)"
});

go.addEventListener('click', () => {
   lang_output += "![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)"
});

rust.addEventListener('click', () => {
   lang_output += "![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)"
});

php.addEventListener('click', () => {
   lang_output += "![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)"
});

kotlin.addEventListener('click', () => {
   lang_output += "![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)"
});

swift.addEventListener('click', () => {
   lang_output += "![Swift](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)"
});

lua.addEventListener('click', () => {
   lang_output += "![Lua](https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white)"
});

typescript.addEventListener('click', () => {
   lang_output += "![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)"
});

