const bio = document.getElementById('bio_input');

let bio_output = "";

if (!bio.value) {
  console.log("add bio");
} else {
  bio_output += bio.value;
}
