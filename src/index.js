import './scss/all.scss';
import enquire from '../node_modules/enquire.js/src/index.js';


const users = [
    {
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        about: '“ I’ve been interested in coding for a while but never taken the jump, until now. \n' +
            '  I couldn’t recommend this course enough. I’m now in the job of my dreams and so \n' +
            '  excited about the future. ”',
        url: './image-tanya.jpg'
    },

    {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        about: '“ If you want to lay the best foundation possible I’d recommend taking this course. \n' +
            'The depth the instructors go into is incredible. I now feel so confident about \n' +
            'starting up as a professional developer. ”',
        url: './image-john.jpg'
    }
];

const btn = document.querySelector('.btn');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const about = document.querySelector('.about');
const sliderList = document.querySelector('.slider-list');
let index = 0;
const imagesLength = users.length;
let imageWidth = 540;


initImageContainer();


function initImageContainer() {
    enquire.register('(min-width: 415px', {
        setup: setImageWidthToSmall,
        match: setImageWidthToSmall
    });

    enquire.register('(min-width: 768px', {
        setup: setImageWidth,
        match: setImageWidth
    });

    users.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('slider-list-item');
        const img = document.createElement('img');
        img['src'] = user['url'];
        li.appendChild(img);
        sliderList.appendChild(li);
    });

    name.innerHTML = users[index]['name'];
    job.innerHTML = users[index]['job'];
    about.innerHTML = users[index]['about'];
    btn.addEventListener('click', changeImage);
}

function changeImage(e) {
    e.preventDefault();

    if (index >= (imagesLength - 1)) {
        index = 0;
    } else {
        index++;
    }

    setSliderMarginLeft();
    // sliderList.style.marginLeft = (-index * imageWidth) + 'px';
    name.innerHTML = users[index]['name'];
    job.innerHTML = users[index]['job'];
    about.innerHTML = users[index]['about'];
}


function setImageWidthToSmall() {
    imageWidth = 270;
    setSliderMarginLeft();
}

function setImageWidth() {
    imageWidth = 540;
    setSliderMarginLeft();
}

function setSliderMarginLeft() {
    sliderList.style.marginLeft = (-index * imageWidth) + 'px';
}
