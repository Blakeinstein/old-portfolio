import moonTexture from 'url:../assets/maps/moon_4k_color_brim16.jpg';
import moonNormal from 'url:../assets/maps/moon_4k_normal.jpg';
import back from 'url:../assets/starfield/back.png';
import bottom from 'url:../assets/starfield/bottom.png';
import front from 'url:../assets/starfield/front.png';
import left from 'url:../assets/starfield/left.png';
import right from 'url:../assets/starfield/right.png';
import top from 'url:../assets/starfield/top.png';
import starSprite from 'url:../assets/starfield/starSprite.png'

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