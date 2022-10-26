$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
       margin: 48,
        loop: true,
        responsive: {
           0: {
               items: 1.3,
               margin: 32
           },
            768: {
                items: 2,
                margin: 32
            },
            992: {
                items: 2.5,
                margin: 48
            }
        }
    });
});
//video
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__img');
const videoWrap = document.querySelector('.video--wrap');
const video = document.querySelector('#video-file');

videoBtn.addEventListener('click', function (){
    videoPicture.classList.add('none');
    videoWrap.classList.remove('video--overlay');
    videoBtn.classList.add('none');
    if (video.paused){
        video.play()
    }
})
video.addEventListener('click', function (){
    if(video.play){
        video.pause();
        videoPicture.classList.remove('none');
        videoWrap.classList.add('video--overlay');
        videoBtn.classList.remove('none');
    } else {
        video.play();
    }
})
//mobile
const headerMobileBtn = document.querySelector('#headerMobileBtn');
const headerMobileBtnNone = document.querySelector('#MenuNone');
const caseStudies = document.querySelector('.slider');
const mobileVideo = document.querySelector('.video');
const mobileHeader = document.querySelector('header');
const headerContainer = document.querySelector('.header__container');
const headerMobileNone = document.querySelector('.header__menu');

headerMobileBtn.addEventListener('click', function (){
    caseStudies.classList.add('none');
    mobileVideo.classList.add('none');
    mobileHeader.classList.add('headerMobile--BgNone');
    headerContainer.classList.add('none');
    headerMobileNone.classList.remove('none');
})
headerMobileBtnNone.addEventListener('click', function (){
    caseStudies.classList.remove('none');
    mobileVideo.classList.remove('none');
    mobileHeader.classList.remove('headerMobile--BgNone');
    headerContainer.classList.remove('none');
    headerMobileNone.classList.add('none');
})