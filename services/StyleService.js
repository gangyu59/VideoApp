// /services/styleService.js

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