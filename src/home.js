export function createHomeTab() {

    // Main plate.

    const titleContent = document.createElement('div');
    const topContent = document.createElement('div');
    const bottomContent = document.createElement('div');
    const title = document.createElement('div');
    const hours = document.createElement('div');
    const restaurantImage = document.createElement('div');
    const location = document.createElement('div');
    const social = document.createElement('div');
    const instagram = document.createElement('div');
    const twitter = document.createElement('div');
    const facebook = document.createElement('div');

    titleContent.id = 'titleContent';
    title.id = 'title';
    topContent.id = 'topContent';
    bottomContent.id = 'bottomContent';
    hours.id = 'hours';
    restaurantImage.id = 'restaurantImage';
    location.id = 'location';
    social.id = 'social';
    instagram.id = 'instagram';
    twitter.id = 'twitter';
    facebook.id = 'facebook';

    // Adding children to hours container.

    const hoursTitle = document.createElement('div');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');

    hoursTitle.id = 'hoursTitle';
    monday.id = 'monday';
    tuesday.id = 'tuesday';
    wednesday.id = 'wednesday';
    thursday.id = 'thursday';
    friday.id = 'friday';
    saturday.id = 'saturday';
    sunday.id = 'sunday';

    // Adding content to the hours container divs.

    title.textContent = 'Intergalatic Diner';
    hoursTitle.textContent = 'Hours';
    monday.textContent = 'Monday: 6 A.M. - 6 P.M.';
    tuesday.textContent = 'Tuesday: 6 A.M. - 6 P.M.';
    wednesday.textContent = 'Wednesday: 6 A.M. - 6 P.M.';
    thursday.textContent = 'Thursday: 6 A.M. - 10 P.M.';
    friday.textContent = 'Friday: 6 A.M. - 10 P.M.';
    saturday.textContent = 'Saturday: 8 A.M. - 10 P.M.';
    sunday.textContent = 'Sunday: 8 A.M. - 8 P.M.';

    // Adding children to location container.

    const locationTitle = document.createElement('div');
    const locationContent = document.createElement('div');

    locationTitle.id = 'locationTitle';
    locationContent.id = 'locationContent';

    // Adding content to the location container divs.

    locationTitle.textContent = 'Location';
    locationContent.textContent = '1448 Point Street 60605';

    // Adding children to social container.

    const socialTitle = document.createElement('div');
    const socialContent = document.createElement('div');
    const instagramTitle = document.createElement('div');
    const twitterTitle = document.createElement('div');
    const facebookTitle = document.createElement('div');
    const instagramContent = document.createElement('div');
    const twitterContent = document.createElement('div');
    const facebookContent = document.createElement('div');


    socialTitle.id = 'socialTitle';
    socialContent.id = 'socialContent';
    instagramTitle.id = 'instagramTitle';
    twitterTitle.id = 'twitterTitle';
    facebookTitle.id = 'facebookTitle';
    instagramContent.id = 'instagramContent';
    twitterContent.id = 'twitterContent';
    facebookContent.id = 'facebookContent';

    // Adding content to social container.

    socialTitle.textContent = 'Social Media';
    instagramTitle.textContent = 'Instagram';
    twitterTitle.textContent = 'Twitter';
    facebookTitle.textContent = 'Facebook';
    instagramContent.textContent = '@intergalacticdiner';
    twitterContent.textContent = '@IntergalaticDiner';
    facebookContent.textContent = 'Intergalatic Diner';

    // Three children to content.

    content.appendChild(titleContent);
    content.appendChild(topContent);
    content.appendChild(bottomContent);

    // First child, title.

    titleContent.appendChild(title);

    // Second child, top content.

    topContent.appendChild(hours);
    topContent.appendChild(restaurantImage);
    topContent.appendChild(location);

    // Third child, bottom content.

    bottomContent.appendChild(social);
    social.appendChild(socialTitle);
    social.appendChild(socialContent);
    socialContent.appendChild(instagram);
    socialContent.appendChild(twitter);
    socialContent.appendChild(facebook);
    instagram.appendChild(instagramTitle);
    instagram.appendChild(instagramContent);
    twitter.appendChild(twitterTitle);
    twitter.appendChild(twitterContent);
    facebook.appendChild(facebookTitle);
    facebook.appendChild(facebookContent);

    // Hours container children.

    hours.appendChild(hoursTitle);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);
    hours.appendChild(sunday);

    // Location container children.

    location.appendChild(locationTitle);
    location.appendChild(locationContent);

}