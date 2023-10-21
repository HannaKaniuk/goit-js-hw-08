import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {

    player.setCurrentTime(savedTime);

}
player.on('timeupdate', throttle (onPlay, 1000));



