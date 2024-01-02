"use strict";

let isMonotonicArray = [1, 2, 3, 3, 4, 5, 6];

const monotonicToControl = (array) => {
    let increasing = false;
    let decreasing = false;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            decreasing = true;
        }
        else if (array[i] < array[i + 1]) {
            increasing = true;
        }
    }

    if (increasing && !decreasing) {
        return "Is monotonically increasing";
    } else if (!increasing && decreasing) {
        return "Is monotonically decreasing";
    } else {
        return "Not monotonic";
    }
}

console.log(monotonicToControl(isMonotonicArray));