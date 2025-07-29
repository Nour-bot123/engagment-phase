document.addEventListener("DOMContentLoaded", function () {
  const features = document.querySelectorAll('.features-list li');
  features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
      features.forEach(f => {
        if (f !== feature) {
          f.classList.add('blurred');
        } else {
          f.classList.add('active');
        }
      });
    });
    feature.addEventListener('mouseleave', () => {
      features.forEach(f => {
        f.classList.remove('blurred', 'active');
      });
    });
  });
});