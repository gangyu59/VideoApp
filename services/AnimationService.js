// AnimationService.js

// 生成动画：逐个场景显示并播放语音
function generateAnimation(script) {
    const scenes = script.split('\n'); // 假设每个场景是以换行符分隔的
    const container = document.getElementById('animation-container');
    container.innerHTML = ''; // 清空现有内容

    scenes.forEach((sceneText, index) => {
        const sceneElement = document.createElement('div');
        sceneElement.classList.add('scene');
        sceneElement.innerHTML = formatScript(sceneText);  // 使用 formatScript 格式化内容
        container.appendChild(sceneElement);

        // 为每个场景添加动画
        sceneElement.style.animation = `fadeIn 2s ease-in-out ${index * 3}s forwards`;

        // 在每个场景显示时播放相应的语音
        const utterance = new SpeechSynthesisUtterance(sceneText);
        utterance.onstart = () => {
            sceneElement.style.animationPlayState = 'running'; // 开始播放语音时显示动画
        };
        window.speechSynthesis.speak(utterance);
    });
}

// 语音播放时逐步显示每个场景的动画
function generateAnimationWithSpeech(script) {
    const scenes = script.split('\n'); // 假设每个场景是以换行符分隔的
    const container = document.getElementById('animation-container');
    container.innerHTML = ''; // 清空现有内容

    scenes.forEach((sceneText, index) => {
        const sceneElement = document.createElement('div');
        sceneElement.classList.add('scene');
        sceneElement.innerHTML = formatScript(sceneText); // 格式化剧本文本
        container.appendChild(sceneElement);

        // 为每个场景添加动画
        sceneElement.style.animation = `fadeIn 2s ease-in-out ${index * 3}s forwards`;

        // 在每个场景显示时播放相应的语音
        const utterance = new SpeechSynthesisUtterance(sceneText);
        utterance.onstart = () => {
            sceneElement.style.animationPlayState = 'running'; // 开始播放语音时显示动画
        };
        window.speechSynthesis.speak(utterance);
    });
}