let result = document.querySelector(".Result");
let checkBtn = document.querySelector("#checkBtn");

let myName = document.querySelector("#myName");
let herName = document.querySelector("#herName");

let contentMyName = document.querySelector("#contentMyName");
let contentHerName = document.querySelector("#contentHerName");

const heartContent  = document.querySelector(".love-percentage");
//click on check btn
checkBtn.addEventListener("click", () => {
    let bothName = myName.value + herName.value;
    bothName = bothName.toLowerCase();
    let countElementOccured = countCharacter(bothName);
    let numbers = allNumbers(countElementOccured);

    let ans = calculate(numbers);
    ans = arrToNum(ans);
    heartContent.innerHTML = ans+"%";
    contentMyName.innerHTML = myName.value;
    contentHerName.innerHTML = generateString(herName.value.length).toLowerCase();

    show();
});

// visible result box
const show = () => {
    result.style.opacity = "1";
}

function countCharacter(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let elm = arr[i];
        let boo = false;
        for (let j = 0; j < arr.length; j++) {
            if (elm == arr[j]) {
                count++;
                obj[elm] = count;
                boo = true;
            }
        }
        if (!boo) {
            obj[elm] = count;
        }

    }
    return obj;
}

function allNumbers(obj){
    let arr = [];
    for(let val in obj){
        arr.push(obj[val]);
    }
    return arr;
}

function calculate(numbers){
    let start = 0, end = numbers.length - 1; 
    let tempArr = [];                     
    while(start < end){
        let sum = numbers[start] + numbers[end]; 
        tempArr.push(sum);    
        start++;
        end--;
    }
    if(start == end){
        tempArr.push(numbers[start]); 
    }

    if(tempArr.length <=2 ){
        return tempArr;
    }else{
        return calculate(tempArr);
    }
}

//covert array to number
const arrToNum = (arr) => `${arr[0]}${arr[1]}`;

function generateString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
