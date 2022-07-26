import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_STORAGE = "videoplayer-current-time"
const currentTime = localStorage.getItem(KEY_STORAGE)

player.on('timeupdate', throttle(onTimeSet, 1000));

function onTimeSet({seconds}) {
    localStorage.setItem(KEY_STORAGE, seconds);
}

if (currentTime) {
    player.setCurrentTime(currentTime);
}