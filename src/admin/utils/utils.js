import { differenceInSeconds } from 'date-fns';
import * as XLSX from 'xlsx';
export const convertHexToRGB = (hex) => {
    // check if it's a rgba
    if (hex.match('rgba')) {
        let triplet = hex.slice(5).split(',').slice(0, -1).join(',');
        return triplet;
    }

    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');

        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
};

export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

export function isMobile() {
    if (window) return window.matchMedia(`(max-width: 767px)`).matches;

    return false;
}

export function isMdScreen() {
    if (window) return window.matchMedia(`(max-width: 1199px)`).matches;

    return false;
}

function currentYPosition(elm) {
    if (!window && !elm) {
        return;
    }
    if (elm) return elm.scrollTop;
    // Firefox, Chrome, Opera, Safari
    if (window.pageYOffset) return window.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(elm) {
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent !== document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

export function scrollTo(scrollableElement, elmID) {
    var elm = document.getElementById(elmID);

    if (!elmID || !elm) {
        return;
    }

    var startY = currentYPosition(scrollableElement);
    var stopY = elmYPosition(elm);

    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout(
                (function (leapY) {
                    return () => {
                        scrollableElement.scrollTo(0, leapY);
                    };
                })(leapY),
                timer * speed
            );
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (let i = startY; i > stopY; i -= step) {
        setTimeout(
            (function (leapY) {
                return () => {
                    scrollableElement.scrollTo(0, leapY);
                };
            })(leapY),
            timer * speed
        );
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
    return false;
}

export function getTimeDifference(date) {
    let difference = differenceInSeconds(new Date(), date);

    if (difference < 60) return `${Math.floor(difference)} sec`;
    else if (difference < 3600) return `${Math.floor(difference / 60)} min`;
    else if (difference < 86400) return `${Math.floor(difference / 3660)} h`;
    else if (difference < 86400 * 30)
        return `${Math.floor(difference / 86400)} d`;
    else if (difference < 86400 * 30 * 12)
        return `${Math.floor(difference / 86400 / 30)} mon`;
    else return `${(difference / 86400 / 30 / 12).toFixed(1)} y`;
}

export const getRoleAndpermission = (role, module_name, action) => {
    if (role?.length > 0) {
        let res = role?.find((ele) => ele?.module?.name == module_name);
        res = res ? res[action] : false;
        console.log(res, 'res');
        return res;
    } else return false;
};

export const PrintExcel = (data, fileName = 'data.xlsx') => {
    try {
        if (!data || data.length === 0) {
            throw new Error('No data provided to export');
        }

        // Process data to truncate long text fields
        const processedData = data.map((row) => {
            const newRow = {};
            for (const key in row) {
                if (typeof row[key] === 'string' && row[key].length > 32000) {
                    newRow[key] = row[key].substring(0, 32000);
                } else {
                    newRow[key] = row[key];
                }
            }
            return newRow;
        });

        const worksheet = XLSX.utils.json_to_sheet(processedData);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        XLSX.writeFile(workbook, fileName);
    } catch (error) {
        console.error('Error exporting data to Excel:', error.message);
    }
};
