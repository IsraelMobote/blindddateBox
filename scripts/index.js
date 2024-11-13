const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');

const pageone = document.querySelector('.pageone');
const pagetwo = document.querySelectorAll('.pagetwo');
const pagetwotext = document.querySelectorAll('.pagetwotext');
const mainAppPage = document.querySelectorAll('.mainAppPage');


const circle1 = document.querySelectorAll('.circle1');
const circle2 = document.querySelectorAll('.circle2');
const circle3 = document.querySelectorAll('.circle3');
const circle4 = document.querySelectorAll('.circle4');
const circle5 = document.querySelectorAll('.circle5');
const circle6 = document.querySelectorAll('.circle6');

circle1.forEach(element => {
    element.classList.add('show');
});
circle2.forEach(element => {
    element.classList.add('show');
});

function showAnimation1() {
    setTimeout(() => {
        circle3.forEach(element => {
            element.classList.add('show');
        });
        setTimeout(() => {
            circle4.forEach(element => {
                element.classList.add('show');
            });
            setTimeout(() => {
                circle5.forEach(element => {
                    element.classList.add('show');
                });
                setTimeout(() => {
                    circle6.forEach(element => {
                        element.classList.add('show');
                    });
                    setTimeout(() => {
                        circle3.forEach(element => {
                            element.classList.remove('show');
                        });
                        circle4.forEach(element => {
                            element.classList.remove('show');
                        });
                        circle5.forEach(element => {
                            element.classList.remove('show');
                        });
                        circle6.forEach(element => {
                            element.classList.remove('show');
                        });
                        setTimeout(() => {
                            circle3.forEach(element => {
                                element.classList.add('show');
                            });
                            setTimeout(() => {
                                circle4.forEach(element => {
                                    element.classList.add('show');
                                });
                                setTimeout(() => {
                                    circle5.forEach(element => {
                                        element.classList.add('show');
                                    });
                                    setTimeout(() => {
                                        circle6.forEach(element => {
                                            element.classList.add('show');
                                        });
                                        setTimeout(() => {
                                            circle3.forEach(element => {
                                                element.classList.remove('show');
                                            });
                                            circle4.forEach(element => {
                                                element.classList.remove('show');
                                            });
                                            circle5.forEach(element => {
                                                element.classList.remove('show');
                                            });
                                            circle6.forEach(element => {
                                                element.classList.remove('show');
                                            });
                                            setTimeout(() => {
                                                circle3.forEach(element => {
                                                    element.classList.add('show');
                                                });
                                                setTimeout(() => {
                                                    circle4.forEach(element => {
                                                        element.classList.add('show');
                                                    });
                                                    setTimeout(() => {
                                                        circle5.forEach(element => {
                                                            element.classList.add('show');
                                                        });
                                                        setTimeout(() => {
                                                            circle6.forEach(element => {
                                                                element.classList.add('show');
                                                            });
                                                            setTimeout(() => {
                                                                hidePageTwo();
                                                            }, 500);
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
};

const data = [
    {
        "name": "Meiran",
        "members": [
            "Israel",
            "Mary",
            "Emmanuel"
        ]
    },
    {
        "name": "Iyana-Paja",
        "members": [
            "d",
            "dee",
            "dd"
        ]
    },
    {
        "name": "Abule-Egba",
        "members": [
            "Israel",
            "Mary",
            "Emmanuel"
        ]
    },
    {
        "name": "Orile-Agege",
        "members": [
            "Rose",
            "Rachel",
            "Damilola"
        ]
    },
    {
        "name": "Sango",
        "members": [
            "Israel",
            "Mary",
            "Emmanuel"
        ]
    },
    {
        "name": "Oju-Ore",
        "members": [
            "Israel",
            "Mary",
            "Emmanuel"
        ]
    },
    {
        "name": "Alakuko",
        "members": [
            "Israel",
            "Mary",
            "Emmanuel"
        ]
    },
    {
        "name": "Ijoko",
        "members": [
            "Israel",
            "Mary",
            "Emmanuel"
        ]
    }
]

login2.addEventListener('click', function () {
    pageone.classList.add('hide');
    pagetwo[0].classList.add('show');
    pagetwotext[0].classList.add('show');

    showAnimation1();
})

function hidePageTwo() {
    pagetwo.forEach(element => {
        element.classList.remove('show');
    });
    pagetwotext.forEach(element => {
        element.classList.remove('show');
    });

    if (specialNumber == 0) {
        mainAppPage.forEach(element => {
            element.classList.add('show');
        })
    }

    if (specialNumber == 1) {
        populateProfileMatches();
    }
}

const wards = document.querySelector('#wards');
const userform = document.querySelector('#userform');

const button1 = document.querySelector('#enter');
const userform2 = document.querySelector('#userform2');
const names = document.querySelector('#names');
const editButton = document.querySelector('#editButton');

function populateSelectForm(list) {
    list.forEach(element => {
        const option = document.createElement('option');
        option.innerHTML = element.name;
        wards.append(option);
    });

}


populateSelectForm(data);


userform.addEventListener('submit', function (e) {
    e.preventDefault();
    if (wards.value != 'Select your ward') {

        button1.classList.add('hide');
        userform2.classList.add('show');

        editButton.classList.add('show');
        getprofileButton.classList.add('show');
        populateSelectForm2(data);
        wards.setAttribute('disabled', 'true');
    }
});

function populateSelectForm2(list) {
    list.forEach(element => {
        if (wards.value == element.name) {
            const opt = document.createElement('option');
            opt.innerHTML = 'Select name';
            names.append(opt);
            element['members'].forEach(name => {
                const option = document.createElement('option');
                option.innerHTML = name;
                names.append(option);
            });
        }
    });

}

editButton.addEventListener('click', function () {

    button1.classList.remove('hide');

    editButton.classList.remove('show');

    names.innerHTML = '';
    userform2.classList.remove('show');
    getprofileButton.classList.remove('show');
    wards.removeAttribute('disabled');
});

const getprofileButton = document.querySelector('#getprofile');

const usercard = document.querySelector('#usercard');

const cardLine = document.querySelectorAll('.cardLine');

function populateUsercard() {

    usercard.innerHTML = '';
    const profileImg = document.createElement('img');
    profileImg.setAttribute('src', 'images/profile.jpg');
    const div = document.createElement('div');

    usercard.append(profileImg);
    let number = 0;
    cardfields.forEach(element => {

        const innerdiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = element;
        const p = document.createElement('p');
        p.textContent = 'sample content';

        innerdiv.append(h3);
        innerdiv.append(p);

        div.append(innerdiv);
        usercard.append(div);
        number = number + 1;
        console.log(number);
    })
};


const cardfields = ['Name', 'Ward', 'Height', 'Age-range', 'Personality', 'Look', 'Hobbies', 'Dislike'];
const usercardDivider = document.querySelector('#usercardDivider');
const usercardHeading = document.querySelector('#special');
const backToHome = document.querySelector('#special span');
const showMatchesButton = document.querySelector('#showMatchesButton');

const buttonAnimation = document.querySelector('.buttonAnimation');
const profileSection = document.querySelectorAll('.profileSection');

let specialNumber = 0


getprofileButton.addEventListener('click', function () {
    populateUsercard();
    usercardDivider.classList.add('show');

    mainAppPage.forEach(element => {
        element.classList.remove('show');
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

backToHome.addEventListener('click', function () {
    usercardDivider.classList.remove('show');

    mainAppPage.forEach(element => {
        element.classList.add('show');
    });

})

showMatchesButton.addEventListener('click', function () {

    circle3.forEach(element => {
        element.classList.remove('show');
    });
    circle4.forEach(element => {
        element.classList.remove('show');
    });
    circle5.forEach(element => {
        element.classList.remove('show');
    });
    circle6.forEach(element => {
        element.classList.remove('show');
    });

    specialNumber = 1;
  
    
    profileSection.forEach(element => {
        element.classList.add('show');
    });

    pagetwotext[1].classList.add('show');
    pagetwo[1].classList.add('show');
    showAnimation1();


});

const profileMatches = document.querySelector('#profileMatches');


function populateProfileMatches() {

    profileMatches.innerHTML = '';

    cardfields.forEach(element => {
        const firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'flip-card');

        const innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'flip-card-inner');

        const flipCardFront = document.createElement('div');
        flipCardFront.setAttribute('class', 'flip-card-front');

        const heading = document.createElement('h1');
        heading.textContent = element;

        flipCardFront.append(heading);

        const flipCardBack = document.createElement('div');
        flipCardBack.setAttribute('class', 'flip-card-back');

        const img = document.createElement('img');
        img.setAttribute('src', 'images/guadalajara-mexico-temple.jpg');

        flipCardBack.append(img);

        innerDiv.append(flipCardFront);
        innerDiv.append(flipCardBack);

        firstDiv.append(innerDiv);

        profileMatches.append(firstDiv);

    });

};
