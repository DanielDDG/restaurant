export function createTabs() {

    const tabs = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    tabs.id = 'tabs';
    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    document.body.insertBefore(tabs, content);
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

}