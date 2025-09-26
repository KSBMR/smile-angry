// javascript.js
document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;
        
        const deltaX = event.clientX - eyeX;
        const deltaY = event.clientY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);
        
        const maxDistance = 15;
        const pupilX = maxDistance * Math.cos(angle);
        const pupilY = maxDistance * Math.sin(angle);
        
        eye.style.setProperty('--pupil-x', `${pupilX}px`);
        eye.style.setProperty('--pupil-y', `${pupilY}px`);
    });
});
