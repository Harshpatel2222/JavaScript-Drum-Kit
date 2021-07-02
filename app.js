function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
    // console.log(key);
}

window.addEventListener('keydown', playSound)

function removeTransition(e) {
    if (e.propertyName != 'transform') return;

    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));