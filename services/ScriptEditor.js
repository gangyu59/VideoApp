// ScriptEditor.js

// 将可编辑区域与 localStorage 保存同步
function enableScriptEditing() {
    const scriptContainer = document.getElementById('generated-script');
    
    // 使剧本内容可编辑
    scriptContainer.contentEditable = true;

    // 在编辑时实时保存
    scriptContainer.addEventListener('input', function() {
        const updatedScript = scriptContainer.innerText;
        saveScript(updatedScript);  // 实时保存
    });
}