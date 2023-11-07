export function createHTML() {

    const content = document.getElementById('content');
    const topContent = document.createElement('div');
    const bottomContent = document.createElement('div');
    const image = document.createElement('img');
    const headline = document.createElement('div');
    const copy = document.createElement('div');

    topContent.id = 'topcontent';
    bottomContent.id = 'bottomcontent';
    image.id = 'restaurantimage';
    headline.id = 'headline';
    copy.id = 'copy';

    content.appendChild(topContent);
    content.appendChild(bottomContent);
    topContent.appendChild(image);
    topContent.appendChild(headline);
    bottomContent.appendChild(copy);

}