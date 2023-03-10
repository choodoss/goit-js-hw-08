import Throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEYLOCAL = "videoplayer-current-time";
let isTimeNow = localStorage.getItem(KEYLOCAL)

function CurrentTime(e) {
    localStorage.setItem(KEYLOCAL, e.seconds);
};

function getCurrentTime(e) {
    if(isTimeNow) {
        player.setCurrentTime(isTimeNow);
        player.off('play', getCurrentTime);
    } 
    player.on('timeupdate', Throttle(CurrentTime, 1000));
};

player.on('play', getCurrentTime);
