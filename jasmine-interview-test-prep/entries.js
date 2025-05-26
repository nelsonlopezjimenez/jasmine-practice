
function entries(obj){
    return Object.entries(obj).map( i => [i, obj[i]]);
}

function entries54 (obj){
    const resultArr = [];  //  because forEach has no return
    Object.entries(obj).forEach( ([ key, value ]) => {
        resultArr.push([key, value])
    });
    return resultArr;
}

function entries55(obj){
    const resultArr = [];
    Object.keys(obj).forEach ( key => {  // forEach return undefined
        resultArr.push([key, obj[key]])
    });
    return resultArr;
}

function entries66(obj){
    console.log(obj)
    console.log(obj.length) // undefined
    console.log(Array.isArray(obj))
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        console.log(element); // not reachable
    }
    return null;
}

function entries77(obj){ // obj is not iterable
    const resultArr = [];
    for (const elem of obj){
        resultArr.push([elem, obj[elem]])
    }
    return resultArr;
}
function entries(obj){ // obj is not iterable
    const resultArr = [];
    for (const elem of Object.keys(obj)){
        resultArr.push([elem, obj[elem]])
    }
    return resultArr;
}

function entries88(obj){
    const resultArr = []
    for (const elem in obj){
        resultArr.push([elem, obj[elem]])
    }
    return resultArr;
}

function entries97(obj) { //  using destructuring
    const resultArr = [];
    for (const [key, value] of Object.entries(obj)){
        resultArr.push([key, value])
    }
    return resultArr;
}
function entries98(obj) {
    const resultArr = [];
    for (const elem of Object.entries(obj)){
        resultArr.push([elem[0], elem[1]])
    }
    return resultArr;
}
function entries99(obj) {
    return Object.entries(obj);
}

console.log(entries({ a: 1, b: 2, c: 3 }))