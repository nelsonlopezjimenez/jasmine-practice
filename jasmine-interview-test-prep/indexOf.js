
function indexOf(arr, item){
    let index = 0;
    do {
        if (arr[index] === item){
            return index
        }
        index++;
    // } while(arr[index] != item);
    } while(index < arr.length);
    return -1
}

function indexOf44(array, item){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (array[index] === item){
            return index;
        }
    }
    return -1;
}

function indexOf55(arr, item){
    let result, index = 0;
    for (const elem of arr){
        if (elem === item) result = index;
        index++;
    }
    return result || -1;
}

function indexOf66(arr, item){
    let result;
    arr.forEach( (elem, index) => {
        if (elem === item){
            result = index
        }
    })
    return result || -1;
}

function indexOf77(arr, item){
    let resultIdx;
    const result =  arr.map((elem, index) => {
        if (item === elem ) resultIdx = index;
        return elem === item
    });
    return resultIdx || -1
}

function indexOf88(arr, item){
    let resultIdx;
    const result =  arr.filter((elem, index) => {
        if (item === elem ) resultIdx = index;
        return elem === item
    });
    return resultIdx ? resultIdx : -1;
}

function indexOf99(arr, item) {
    return arr.indexOf(item);
}

const beasts = ["ant", "camel", "duck", "bison", 9];
let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // 3

let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // 1

let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // -1
console.log(indexOf(beasts, "duck")); // 1 or  4