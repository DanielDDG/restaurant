export function createMenuTab() {

    const menuTitleContainer = document.createElement('div');
    const topMenuContent = document.createElement('div');
    const bottomMenuContent = document.createElement('div');

    menuTitleContainer.id = 'menuTitleContainer';
    topMenuContent.id = 'topMenuContent';
    bottomMenuContent.id = 'bottomMenuContent';

    content.appendChild(menuTitleContainer);
    content.appendChild(topMenuContent);
    content.appendChild(bottomMenuContent);

    // Adding children to title container.

    const menuTitle = document.createElement('div');
    menuTitle.id = 'menuTitle';
    menuTitleContainer.appendChild(menuTitle);
    menuTitle.textContent = 'Intergalactic Menu';

    // Adding children to top menu container.

    const blueMilkContainer = document.createElement('div');
    const blueMilkTitle = document.createElement('div');
    const blueMilkContent = document.createElement('img');
    const rontoContainer = document.createElement('div');
    const rontoTitle = document.createElement('div');
    const rontoContent = document.createElement('img');

    blueMilkContainer.id = 'blueMilkContainer';
    blueMilkTitle.id = 'blueMilkTitle';
    blueMilkContent.id = 'blueMilkContent';
    rontoContainer.id = 'rontoContainer';
    rontoTitle.id = 'rontoTitle';
    rontoContent.id = 'rontoContent';

    blueMilkTitle.textContent = 'Blue Milk - $6';
    rontoTitle.textContent = 'Ronto - $22';

    blueMilkContent.src = './images/bluemilk.webp';
    rontoContent.src = './images/ronto.webp';

    topMenuContent.appendChild(blueMilkContainer);
    topMenuContent.appendChild(rontoContainer);
    blueMilkContainer.appendChild(blueMilkTitle);
    blueMilkContainer.appendChild(blueMilkContent);
    rontoContainer.appendChild(rontoTitle);
    rontoContainer.appendChild(rontoContent);

    // Adding children to bottom menu container.

    const katSakaContainer = document.createElement('div');
    const katSakaTitle = document.createElement('div');
    const katSakaContent = document.createElement('img');
    const felucianKeftaContainer = document.createElement('div');
    const felucianKeftaTitle = document.createElement('div');
    const felucianKeftaContent = document.createElement('img');

    katSakaContainer.id = 'katSakaContainer';
    katSakaTitle.id = 'katSakaTitle';
    katSakaContent.id = 'katSakaContent';
    felucianKeftaContainer.id = 'felucianKeftaContainer';
    felucianKeftaTitle.id = 'felucianKeftaTitle';
    felucianKeftaContent.id = 'felucianKeftaContent';

    katSakaTitle.textContent = 'Kat Saka - $12';
    felucianKeftaTitle.textContent = 'Felucian Kefta - $17';

    katSakaContent.src = './images/katsaka.webp';
    felucianKeftaContent.src = './images/feluciankefta.webp';

    bottomMenuContent.appendChild(katSakaContainer);
    bottomMenuContent.appendChild(felucianKeftaContainer);
    katSakaContainer.appendChild(katSakaTitle);
    katSakaContainer.appendChild(katSakaContent);
    felucianKeftaContainer.appendChild(felucianKeftaTitle);
    felucianKeftaContainer.appendChild(felucianKeftaContent);


}