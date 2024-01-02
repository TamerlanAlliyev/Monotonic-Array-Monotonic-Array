const isArray = [1, 2, 3, 4, 5]

const removeItems = (array, item) => {
    let newArray =[]
    for (let i = 0; i < array.length; i++) {
        if(!(array[i] === item)){
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(removeItems(isArray, 1));