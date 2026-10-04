const removeFromArray = function(array,...theArgs) {



     for (let i = 0;i < theArgs.length;i++)
     {
          if(array.indexOf(theArgs[i]) != -1)
          {
             array.splice(array.indexOf(theArgs[i]),1)
             i--;
             
             
          }
         

     }

       
       return array;

};

// Do not edit below this line
module.exports = removeFromArray;
