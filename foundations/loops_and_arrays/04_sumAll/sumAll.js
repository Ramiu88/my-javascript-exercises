const sumAll = function(a,b) {

    let array = [];

    if( (a || b) < 0 || Number.isInteger(a) == false  || Number.isInteger(b) == false || isNaN(a) == true || isNaN(b) == true)
    {
        return 'ERROR'
    }


    if(a < b)
    {

        for(let i = a; i <=b;i++)
         {
        array.push(i);
        }

    }

    else {


        for(let i = b; i <=a;i++)
         {
        array.push(i);
        }
    }



    



    let result = array.reduce((sum, currentItem) => sum + currentItem ,0);

    return result;

    

};


// Do not edit below this line
module.exports = sumAll;
