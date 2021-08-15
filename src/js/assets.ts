import moonTexture from '../assets/maps/moon.jpg';
import moonNormal from '../assets/maps/normal.jpg';
import back from '../assets/starfield/back.png';
import bottom from '../assets/starfield/bottom.png';
import front from '../assets/starfield/front.png';
import left from '../assets/starfield/left.png';
import right from '../assets/starfield/right.png';
import top from '../assets/starfield/top.png';
import starSprite from '../assets/starfield/starSprite.png'

export default {
    moon:{
        texture: moonTexture,
        normal: moonNormal,
    },
    starfield: [
        right, left, top, bottom, front, back
    ],
    starSprite
};