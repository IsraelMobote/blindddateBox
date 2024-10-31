const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');

const pageone = document.querySelector('.pageone');
const pagetwo = document.querySelector('.pagetwo');


const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');
const circle4 = document.querySelector('#circle4');
const circle5 = document.querySelector('#circle5');
const circle6 = document.querySelector('#circle6');

circle1.classList.add('show');
circle2.classList.add('show');

function showAnimation1() {
    setTimeout(() => {
        circle3.classList.add('show');
        setTimeout(() => {
            circle4.classList.add('show');
            setTimeout(() => {
                circle5.classList.add('show');
                setTimeout(() => {
                    circle6.classList.add('show');
                    setTimeout(() => {
                        circle3.classList.remove('show');
                        circle4.classList.remove('show');
                        circle5.classList.remove('show');
                        circle6.classList.remove('show');
                        setTimeout(() => {
                            circle3.classList.add('show');
                            setTimeout(() => {
                                circle4.classList.add('show');
                                setTimeout(() => {
                                    circle5.classList.add('show');
                                    setTimeout(() => {
                                        circle6.classList.add('show');
                                        setTimeout(() => {
                                            circle3.classList.remove('show');
                                            circle4.classList.remove('show');
                                            circle5.classList.remove('show');
                                            circle6.classList.remove('show');
                                            setTimeout(() => {
                                                circle3.classList.add('show');
                                                setTimeout(() => {
                                                    circle4.classList.add('show');
                                                    setTimeout(() => {
                                                        circle5.classList.add('show');
                                                        setTimeout(() => {
                                                            circle6.classList.add('show');
                                                        }, 200);
                                                    }, 200);
                                                }, 200);
                                            }, 200);
                                        }, 1000);
                                    }, 200);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 1000);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
    console.log(num);

};




login2.addEventListener('click', function () {
    pageone.classList.add('hide');
    pagetwo.classList.add('show');

    showAnimation1();
})


