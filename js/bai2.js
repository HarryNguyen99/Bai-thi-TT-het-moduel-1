let intArr = [7, 3, 6, 7, 8, 7, 7, 34, 44];

function tryRemoveFromArray(array, number) {
    let i = 0;
    while (i < array.length) {
        if (array[i] == number) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    console.log(array);
}

tryRemoveFromArray(intArr, 7);