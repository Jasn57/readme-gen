const java = document.getElementById('lang-java');
const css = document.getElementById('lang-css');
const html = document.getElementById('lang-html');
const javascript = document.getElementById('lang-javascript');
const python = document.getElementById('lang-python');

let lang_output = ""

java.addEventListener('click', async () => { 
   lang_output + "![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)"
});

css.addEventListener('click', async () => {
    lang_output + "![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)" 
});  

html.addEventListener('click', async () => {
    lang_output + "![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)!" 
});

javascript.addEventListener('click', async () => {
    lang_output + "![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)" 
});

python.addEventListener('click', async () => {
    lang_output + "![Python](https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)" 
});
                   
