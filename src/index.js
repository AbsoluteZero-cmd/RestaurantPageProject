import './style.css';
import '../assets/intro-bg.jpg';

import HomePage from './tabs/AboutPage';
import MenuPage from './tabs/MenuPage';
import ContactUsPage from './tabs/ContactUsPage';

const content = document.getElementById('content');
const nav = document.querySelector('.nav');


const navButtons = [
    {
        'text': 'About',
        'content': HomePage(),
    },
    {
        'text': 'Menu',
        'content': MenuPage(),
    },
    {
        'text': 'Contact Us',
        'content': ContactUsPage(),
    }
];


for(let i = 0; i < navButtons.length; i++){
    console.log(navButtons[i]);
    let navButton = document.createElement('a');
    navButton.textContent = navButtons[i].text;
    navButton.classList.add('nav__item');
    navButton.addEventListener('click', (e) => {
        content.replaceChildren();
        content.appendChild(navButtons[i].content);
    })

    nav.appendChild(navButton);
}

let navButton = document.createElement('a');
navButton.classList.add('nav__button');
navButton.href = '#';
navButton.textContent = 'Book Online';
nav.appendChild(navButton);

content.appendChild(HomePage());