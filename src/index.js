import './style.css';
import { createHTML } from "./page-load";
import { createTabs } from './extra-load';
import { createHomeTab } from './home';

createHTML();
createTabs();
createHomeTab();
console.log('Everything is working!');