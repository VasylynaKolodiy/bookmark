import { v4 as uuidv4 } from 'uuid';

export const faqsData = [
    {
        id: uuidv4(),
        question: 'What is Bookmark?',
        answer: "A bookmark is a saved link to a specific webpage or website that " +
            "allows you to quickly navigate to that page without having to remember or " +
            "type the full web address (URL). Bookmarks are typically used in web browsers " +
            "to organize and quickly access favorite or frequently visited websites.",
    },
    {
        id: uuidv4(),
        question: 'How can I request a new browser?',
        answer: "Requesting a new browser typically involves downloading and installing " +
            "the browser of your choice on your device. Here are general steps to download and install a new browser.",
    },
    {
        id: uuidv4(),
        question: 'Is there a mobile app?',
        answer: "Please note that the availability of these apps may vary based on your " +
            "region and the current status of app stores. Always download apps from official " +
            "app stores to ensure security. Additionally, the information provided here might have changed, " +
            "so I recommend checking the respective app stores for the latest information.",
    },
    {
        id: uuidv4(),
        question: 'What about other Chromium browsers?',
        answer: "Brave, a privacy-focused Chromium browser, has mobile apps for both " +
            "Android and iOS. You can download them from the respective app stores. Opera has " +
            "a distinct mobile browser called Opera Touch, available for Android and iOS devices. " +
            "It is designed for one-handed use and features a unique interface. Vivaldi is known for " +
            "its customization options on desktop, and it also has a mobile version. You can find Vi" +
            "valdi on the Google Play Store for Android.",
    },
];