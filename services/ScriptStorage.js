// ScriptStorage.js

// 保存剧本到 localStorage
function saveScript(script) {
    localStorage.setItem('generatedScript', script);
}

// 从 localStorage 获取剧本
function loadScript() {
    const savedScript = localStorage.getItem('generatedScript');
    if (savedScript) {
        document.getElementById('generated-script').innerHTML = savedScript;
    }
}

// 页面加载时加载已保存的剧本
document.addEventListener('DOMContentLoaded', function() {
    loadScript();
});