function reverseString(str){
    if(str.length<=1){
        return str;
    }

    let reverse ='';

    for(let i=str.length-1; i>=0; i--){
        reverse+= str[i];
    }
     return reverse;
}

function testReverseString(){
    const testCases = [
        { input : "hello", expected : "olleh"},
        { input : "12345", expected : "54321"},
        { input : "", expected : ""},
        { input : "a", expected : "a"},
        { input : "1234567890abc", expected : "cba0987654321"}

    ]

    testCases.forEach((testCase, index) => {
        console.log("Testcase:", index+1)
        console.log("Input:", testCase.input);
        const result  = reverseString(testCase.input);
        console.log("Expected output:", testCase.expected);
        console.log("Actual output:", result);

    if( result === testCase.expected){
        console.log("Testcase Passed");

    }else{
        console.log("Testcase Failed");
    }
    console.log("----------------------------------");
})
}

testReverseString();