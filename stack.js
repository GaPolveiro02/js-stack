const stackArr = []; // empty array

const stackObj = {
    stackAdd: (arr, item) => {
        arr.push(item); // it will push the passed item into the array(last position)
    },
    stackRemove: (arr) => {
        arr.pop(); // it will pop(remove) always the last item of the array
    },
    stackGetMinValue: (arr) => {
        return arr.reduce((acc, cur) => {
            return (acc < cur ? acc : cur); // it will return stackArr min value
        });
    } 
}

for (let i = 0; i < 10 ; i++) { // push 10 random int numbers into the array stack
    const randomNum = Math.round(Math.random() * 10);
  
    stackObj.stackAdd(stackArr, randomNum);
}

stackObj.stackRemove(stackArr); // remove the last stack item
stackObj.stackGetMinValue(stackArr); // return the min value inside the stack
