// main.js

let currentUtterance = null;  // 存储当前正在播放的语音实例

document.getElementById('generate-btn').addEventListener('click', function() {
    const keyword = document.getElementById('keyword').value;

    if (keyword) {
        // 调用 getGPTResponse 函数生成剧本
        getGPTResponse(`为主题 "${keyword}" 生成一个短视频剧本。`, function(gptReply) {
            // 格式化并显示生成的剧本
            document.getElementById('generated-script').innerHTML = formatScript(gptReply);

            // 显示播放按钮
            document.getElementById('toggle-speech-btn').style.display = 'inline-block';
            document.getElementById('toggle-speech-btn').textContent = '播放语音';
            document.getElementById('toggle-speech-btn').style.backgroundColor = 'green'; // 初始为绿色

            // 绑定播放/停止按钮事件
            document.getElementById('toggle-speech-btn').addEventListener('click', function() {
                toggleSpeech(gptReply);
            });
        });
    } else {
        alert('请输入关键词或选择主题');
    }
});

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

// 格式化生成的剧本文本
function formatScript(script) {
    let formattedScript = script;

    // 格式化标题（例如：**标题：xxx** -> <strong>标题：xxx</strong>）
    formattedScript = formattedScript.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // 格式化场景描述（例如：**场景 1** -> <span class="scene">场景 1</span>）
    formattedScript = formattedScript.replace(/\*\*场景\s*(\d+)\*\*/g, '<span class="scene">场景 $1</span>');
    
    // 格式化角色台词（例如：**杰瑞**: “台词” -> <div class="character">杰瑞: </div> “台词”）
    formattedScript = formattedScript.replace(/\*\*(.*?)\*\*\s*[:：]\s*(.*?)\*/g, '<div class="character">$1:</div> $2');

    // 添加换行符来区分每个角色的台词
    formattedScript = formattedScript.replace(/\n/g, '<br>');

    return formattedScript;
}