// ScriptStorage.js

// 保存剧本到 localStorage
function saveScript(script) {
    localStorage.setItem('generatedScript', script);
}

// 从 localStorage 获取剧本
function loadScript() {
    const savedScript = localStorage.getItem('generatedScript');
    if (savedScript) {
        return savedScript;
    }
    return '';  // 如果没有剧本，返回空字符串
}