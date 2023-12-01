import './style.css';
import { createHTML } from "./page-load";
import { createTabs } from './extra-load';
import { createHomeTab } from './home';
import { createMenuTab } from './menu';

createHTML();
createTabs();
createMenuTab();
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
})
