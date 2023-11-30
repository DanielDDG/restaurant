export function createHTML() {

    const content = document.getElementById('content');
    const page = document.createElement('div');

    page.id = 'page';

    document.body.appendChild(page);
    document.body.insertBefore(page, content);

}