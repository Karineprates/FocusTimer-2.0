import * as sounds from './sounds.js'




const buttonFlower = document.getElementById('toggleFlower')
const buttonClound =  document.getElementById('toggleClound')
const buttonHouse = document.getElementById('toggleHouse')
const buttonFire=document.getElementById('toggleFire')
const htmlElement = document.documentElement;

let currentModeClass = null;

function toggleModeClass(newModeClass, enableSound) {
    if (currentModeClass === newModeClass) {
    
        return;
    }

  
    if (currentModeClass) {
        switch (currentModeClass) {
            case 'modecity':
                sounds.bgAudioCity.pause();
                break;
            case 'moderelax':
                sounds.bgAudioRelax.pause();
                break;
            case 'modeclound':
                sounds.bgAudioClound.pause();
                break;
            case 'modefire':
                sounds.bgAudioFire.pause();
                break;
            default:
                
                break;
        }
    }

    
    htmlElement.classList.remove(currentModeClass);
    htmlElement.classList.add(newModeClass);

    
    if (enableSound) {
        switch (newModeClass) {
            case 'modecity':
                sounds.bgAudioCity.play();
                break;
            case 'moderelax':
                sounds.bgAudioRelax.play();
                break;
            case 'modeclound':
                sounds.bgAudioClound.play();
                break;
            case 'modefire':
                sounds.bgAudioFire.play();
                break;
            default:
                
                break;
        }
    }

  
    currentModeClass = newModeClass;
}
buttonFlower.addEventListener('click', (event) => {
toggleModeClass('moderelax', true)

})

buttonClound.addEventListener('click', (event) => {
toggleModeClass('modeclound',true)
})

buttonHouse.addEventListener('click', (event) => {
toggleModeClass('modecity',true)
})

buttonFire.addEventListener('click', (event) => {
toggleModeClass('modefire',true)
})