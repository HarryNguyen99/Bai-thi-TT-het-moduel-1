let pointArr = [1, 2, 3, 6, 9, 10];

function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    console.log(max);
}

findMax(pointArr);