function charAt (str, index){
    let i = 0;
    let charArr = [...str]; // spread syntax
    while (i != index){
        if (index === i) return charArr[i]
        i++;
    }
    return -1;
}

function charAt66 (str, i){
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if ( index === i){
            return str[i]
        }
    }
}

function charAt77(str, index){
    const charArr = Array.from(str);
    return charArr[index];
}

function charAt88(str, index){
    const charArr = [...str]
    return charArr[index]
}

function charAt100(str, index) {
    console.log(str, index);
    return str.charAt(index);
}

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log('line 5')
console.log(charAt(sentence, 5))
console.log(sentence.charAt(5))