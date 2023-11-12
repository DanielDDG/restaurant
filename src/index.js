import './style.css';
import { createHTML } from "./page-load";
import { createTabs } from './extra-load';

createHTML();
createTabs();
console.log('Everything is working!');