export function createTabs() {

    const tabs = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    tabs.id = 'tabs';
    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    page.appendChild(tabs);
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

}