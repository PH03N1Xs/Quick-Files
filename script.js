document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('videoPlayer');
    const playPauseButton = document.getElementById('playPause');
    const seekBar = document.getElementById('seekBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');
    const muteButton = document.getElementById('mute');
    const volumeBar = document.getElementById('volumeBar');
    const fullScreenButton = document.getElementById('fullScreen');

    // Play and Pause the video
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Update the seek bar as the video plays
    video.addEventListener('timeupdate', () => {
        const value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;

        // Update the current time display
        const minutes = Math.floor(video.currentTime / 60);
        const seconds = Math.floor(video.currentTime % 60);
        currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Update the duration display
        const totalMinutes = Math.floor(video.duration / 60);
        const totalSeconds = Math.floor(video.duration % 60);
        durationDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
    });

    // Seek video
    seekBar.addEventListener('input', () => {
        const time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    // Mute/Unmute video
    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // Update volume
    volumeBar.addEventListener('input', () => {
        video.volume = volumeBar.value;
    });

    // Fullscreen mode
    fullScreenButton.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome and Safari
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    });
});