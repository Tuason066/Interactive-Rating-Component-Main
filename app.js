const ratings = document.querySelectorAll('.btn-container input');
let rate;

ratings.forEach(rating => {
    // hover elements  bg & clr
    hoverElement(rating);

    if(rating.value == localStorage.getItem('rate')) {
        rating.style.backgroundColor = 'rgb(149, 158, 172)';
        rating.style.color = 'rgb(255, 255, 255)';
        activeElement(rating);
    };

    rating.addEventListener('click', () => {

        ratings.forEach(item => {
            if(rating !== item) {
                // default elements bg & clr
                item.style.backgroundColor = 'rgba(149, 158, 172, 0.2)';
                item.style.color = 'rgb(149, 158, 172)';

                hoverElement(item);
            };
            // active element  bg & clr
            rating.style.backgroundColor = 'rgb(149, 158, 172)';
            rating.style.color = 'rgb(255, 255, 255)';
            rate = parseInt(rating.value);
            activeElement(rating);
        });

    });

});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(rate) {
        localStorage.setItem("rate", rate);
        form.submit();
    };
});

// ====== base color
// background-color: rgba(149, 158, 172, 0.2);
// color: rgb(149, 158, 172);

// ====== hover color
// $orange: rgb(251, 116, 19);
// $white: rgb(255, 255, 255);

// ====== active color
// $light-grey: rgb(149, 158, 172);
// $white: rgb(255, 255, 255);

function hoverElement(element) {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'rgb(251, 116, 19)';
        element.style.color = 'rgb(255, 255, 255)';
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'rgba(149, 158, 172, 0.2)';
        element.style.color = 'rgb(149, 158, 172)';
    });
};

function activeElement(element) {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'rgb(149, 158, 172)';
        element.style.color = 'rgb(255, 255, 255)';
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'rgb(149, 158, 172)';
        element.style.color = 'rgb(255, 255, 255)';
    });
};