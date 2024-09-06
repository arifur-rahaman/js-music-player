let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctlrIcon = document.getElementById("ctrlIcon");

console.log("Script loaded");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  console.log("Metadata loaded");
};

function playPause() {
  console.log("Play/Pause button clicked");
  if (ctlrIcon.classList.contains("fa-pause")) {
    song.pause();
    ctlrIcon.classList.remove("fa-pause");
    ctlrIcon.classList.add("fa-play");
    console.log("Paused");
  } else {
    song.play();
    ctlrIcon.classList.add("fa-pause");
    ctlrIcon.classList.remove("fa-play");
    console.log("Playing");
  }
}

// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let ctlrIcon = document.getElementById("ctrlIcon"); // Assuming the icon element has this ID

// // Ensure FontAwesome classes are loaded (if using FontAwesome)
// if (ctlrIcon.classList) {
//   // Check if classList is supported
//   ctlrIcon.classList.add("fa", "fa-play"); // Set initial icon class to "fa-play"
// }

// song.onloadedmetadata = function () {
//   progress.max = song.duration;
// };

// function playPause() {
//   if (song.paused) {
//     // Check if the song is currently paused
//     song.play();
//     if (ctlrIcon.classList) {
//       // Check if classList is supported (again)
//       ctlrIcon.classList.remove("fa-play");
//       ctlrIcon.classList.add("fa-pause");
//     } else {
//       // Update icon state without classList (alternative approach)
//       ctlrIcon.innerHTML = "<i class='fa fa-pause'></i>"; // Replace with your icon change logic
//     }
//   } else {
//     song.pause();
//     if (ctlrIcon.classList) {
//       ctlrIcon.classList.remove("fa-pause");
//       ctlrIcon.classList.add("fa-play");
//     } else {
//       // Update icon state without classList (alternative approach)
//       ctlrIcon.innerHTML = "<i class='fa fa-play'></i>"; // Replace with your icon change logic
//     }
//   }
// }

// // Attach the playPause function to the icon's click event
// ctlrIcon.addEventListener("click", playPause);
