import {v4 as uuidv4} from 'uuid';

export const extensionsData = [
    {
        id: uuidv4(),
        name: 'Chrome',
        imgUrl: 'assets/images/logo-chrome.svg',
        version: 62,
        address: 'https://www.google.com/intl/pl/chrome/',
    },
    {
        id: uuidv4(),
        name: 'Firefox',
        imgUrl: 'assets/images/logo-firefox.svg',
        version: 55,
        address: 'https://www.mozilla.org/pl/firefox/new/',
    },
    {
        id: uuidv4(),
        name: 'Opera',
        imgUrl: 'assets/images/logo-opera.svg',
        version: 45,
        address: 'https://www.opera.com/pl',
    },
];