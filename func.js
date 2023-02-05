export function shuffleArray(array) {
    let currentIndex = array.flat().length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array.flat()[currentIndex];
        array.flat()[currentIndex] = array.flat()[randomIndex];
        array.flat()[randomIndex] = temporaryValue;
    }
    array = array.flat();
    let currentIndex2 = array.length,
        temporaryValue2,
        randomIndex2;
    while (0 !== currentIndex2) {
        randomIndex2 = Math.floor(Math.random() * currentIndex2);
        currentIndex2 -= 1;
        temporaryValue2 = array[currentIndex2];
        array[currentIndex2] = array[randomIndex2];
        array[randomIndex2] = temporaryValue2;
    }
    return array;
}
