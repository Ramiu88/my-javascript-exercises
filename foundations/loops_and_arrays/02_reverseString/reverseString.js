const reverseString = function(str) {


    let strArray = [];
    let finalArray = [];
    let result;

    for(let i = 0;i < str.length;i++)
    {
          strArray.push(str[i])
    }


   for(let j = 0;j < strArray.length;j++)
   {
         finalArray.unshift(strArray[j])
   }
    
  

       result = finalArray.join('')

       return result;

};

// Do not edit below this line
module.exports = reverseString;
