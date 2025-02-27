// 生成场景背景和角色的函数
function addCharacterToScene(sceneElement) {
    const animationPath = "assets/cat.json";  // 本地 Lottie 动画路径

    // 创建 Lottie 动画组件
    const lottiePlayer = document.createElement('lottie-player');
    lottiePlayer.setAttribute("src", animationPath);
    lottiePlayer.setAttribute("background", "transparent");
    lottiePlayer.setAttribute("speed", "1");
    lottiePlayer.setAttribute("style", "width: 100%; max-width: 300px; height: 250px;");
    lottiePlayer.setAttribute("loop", "");
    lottiePlayer.setAttribute("autoplay", "");

    // 插入动画
    sceneElement.appendChild(lottiePlayer);

    console.log("Added Lottie animation to scene:", animationPath);
}

// 加载Lottie动画的函数
function loadLottieAnimation(sceneElement, animationPath) {
    const animationContainer = document.createElement('div');
    animationContainer.style.position = 'absolute';  // 确保角色在场景中显示
    animationContainer.style.width = '100%';
    animationContainer.style.height = '100%';

    sceneElement.appendChild(animationContainer);  // 将动画容器添加到场景中

    console.log("Loading Lottie animation from:", animationPath);  // 打印出路径确认

    // 加载Lottie动画
    const animation = lottie.loadAnimation({
        container: animationContainer,  // 指定容器
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath  // 动画路径
    });

    animation.addEventListener('DOMLoaded', function () {
        console.log("Lottie animation successfully loaded into the container.");
    });

    animation.addEventListener('error', function (error) {
        console.error("Error loading Lottie animation:", error);  // 打印错误信息
    });

    console.log(`Lottie animation for ${animationPath} loaded into scene.`);
}

