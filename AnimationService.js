// AnimationService.js

// 生成动画：逐个场景显示并播放语音
function generateAnimation(script) {
    const scenes = script.split('\n'); // 假设每个场景是以换行符分隔的
    const container = document.getElementById('animation-container');
    container.innerHTML = ''; // 清空现有内容

    scenes.forEach((sceneText, index) => {
        const sceneElement = document.createElement('div');
        sceneElement.classList.add('scene');
        sceneElement.innerHTML = formatScript(sceneText);  // 使用 formatScript 格式化内容
        container.appendChild(sceneElement);

        // 为每个场景添加动画
        sceneElement.style.animation = `fadeIn 2s ease-in-out ${index * 3}s forwards`;

        // 在每个场景显示时播放相应的语音
        const utterance = new SpeechSynthesisUtterance(sceneText);
        utterance.onstart = () => {
            sceneElement.style.animationPlayState = 'running'; // 开始播放语音时显示动画
        };
        window.speechSynthesis.speak(utterance);
    });
}

// 清除 HTML 标签的函数
function removeHtmlTags(inputString) {
    // 使用正则表达式清理所有HTML标签，只保留文本
    return inputString.replace(/<[^>]*>/g, '').trim();  // 保留文本并去除前后的空格
}

// 生成动画和语音
async function generateAnimationWithSpeechDall_E(script) {
    console.log("Script received:", script);  // 打印接收到的剧本

    const scenes = script.split(/<br\s*\/?>/);  // 用 <br> 标签来分割场景
    console.log("Scenes split:", scenes);

    const container = document.getElementById('animation-container');
    container.innerHTML = '';  // 清空现有内容
    console.log("Container cleared");

    for (let index = 0; index < scenes.length; index++) {
        const sceneText = scenes[index];
        console.log(`处理场景 ${index + 1}:`, sceneText);  // 打印当前处理的场景

        const sceneElement = document.createElement('div');
        sceneElement.classList.add('scene');
        sceneElement.style.position = 'relative';
        sceneElement.style.opacity = 0;  // 初始时将透明度设置为0，确保动画从不可见开始

        // 直接将文本内容加入到元素中
        sceneElement.innerText = sceneText || "该场景内容缺失";  // 如果场景内容为空，则添加默认文本

        // 为每个场景添加动画样式，使用 fadeIn 动画
        sceneElement.style.animation = `fadeIn 2s ease-in-out ${index * 3}s forwards`;
        console.log(`动画格式 ${index + 1}:`, sceneElement.style.animation);

        // 在容器中添加场景
        container.appendChild(sceneElement);
        console.log(`场景 ${index + 1} 加到容器`);

        // 强制触发浏览器渲染，以便动画正确执行
        sceneElement.offsetHeight;  // 访问此属性强制重绘

        // 使用 setTimeout 确保动画能够立即开始
        setTimeout(() => {
            sceneElement.style.opacity = 1;  // 动画开始时将透明度设置为1，触发fadeIn动画
            sceneElement.style.animationPlayState = 'running';  // 确保动画播放
            console.log(`场景 ${index + 1} 动画开始.`);
        }, 50);  // 延时确保动画生效

        // 生成背景图
        const backgroundImage = await generateSceneImage(sceneText);
        if (backgroundImage) {
            const imgElement = document.createElement("img");
            imgElement.src = backgroundImage;
            imgElement.style.position = 'absolute';
            imgElement.style.width = '100%';
            imgElement.style.height = 'auto';
          	sceneElement.appendChild(imgElement);
        }

        // 添加角色
        addCharacterToScenefromDall_E(sceneElement, `Character for scene ${index + 1}`);

        // 暂时不播放语音，专注于动画部分
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 5000);  // 暂时延迟，动画播放完后再继续
        });

        console.log(`场景 ${index + 1} 动画结束.`);
    }

    console.log("所有场景动画完成.");
}

// 在主函数中调用Lottie动画

// 生成动画和语音
async function generateAnimationWithSpeech(script) {
    console.log("Script received:", script);  // 打印接收到的剧本

    const scenes = script.split(/<br\s*\/?>/);  // 用 <br> 标签来分割场景
    console.log("Scenes split:", scenes);

    const container = document.getElementById('animation-container');
    container.innerHTML = '';  // 清空现有内容
    console.log("Container cleared");

    for (let index = 0; index < scenes.length; index++) {
        const sceneText = scenes[index];
        console.log(`处理场景 ${index + 1}:`, sceneText);  // 打印当前处理的场景

        const sceneElement = document.createElement('div');
        sceneElement.classList.add('scene');
        sceneElement.style.position = 'relative';
        sceneElement.style.opacity = 0;  // 初始时将透明度设置为0，确保动画从不可见开始

        // 直接将文本内容加入到元素中
        sceneElement.innerText = sceneText || "该场景内容缺失";  // 如果场景内容为空，则添加默认文本

        // 为每个场景添加动画样式，使用 fadeIn 动画
        sceneElement.style.animation = `fadeIn 2s ease-in-out ${index * 3}s forwards`;
        console.log(`动画格式 ${index + 1}:`, sceneElement.style.animation);

        // 在容器中添加场景
        container.appendChild(sceneElement);
        console.log(`场景 ${index + 1} 加到容器`);

        // 强制触发浏览器渲染，以便动画正确执行
        sceneElement.offsetHeight;  // 访问此属性强制重绘

        // 使用 setTimeout 确保动画能够立即开始
        setTimeout(() => {
            sceneElement.style.opacity = 1;  // 动画开始时将透明度设置为1，触发fadeIn动画
            sceneElement.style.animationPlayState = 'running';  // 确保动画播放
            console.log(`场景 ${index + 1} 动画开始.`);
        }, 50);  // 延时确保动画生效

        // 添加角色动画
        await addCharacterToScene(sceneElement);

        // 暂时不播放语音，专注于动画部分
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 5000);  // 暂时延迟，动画播放完后再继续
        });

        console.log(`场景 ${index + 1} 动画结束.`);
    }

    console.log("所有场景动画完成.");
}