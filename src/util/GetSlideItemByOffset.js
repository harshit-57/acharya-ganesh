export const isIndexUnderOffset = (offset, itemPerFrame, itemIndex) => {
    if (!(offset && itemPerFrame && Number(offset) != 'NaN')) return false;

    let index;
    for (index = 0; index < itemPerFrame; index++) {
        if (offset * itemPerFrame - index === itemIndex) return true;
    }

    return false;
};
