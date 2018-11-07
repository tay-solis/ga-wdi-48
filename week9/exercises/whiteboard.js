let middleOfString = (str, i) =>{
    if (str.length ==1){
        return str;
    } else{
        if(i == 0){
            return middleOfString(str.substring(1), str.length - 1);
        } else {
            return middleOfString(str.slice(0, -1), 0);
        }
    }
}

console.log(middleOfString("abc"));
console.log(middleOfString("string"));
console.log(middleOfString("abcdefghijklmnioqrstuvwxyz"))

let isPalindrome= (str)=>{
    str.toLowerCase();
    let rev = str.split('')
    rev.reverse();
    rev = rev.join('');
    console.log(rev)
    return(str === rev);
}
console.log(isPalindrome("string"));
console.log(isPalindrome("racecar"));

let addsToZeroArray = (n) =>{
    let arr = [];
    if (n % 2 !== 0){
        arr.push(0);
    }
    for(let i = 1; i < n; i++){
        arr.push(i);
        arr.push(-i);
    }
    return arr;
}

console.log(addsToZeroArray(6));
console.log(addsToZeroArray(1));
console.log(addsToZeroArray(0));

let add = (x,y) =>{
    let arr1 = new Array(x);
    let arr2 = new Array(y);
    return arr1.concat(arr2).length;
}

console.log(add(1,2));
console.log(add(0, 5));
console.log(add(100,19))