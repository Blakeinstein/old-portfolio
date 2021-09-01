import Swup from 'swup';
import SwupSlideTheme from "@swup/slide-theme";
import SwupHeadPlugin from '@swup/head-plugin';

const swup = new Swup({
  plugins: [ new SwupSlideTheme(), new SwupHeadPlugin({
    "persistAssets": true
  })],
});