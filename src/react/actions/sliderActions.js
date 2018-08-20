import {SliderContent} from '../../Components/Header/sliderContent';

export function getSliderData(slideData) {
    return {
        type: 'SLIDER_DATA',
        payload: slideData,
    }
}

function getSlideData(currentIndex) {
   const index = (currentIndex === SliderContent.length - 1) ? 0 : currentIndex + 1;
   return SliderContent[index];
}

export function loadSliderData(intervalSec = 5, currentIndex = -1) {
    setInterval(getSlideData(currentIndex), intervalSec*1000);
}