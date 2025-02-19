// SpeechService.js

function playSpeech(script) {
    const utterance = new SpeechSynthesisUtterance(script);
    window.speechSynthesis.speak(utterance);
}