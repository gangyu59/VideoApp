// main.js

document.getElementById('generate-btn').addEventListener('click', function() {
    const keyword = document.getElementById('keyword').value;

    // 显示加载指示器
    const hourglass = document.getElementById('hourglass');
    hourglass.style.display = 'block';  // 显示 hourglass

    if (keyword) {
        // 调用 getGPTResponse 函数生成剧本
        getGPTResponse(`为主题 "${keyword}" 生成一个短视频剧本。`, function(gptReply) {
            // 格式化并显示生成的剧本
            const formattedScript = formatScript(gptReply);
            document.getElementById('generated-script').innerHTML = formattedScript;

            // 保存生成的剧本到 localStorage
            saveScript(formattedScript);

            // 隐藏加载指示器
            hourglass.style.display = 'none'; // 隐藏 hourglass

            // 显示播放按钮
            const playButton = document.getElementById('toggle-speech-btn');
            playButton.style.display = 'inline-block';
            playButton.textContent = '播放语音';
            playButton.style.backgroundColor = 'green'; // 初始为绿色

            // 绑定播放/停止按钮事件
            playButton.addEventListener('click', function() {
                toggleSpeech(gptReply);
            });

            // 显示编辑按钮
            const editButton = document.getElementById('edit-btn');
            editButton.style.display = 'inline-block'; // 确保编辑按钮显示

            // 启用编辑功能
            enableEditing();
        });
    } else {
        alert('请输入关键词或选择主题');
    }
});
