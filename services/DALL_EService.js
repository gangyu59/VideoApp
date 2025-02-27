async function fetchImageDall_E(prompt) {
    console.log("Requesting DALL·E image for:", prompt);

    const apiKey = '6uc4qFE0i3iLjCKx9YlFGn6YozykiqV4AorrLrKdTwMCdks0SkL4JQQJ99BBACfhMk5XJ3w3AAABACOG9A2D';  // 替换为你的 API 密钥
    const url = 'https://dall-e-sweden-central.openai.azure.com/openai/deployments/dall-e-3/images/generations?api-version=2024-02-01';  // 使用提供的 URL

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": apiKey,  // 这里 Azure OpenAI 需要 "api-key"
            },
            body: JSON.stringify({
                prompt: prompt,  // 你的图像描述
                n: 1,  // 生成 1 张图片
                size: "1024x1024"  // 设定图像大小
            })
        });

        const data = await response.json();
        console.log('DALL·E Response:', data);

        // 确保返回的数据包含生成的图像URL
        if (data && data.data && data.data.length > 0 && data.data[0].url) {
            return data.data[0].url;  // 返回生成的图像 URL
        } else {
            console.error("DALL·E did not return an image. Response:", data);
            return null;
        }
    } catch (error) {
        console.error("Error fetching image from DALL·E:", error);
        return null;
    }
}

// 生成背景图
async function generateSceneImageDall_E(sceneDescription) {
    console.log("生成背景:", sceneDescription);
    const prompt = `${sceneDescription}, animated style, cinematic, high quality`;
    
    return await fetchImageFromDALL_E(prompt);
}

// 生成角色
async function generateCharacterImageDall_E(characterDescription) {
    console.log("生成角色:", characterDescription);
    const prompt = `${characterDescription}, cartoon character, full-body, high quality`;
    
    return await fetchImageFromDALL_E(prompt);
}

// 给场景添加角色
async function addCharacterToSceneDall_E(sceneElement, characterDescription) {
    console.log("Adding character to scene:", characterDescription);

    const characterImageURL = await generateCharacterImage(characterDescription);
    if (characterImageURL) {
        const characterImg = document.createElement("img");
        characterImg.src = characterImageURL;
        characterImg.style.position = 'absolute';
        characterImg.style.bottom = '10px';  // 放置在底部
        characterImg.style.left = '50%';
        characterImg.style.transform = 'translateX(-50%)';
        characterImg.style.width = '150px';  // 适当缩放角色
        sceneElement.appendChild(characterImg);
    } else {
        console.log("Failed to generate character image.");
    }
}