// GPTService.js

const apiKey = '84fba46b577b46f58832ef36527e41d4'; // 替换为你的实际 API 密钥
const url = 'https://gpt4-111-us.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-02-01';

function getGPTResponse(userInput, callback) {
    const headers = {
        'Content-Type': 'application/json',
        'api-key': apiKey,  // API 密钥
    };

    const body = JSON.stringify({
        model: 'gpt-4o',  // 使用 gpt-4o 模型
        messages: [
            {
                role: 'user',
                content: userInput  // 用户输入的主题或关键词
            }
        ],
        max_tokens: 1000,
        temperature: 0.7
    });

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(data => {
        const gptReply = data.choices[0].message.content.trim();
        callback(gptReply);  // 调用回调函数处理生成的剧本
    })
    .catch(error => {
        console.error("fetchGPTResponse error:", error);
        alert('发生错误');
    });
}