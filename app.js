let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctlrIcon = document.getElementById("ctrlIcon");

// console.log("Script loaded");

/**
 * onloadedmetadata is a JavaScript event that is triggered when the metadata of a media element (like an audio or video file) has been loaded successfully. Metadata typically includes information such as:

Duration: The total length of the media.
Dimensions: The width and height of a video.
Bitrate: The data rate of the media.
Codec: The encoding format used for the media.
When is it used?

The onloadedmetadata event is commonly used to:

Initialize a progress bar: Set the maximum value of a progress bar to the duration of the media.
Display metadata information: Show the duration, dimensions, or other metadata to the user.
Start playback automatically: Begin playing the media once the metadata is loaded.
Perform other actions based on the media's characteristics: For example, adjusting the volume or quality settings.
 */
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  // console.log("Metadata loaded");
};

function playPause() {
  // console.log("Play/Pause button clicked");
  if (ctlrIcon.classList.contains("fa-pause")) {
    song.pause();
    ctlrIcon.classList.remove("fa-pause");
    ctlrIcon.classList.add("fa-play");
    // console.log("Paused");
  } else {
    song.play();
    ctlrIcon.classList.add("fa-pause");
    ctlrIcon.classList.remove("fa-play");
    // console.log("Playing");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

//to play from anywhere in the progress bar
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctlrIcon.classList.add("fa-pause");
  ctlrIcon.classList.remove("fa-play");
};
