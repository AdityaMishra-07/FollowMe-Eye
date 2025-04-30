function movePupil(eyeId, pupilId, mouseX, mouseY) {
    const eye = document.getElementById(eyeId);
    const pupil = document.getElementById(pupilId);
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const radius = 40;

    const pupilX = Math.cos(angle) * radius;
    const pupilY = Math.sin(angle) * radius;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    }

    document.addEventListener('mousemove', (e) => {
    movePupil("eye1", "pupil1", e.clientX, e.clientY);
    movePupil("eye2", "pupil2", e.clientX, e.clientY);
    });


    document.querySelectorAll('.eye').forEach(eye => {
        eye.addEventListener('click', () => {
            eye.style.transform = 'scale(0.9)';
            setTimeout(() => {
            eye.style.transform = 'scale(1)';
            }, 100);
        });
});