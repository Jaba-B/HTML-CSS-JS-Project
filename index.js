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


const arrow1 = document.getElementById('question-arrow1');
const response1 = document.getElementById('response1');

const arrow2 = document.getElementById('question-arrow2');
const response2 = document.getElementById('response2');

const arrow3 = document.getElementById('question-arrow3');
const response3 = document.getElementById('response3');

const arrow4 = document.getElementById('question-arrow4');
const response4 = document.getElementById('response4');


arrow1.addEventListener('click', () => {
    arrow1.classList.toggle("rotate");
    response1.classList.toggle("visible");
})

arrow2.addEventListener('click', () => {
    arrow2.classList.toggle("rotate");
    response2.classList.toggle("visible");
})

arrow3.addEventListener('click', () => {
    arrow3.classList.toggle("rotate");
    response3.classList.toggle("visible");
})

arrow4.addEventListener('click', () => {
    arrow4.classList.toggle("rotate");
    response4.classList.toggle("visible");
})