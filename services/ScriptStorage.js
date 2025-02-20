// ScriptStorage.js

// 保存剧本到 localStorage
function saveScript(script) {
    localStorage.setItem('generatedScript', script);
}

// 从 localStorage 获取剧本
function loadScript() {
    const savedScript = localStorage.getItem('generatedScript');
    if (savedScript) {
        // 格式化并显示保存的剧本
        document.getElementById('generated-script').innerHTML = formatScript(savedScript);
    }
}

// 页面加载时加载已保存的剧本
document.addEventListener('DOMContentLoaded', function() {
    loadScript();
});