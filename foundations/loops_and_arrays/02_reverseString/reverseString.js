const reverseString = function(str) {


    let strArray;
    let finalArray;
    let result;

    for(let i = 0;i < str.length;i++)
    {
          strArray.push(str[i])
    }


   for(let j = str.length-1; j > 0;j--)
    
    {

        finalArray.push(strArray[j])


    }


       result = finalArray.join('');

};

// Do not edit below this line
module.exports = reverseString;
