const video = document.getElementById("thevideo")
const playbtn = document.getElementById("playbtn")
const progressbar = document.getElementById("progressbar")
const volomeslider = document.getElementById("volomeslider")
const mutebtn = document.getElementById("mutebtn")
const fullscreen = document.getElementById("fullscreen")
////play button
playbtn.addEventListener('click', () => {
    if (video.paused) {
        video.play()
        playbtn.textContent = "STOP"
    } else {
        video.pause()
        playbtn.textContent = "PLAY"
    }
})

////progress bar update

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressbar.style.width = `${progress}%`
})

////on click progress bar for postion

const progresscountiner = document.querySelector('.progress-countiner')
progresscountiner.addEventListener('click', (e) => {
    const clickpostion = e.offsetx / progresscountiner.offsetWidth;
    video.currentTime = clickpostion * video.duration
})

////sound contorol

volomeslider.addEventListener('input', () => {
    video.volume = volomeslider.value
    if (video.volume === 0) mutebtn.textContent = "NO SOUND"
    else mutebtn.textContent = "SOUND"
})

////for mute contorol

mutebtn.addEventListener('click', () => {
    video.muted = !video.muted
    mutebtn.textContent = video.muted ? 'SOUND' : 'NO SOUND'
})

/// fullscreen

fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) video.requestFullscreen()
})
