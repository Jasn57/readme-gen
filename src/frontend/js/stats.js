const languages = document.getElementById('stat-langgraph');
const commits = document.getElementById('stat-commitgraph');

let stat_output = ""

languages.addEventListener('click', async () => {
    stat_output + "![](https://nirzak-streak-stats.vercel.app/?user=YOURUSERNAMEHERE&theme=dark&hide_border=false)"
});

commits.addEventListener('click', async () => {
    stat_output + "![](https://github-readme-stats.vercel.app/api/top-langs/?username=YOURUSERNAMEHERE&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)"
});
                           
