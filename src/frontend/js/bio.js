let bio_output = "";

function updateBio() {
  const bio = document.getElementById('bio_input').value.trim();
  if (!bio) {
    console.log("add bio");
    bio_output = ""; 
  } else {
    bio_output = bio; 
  }
}
