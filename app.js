const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');

wrapper.addEventListener('mousemove', e => {
    topLayer.style.width = e.clientX + 'px';
});
