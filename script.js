document.addEventListener('DOMContentLoaded', () => {
    // Add floating hearts effect
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            opacity: ${Math.random() * 0.5 + 0.5};
            animation: floatUp ${Math.random() * 3 + 2}s linear forwards;
            z-index: 1;
        `;
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create floating hearts every 300ms
    setInterval(createHeart, 300);

    // Add keyframe animation for floating hearts
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
            }
        }
    `;
    document.head.appendChild(style);
});
