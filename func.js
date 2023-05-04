export function shuffleArray(array, num) {
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
    console.log(array);
    function getRandomArrayElements(arr, num) {
        var result = new Array(num),
            len = arr.length,
            taken = new Array(len);
        if (num > len)
            throw new RangeError(
                'getRandomArrayElements: запрошенное количество элементов превышает длину массива'
            );
        while (num--) {
            var x = Math.floor(Math.random() * len);
            result[num] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    array = getRandomArrayElements(array, num);
    return array;
}
