const reviews = document.getElementById('reviews');

const dot1 = document.getElementById('review-dot1');
const dot2 = document.getElementById('review-dot2');
const dot3 = document.getElementById('review-dot3');

dot1.addEventListener('click', () => {
    dot1.style.backgroundColor = '#197AFF';
    dot2.style.backgroundColor = '#CBCED6';
    dot3.style.backgroundColor = '#CBCED6';
    reviews.style.justifyContent = 'start';
});

dot2.addEventListener('click', () => {
    dot2.style.backgroundColor = '#197AFF'
    dot1.style.backgroundColor = '#CBCED6'
    dot3.style.backgroundColor = '#CBCED6'
    reviews.style.justifyContent = 'center'
});

dot3.addEventListener('click', () => {
    dot3.style.backgroundColor = '#197AFF';
    dot2.style.backgroundColor = '#CBCED6';
    dot1.style.backgroundColor = '#CBCED6';
    reviews.style.justifyContent = 'end';
});
