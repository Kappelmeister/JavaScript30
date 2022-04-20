
const keys = Array.from(document.querySelectorAll('.key'));//transforming this into array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop de function in case there is no keycode element

    audio.currentTime = 0; //rewind to the start so we can hit the key and play instantly
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it is not a transform
    e.target.classList.remove('playing');
}