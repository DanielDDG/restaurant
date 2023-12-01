export function createContactTab() {

    const contactTitleContainer = document.createElement('div');
    const topContactContent = document.createElement('div');
    const bottonContactContent = document.createElement('div');

    contactTitleContainer.id = 'contactTitleContainer';
    topContactContent.id = 'topContactContent';
    bottonContactContent.id = 'bottomContactContent';

    content.appendChild(contactTitleContainer);
    content.appendChild(topContactContent);
    content.appendChild(bottonContactContent);

    // Adding children to title container.

    const contactTitle = document.createElement('div');
    contactTitle.id = 'contactTitle';
    contactTitleContainer.appendChild(contactTitle);
    contactTitle.textContent = 'Universal Contact';

    // Adding children to top contact container.

    const hisuContainer = document.createElement('div');
    const hisuPhoto = document.createElement('img');
    const hisuInfo = document.createElement('div');
    const hisuName = document.createElement('p');
    const hisuNumber = document.createElement('p');
    const hisuEmail = document.createElement('p');
    const irqroiContainer = document.createElement('div');
    const irqroiPhoto = document.createElement('img');
    const irqroiInfo = document.createElement('div');
    const irqroiName = document.createElement('p');
    const irqroiNumber = document.createElement('p');
    const irqroiEmail = document.createElement('p');

    hisuContainer.id = 'hisuContainer';
    hisuPhoto.id = 'hisuPhoto';
    hisuInfo.id = 'hisuInfo';
    hisuName.id = 'hisuName';
    hisuNumber.id = 'hisuNumber';
    hisuEmail.id = 'hisuEmail';
    irqroiContainer.id = 'irqroiContainer';
    irqroiPhoto.id = 'irqroiPhoto';
    irqroiInfo.id = 'irqroiInfo';
    irqroiName.id = 'irqroiName';
    irqroiNumber.id = 'irqroiNumber';
    irqroiEmail.id = 'irqroiEmail';

    hisuName.textContent = 'Hisu';
    hisuNumber.textContent = '547-438-9256';
    hisuEmail.textContent = 'thehisuman@thediner.com';
    irqroiName.textContent = 'Irqroi';
    irqroiNumber.textContent = '432-725-3745';
    irqroiEmail.textContent = 'mrirqroi@galaxy.com';

    hisuPhoto.src = './images/hisu.webp';
    irqroiPhoto.src = './images/irqroi.webp';

    topContactContent.appendChild(hisuContainer);
    topContactContent.appendChild(irqroiContainer);
    hisuContainer.appendChild(hisuPhoto);
    hisuContainer.appendChild(hisuInfo);
    hisuInfo.appendChild(hisuName);
    hisuInfo.appendChild(hisuNumber);
    hisuInfo.appendChild(hisuEmail);
    irqroiContainer.appendChild(irqroiPhoto);
    irqroiContainer.appendChild(irqroiInfo);
    irqroiInfo.appendChild(irqroiName);
    irqroiInfo.appendChild(irqroiNumber);
    irqroiInfo.appendChild(irqroiEmail);

    // Adding children to bottom contact container.

    const anzathContainer = document.createElement('div');
    const anzathPhoto = document.createElement('img');
    const anzathInfo = document.createElement('div');
    const anzathName = document.createElement('p');
    const anzathNumber = document.createElement('p');
    const anzathEmail = document.createElement('p');
    const fotullContainer = document.createElement('div');
    const fotullPhoto = document.createElement('img');
    const fotullInfo = document.createElement('div');
    const fotullName = document.createElement('p');
    const fotullNumber = document.createElement('p');
    const fotullEmail = document.createElement('p');

    anzathContainer.id = 'anzathContainer';
    anzathPhoto.id = 'anzathPhoto';
    anzathInfo.id = 'anzathInfo';
    anzathName.id = 'anzathName';
    anzathNumber.id = 'anzathNumber';
    anzathEmail.id = 'anzathEmail';
    fotullContainer.id = 'fotullContainer';
    fotullPhoto.id = 'fotullPhoto';
    fotullInfo.id = 'fotullInfo';
    fotullName.id = 'fotullName';
    fotullNumber.id = 'fotullNumber';
    fotullEmail.id = 'fotullEmail';

    anzathName.textContent = 'Anzath';
    anzathNumber.textContent = '345-384-5656';
    anzathEmail.textContent = 'holyanzath@render.com';
    fotullName.textContent = 'Fotull';
    fotullNumber.textContent = '345-999-3434';
    fotullEmail.textContent = 'fotulltheconqueror@alien.com';

    anzathPhoto.src = './images/anzath.jpg';
    fotullPhoto.src = './images/fotull.jpg';

    bottonContactContent.appendChild(anzathContainer);
    bottonContactContent.appendChild(fotullContainer);
    anzathContainer.appendChild(anzathPhoto);
    anzathContainer.appendChild(anzathInfo);
    anzathInfo.appendChild(anzathName);
    anzathInfo.appendChild(anzathNumber);
    anzathInfo.appendChild(anzathEmail);
    fotullContainer.appendChild(fotullPhoto);
    fotullContainer.appendChild(fotullInfo);
    fotullInfo.appendChild(fotullName);
    fotullInfo.appendChild(fotullNumber);
    fotullInfo.appendChild(fotullEmail);
}