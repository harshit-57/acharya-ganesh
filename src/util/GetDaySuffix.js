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
