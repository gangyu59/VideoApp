// /services/styleService.js

// 格式化生成的剧本文本
function formatScript(script) {
    let formattedScript = script;

    // 格式化标题（**标题：xxx** -> <strong>标题：xxx</strong>）
    formattedScript = formattedScript.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // 格式化场景描述（**场景 1** -> <span class="scene">场景 1</span>）
    formattedScript = formattedScript.replace(/\*\*场景\s*(\d+)\*\*/g, '<span class="scene">场景 $1</span>');

    // 修复角色台词格式，确保冒号正确放置
    formattedScript = formattedScript.replace(/\*\*(.*?)\*\*\s*[:：]?\s*(.*?)(?:\n|$)/g, function (match, character, dialogue) {
        if (dialogue.trim() === "") {
            return `<div class="character">${character}</div>`;
        } else {
            return `<div class="character">${character}:</div> ${dialogue}`;
        }
    });

    // 添加换行符来区分每个角色的台词
    formattedScript = formattedScript.replace(/\n/g, '<br>');

    return formattedScript;
}