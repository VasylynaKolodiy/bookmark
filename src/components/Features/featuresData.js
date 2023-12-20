import { v4 as uuidv4 } from 'uuid';

export const featuresData = [
    {
        id: uuidv4(),
        title: 'Simple bookmarking',
        subTitle: 'Bookmark in one click',
        imgUrl: 'assets/images/illustration-features-tab-1.svg',
        description:
            'Organize your bookmarks however you like. ' +
            'Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
        id: uuidv4(),
        title: 'Speedy searching',
        subTitle: 'Intelligent search',
        imgUrl: 'assets/images/illustration-features-tab-2.svg',
        description:
            'Our powerful search feature will help you find saved sites in no time at all. ' +
            'No need to trawl through all of your bookmarks.',
    },
    {
        id: uuidv4(),
        title: 'Easy sharing',
        subTitle: 'Share your bookmarks',
        imgUrl: 'assets/images/illustration-features-tab-3.svg',
        description:
            'Easily share your bookmarks and collections with others. ' +
            'Create a shareable link that you can send at the click of a button.',
    },
];