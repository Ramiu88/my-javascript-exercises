const repeatString = function(str,number) {

    let arr = [];

    if(number < 0)
    {
        return 'ERROR'
    }

    for(let i = 0;i < number;i++)
    {
        
        arr.push(str);
    }

    let result = arr.join('');
    
    return result;



};

// Do not edit below this line
module.exports = repeatString;
