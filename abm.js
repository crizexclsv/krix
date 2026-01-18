let audioEnabled = false;
const enableAudio = () => {
  if (!audioEnabled) {
    audioEnabled = true;
    const audio = document.getElementById('backgroundMusic');
    if (audio) {
      audio.muted = false;
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  }
};
document.addEventListener('click', enableAudio);
document.addEventListener('touchstart', enableAudio); 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const h1 = entry.target.querySelector('h1');
      if (h1) {
        h1.classList.add('show');
      }
      if (entry.target.classList.contains('three') && audioEnabled) {
        const audio = document.getElementById('backgroundMusic');
        if (audio) {
          audio.play().catch(e => console.log('Audio play failed:', e));
        }
      }
    }
  });
});
const hiddenElements = document.querySelectorAll('.page');
hiddenElements.forEach((el) => observer.observe(el));
