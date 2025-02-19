// SpeechService.js

function playSpeech(script) {
    const utterance = new SpeechSynthesisUtterance(script);
    window.speechSynthesis.speak(utterance);
}

function toggleSpeech(script) {
    // 判断是否正在播放语音
    if (currentUtterance) {
        window.speechSynthesis.cancel();  // 如果正在播放语音，停止它
        document.getElementById('toggle-speech-btn').textContent = '播放语音';  // 切换为播放按钮
        document.getElementById('toggle-speech-btn').style.backgroundColor = 'green';  // 切换为绿色
        currentUtterance = null;  // 清除当前播放的语音
    } else {
        // 开始播放语音
        currentUtterance = new SpeechSynthesisUtterance(script);
        window.speechSynthesis.speak(currentUtterance);
        document.getElementById('toggle-speech-btn').textContent = '停止播放';  // 切换为停止按钮
        document.getElementById('toggle-speech-btn').style.backgroundColor = 'red';  // 切换为红色
    }
}