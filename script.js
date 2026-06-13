const line = document.getElementById('line');

let angle = 0;

// Apply required styles
line.style.width = '200px';
line.style.height = '2px';
line.style.backgroundColor = '#000000';
line.style.position = 'absolute';
line.style.top = '50%';
line.style.left = '50%';
line.style.transformOrigin = 'center center';

// Rotate continuously
setInterval(() => {
  angle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
