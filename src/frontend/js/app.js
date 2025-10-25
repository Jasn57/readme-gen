const submit = document.getElementById('submit');

let credit = "<!-- Created with readme-gen (https://github.com/Jasn57/readme-gen) -->"

submit.addEventListener('click', () => {
  updateBio();
  
  let output = `
    <section id="readme">
      <div id="bio">
        <h3>About Me</h3>
        <p>${bio_output}</p>
      </div>
      <div id="tech_stack">
        <h3>Tech Stack</h3>
        <p>${lang_output}</p>
        <p>${tool_output}</p>
      </div>
      <div id="stats">
        <h3>Stats</h3>
        <p>${stat_output}</p>
      </div>
      <div id="credits">
      <p>${credit}</p>
      </div
    </section>
  `;

  document.getElementById("output").innerHTML = output;
});
