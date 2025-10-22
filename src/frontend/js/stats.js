const languages = document.getElementById('stat-langgraph');
const commits = document.getElementById('stat-commitgraph');
const nam = document.getElementById('github-username');

let stat_output = "";

languages.addEventListener('click', async () => {
    const username = nam.value;
    stat_output += `![](https://nirzak-streak-stats.vercel.app/?user=${username}&theme=dark&hide_border=false)`;
});

commits.addEventListener('click', async () => {
    const username = nam.value;
    stat_output += `![](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)`;
});
