//selector
const musicContainer = document.querySelector('#music-container')
const preBtn = document.querySelector('#prev')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#next')

const audio = document.querySelector('#music')
const progress = document.querySelector('#progress')
const progressContainer = document.querySelector('#progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song title
const songs = [ 'Ozodbek Nazarov Mendirman', 'Shoxrux O`zbegim', 'Sevara Nazarhon Ulug`imsan', 'Yulduz Usmonova Vatan', 'Sherali Jurayev O`zbegim', ]

let songIndex = 2

//Load Song details
loadSong(songs[songIndex]);

//Update Song Details
function loadSong(song){
    title.innerHTML = song;
    audio.src = `audio/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('paly')
    if(isPlaying){
        pauseSong();
    }else {
        playSong();
    }
})

//Play song function
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play()
}

//Pause song function
function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i-fas').classList.remove('fa-pause')
    audio.pause()
}
