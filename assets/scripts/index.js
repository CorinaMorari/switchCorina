'use strict'
const body = document.querySelector('body')
const switchDiv = document.createElement('label');
const inputCheckbox = document.createElement('input');
const spanSlider = document.createElement('span');

switchDiv.classList.add('switch');
switchDiv.setAttribute('for','idCheckbox');
inputCheckbox.classList.add('checkbox')
inputCheckbox.setAttribute('type','checkbox');
inputCheckbox.setAttribute('id','idCheckbox');
spanSlider.classList.add('slider');
spanSlider.classList.add('round')

body.append(switchDiv);
switchDiv.append(inputCheckbox);
switchDiv.append(spanSlider);

inputCheckbox.addEventListener('change', () =>{
    body.classList.toggle('dark');
    spanSlider.classList.add('bounceRightClass');
})

