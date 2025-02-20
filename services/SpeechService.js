// SpeechService.js

let currentUtterance = null;  // 存储当前正在播放的语音实例

// 播放语音
function playSpeech(script) {
    const utterance = new SpeechSynthesisUtterance(script);
    window.speechSynthesis.speak(utterance);
}

// toggleSpeech 函数：播放或停止语音，并展示动画
function toggleSpeech(script) {
    const container = document.getElementById('animation-container'); // 用于显示动画的容器

    // 判断是否正在播放语音
    if (currentUtterance) {
        window.speechSynthesis.cancel();  // 如果正在播放语音，停止它
        document.getElementById('toggle-speech-btn').textContent = '播放语音';  // 切换为播放按钮
        document.getElementById('toggle-speech-btn').style.backgroundColor = 'green';  // 切换为绿色
        currentUtterance = null;  // 清除当前播放的语音

        // 清空动画显示区域
        container.innerHTML = '';
    } else {
        // 获取最新的剧本内容
        const latestScript = localStorage.getItem('generatedScript') || script;

        // 开始播放语音
        currentUtterance = new SpeechSynthesisUtterance(latestScript);
        window.speechSynthesis.speak(currentUtterance);

        // 切换按钮为停止播放
        document.getElementById('toggle-speech-btn').textContent = '停止播放';  // 切换为停止按钮
        document.getElementById('toggle-speech-btn').style.backgroundColor = 'red';  // 切换为红色

        // 展示动画
        generateAnimationWithSpeech(latestScript); // 调用 AnimationService.js 中的动画生成
    }
}