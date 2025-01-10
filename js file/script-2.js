const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseIcon.innerHTML = '&#10074;&#10074;'; // Pause symbol (two vertical bars)
    } else {
        video.pause();
        playPauseIcon.innerHTML = '&#9658;'; // Play symbol (triangle)
    }
});

// Ensure the play/pause icon updates correctly if the video is paused or played using other controls
video.addEventListener('play', () => {
    playPauseIcon.innerHTML = '&#10074;&#10074;';
});

video.addEventListener('pause', () => {
    playPauseIcon.innerHTML = '&#9658;';
});