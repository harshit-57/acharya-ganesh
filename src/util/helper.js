import { htmlToText } from 'html-to-text';

export const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // 4-20th are "th"
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};

export const isIndexUnderOffset = (offset, itemPerFrame, itemIndex) => {
    if (!(offset && itemPerFrame && Number(offset) != 'NaN')) return false;

    let index;
    for (index = 0; index < itemPerFrame; index++) {
        if (offset * itemPerFrame - index === itemIndex) return true;
    }

    return false;
};

export function getReadingTime(html) {
    const text = htmlToText(html);
    const wordCount = text.split(/\s+/).length;
    const wordsPerMinute = 200;
    const timeToRead = Math.ceil(wordCount / wordsPerMinute);
    return timeToRead;
}
