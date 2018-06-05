const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const playToggleButton = player.querySelector(".toggle")

function togglePlay() {
  if (video.paused)
    video.play()
  else
    video.pause()
}

function updateToggleButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  playToggleButton.textContent = icon
}

video.addEventListener("play", updateToggleButton)
video.addEventListener("pause", updateToggleButton)

playToggleButton.addEventListener("click", togglePlay)
