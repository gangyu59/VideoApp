// ScriptEditor.js

// 启用编辑功能
function enableEditing() {
    const scriptContainer = document.getElementById('generated-script');
    const editBtn = document.getElementById('edit-btn');

    // 显示编辑按钮
    editBtn.style.display = 'inline-block';

    // 点击编辑按钮时，允许编辑剧本
    editBtn.addEventListener('click', function() {
        scriptContainer.contentEditable = true;
        editBtn.textContent = '保存'; // 改为保存按钮
        editBtn.removeEventListener('click', enableEditing); // 移除编辑事件
        editBtn.addEventListener('click', saveEditing); // 添加保存事件
    });
}

// 保存编辑后的剧本
function saveEditing() {
    const updatedScript = document.getElementById('generated-script').innerText;
    saveScript(updatedScript); // 保存到 localStorage

    // 恢复编辑按钮为“编辑”状态
    const editBtn = document.getElementById('edit-btn');
    editBtn.textContent = '编辑';
    document.getElementById('generated-script').contentEditable = false; // 禁止继续编辑

    // 更新播放按钮
    const playButton = document.getElementById('toggle-speech-btn');
    playButton.style.display = 'inline-block';
    playButton.textContent = '播放语音';
    playButton.style.backgroundColor = 'green'; // 初始为绿色
}


