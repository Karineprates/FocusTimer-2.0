import state from "./state.js";
import * as timer from "./timer.js"
import * as sounds from './sounds.js'




export function toggleRunning () {
  state.isRunning= document.documentElement.classList.toggle('running')
 


timer.countdown() 

sounds.buttonPressAudio.play()

}

export function togglePause () {

  sounds.buttonPressAudio.play()

  }


export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}


export function set () {
  if (!state.isRunning) {
    state.minutes += 5;
    timer.updateDisplay(state.minutes, state.seconds);
sounds.buttonPressAudio.play()

}
}

export function toRemove () {
  if (!state.isRunning) {
    state.minutes -= 5;
    
  if (state.minutes < 0) {
    state.minutes = 0; 
  }

timer.updateDisplay(state.minutes, state.seconds);
sounds.buttonPressAudio.play()

}
}



