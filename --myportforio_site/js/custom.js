'use strict';

// loading

window.addEventListener('load', function () {
    const loadingElement = document.getElementById('loading');
    loadingElement.classList.add('show-logo');
    setTimeout(function () {
        loadingElement.classList.add('hidden');
    }, 1500);
});

// loading only once
// window.addEventListener('load', function () {
//     const isFirstVisit = sessionStorage.getItem('firstVisit');
//     const loadingElement = document.getElementById('loading');

//     if (!isFirstVisit) {
//         loadingElement.style.display = 'block';

//         setTimeout(function () {
//             loadingElement.classList.add('loaded');
//             setTimeout(function () {
//                 loadingElement.style.visibility = 'hidden';
//             }, 1000);
//         }, 3000);

//         sessionStorage.setItem('firstVisit', 'true');
//     } else {
//         loadingElement.style.display = 'none';
//     }
// });


