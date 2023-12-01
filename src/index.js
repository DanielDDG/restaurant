import './style.css';
import { createHTML } from "./page-load";
import { createTabs } from './extra-load';
import { createHomeTab } from './home';
import { createMenuTab } from './menu';
import { createContactTab } from './contact';

createHTML();
createTabs();
createHomeTab();
console.log('Everything is working!');

home.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    createHomeTab();
})

menu.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    createMenuTab();
})

contact.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    createContactTab();
})
