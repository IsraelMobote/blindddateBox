const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');

const pageone = document.querySelector('.pageone');
const pagetwo = document.querySelector('.pagetwo');
const pagetwotext = document.querySelector('.pagetwotext');
const mainAppPage = document.querySelectorAll('.mainAppPage');


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
    pagetwo.classList.add('show');
    pagetwotext.classList.add('show');

    showAnimation1();
})

function hidePageTwo() {
    pagetwo.classList.remove('show');
    pagetwotext.classList.remove('show');
    mainAppPage.forEach(element => {
        element.classList.add('show');
    });
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


userform.addEventListener('submit', function(e) {
    e.preventDefault();
    if (wards.value != 'Select your ward') {
      
        button1.classList.add('hide');
        userform2.classList.add('show');

        editButton.classList.add('show');
        getprofileButton.classList.add('show');
        populateSelectForm2(data);
        wards.setAttribute('disabled','true');
    }
});

function populateSelectForm2(list) {
    list.forEach(element => {
       if(wards.value == element.name) {
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

editButton.addEventListener('click', function() {

    button1.classList.remove('hide');

    editButton.classList.remove('show');

    names.innerHTML = '';
    userform2.classList.remove('show');
    getprofileButton.classList.remove('show');
    wards.removeAttribute('disabled');
});

const getprofileButton = document.querySelector('#getprofile');

const usercard = document.querySelector('#usercard');

const cardLine = document.querySelector('.cardLine');

function populateUsercard() {

    usercard.innerHTML = '';
    const profileImg = document.createElement('img');
    profileImg.setAttribute('src','images/profile.jpg');
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
    }  )
};


const cardfields = ['Name','Ward', 'Height','Age-range' , 'Personality', 'Look', 'Hobbies','Dislike'];

getprofileButton.addEventListener('click', function() {
    cardLine.classList.add('show');
    usercard.classList.add('show');
    populateUsercard();
});