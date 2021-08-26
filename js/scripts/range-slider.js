'use strict';
if (document.querySelector('#a')) {
  const sliderA = document.querySelector('#a');//slider
  const sliderB = document.querySelector('#b');
  const sliderTrack = document.querySelector('.filter-slider');
  //console.log(sliderA, '!!!!!!!!!!!!!!!!!!!!!!!');

  let minSlider = sliderA;
  let maxSlider = sliderB;
  
  const sliderParams = {
    progressionColour: '#ffbc9e',//'rgba(248, 247, 244, 1)',
    mainColour: 'rgba(248, 247, 244, 0.5)',
  };
  const {progressionColour, mainColour} = sliderParams;

  const minVal = sliderA.min;
  const maxVal = sliderA.max;

  const paintSlider = () => {
    sliderTrack.style.backgroundImage = `linear-gradient(
      to right,
      ${mainColour} 0%,
      ${mainColour} ${Number(minSlider.value) / (Number(maxVal)-0)*100}%, 
      ${progressionColour} ${Number(minSlider.value) / (Number(maxVal)-0)*100}%,
      ${progressionColour} ${Number(maxSlider.value) / (Number(maxVal)-0)*100}%, 
      ${mainColour} ${Number(maxSlider.value) / (Number(maxVal)-0)*100}%, 
      ${mainColour} 100%)`;
    /*
    `linear-gradient(
      to right, 
    rgba(248, 247, 244, 0.5) 0%,
    rgba(248, 247, 244, 0.5) (100/ 600) *100%, 
    deeppink (100 / 600) *100%,
    deeppink (500/ 600) * 100%, 
    rgba(248, 247, 244, 0.5)  (500/ 700) * 100%,
    rgba(248, 247, 244, 0.5) 100%)`;
    */
    /*
      to right, 
      mainColour 0%,
      mainColour ${Number(minSlider.value) / (Number(maxVal)-0)*100}%, 
      progressionColour ${Number(minSlider.value) / (Number(maxVal)-0)*100}%,
      progressionColour ${Number(maxSlider.value) / (Number(maxVal)-0)*100}%, 
      mainColour ${Number(maxSlider.value) / (Number(maxVal)-0)*100}%, 
      mainColour 100%)`;
      */
  };

  const sliderChangeHandler = function () {
    // const val = minSlider.value;
    // output.textContent = val + ' ' + maxSlider.value;
  
    /*
    if (minSlider.value > maxSlider.value) {
      console.log('!!!BASYA!!!');
      const newVal = maxSlider;
      maxSlider = minSlider;
      minSlider = newVal;
    }
    */
  
    if (Number(minSlider.value) > Number(maxSlider.value)) {
      // console.log('!!!BASYA!!!', minSlider.value, '   ', maxSlider.value, minSlider.value > maxSlider.value);
  
      const newVal = maxSlider;
      maxSlider = minSlider;
      minSlider = newVal;
    }
    
    paintSlider();
  };
  
  paintSlider();
  sliderA.addEventListener('input', sliderChangeHandler);
  sliderB.addEventListener('input', sliderChangeHandler);
  
  /*
  const sliderChangeHandler = function (evt) {
    console.log(evt.target.value, '!!!!!!!!!!!!!!!');
  };
  
  sliderA.addEventListener('input', sliderChangeHandler);
  sliderB.addEventListener('input', sliderChangeHandler);
  */
}



