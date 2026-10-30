const palindromes = function (str) {

   let searchPattern = /\W/g;
   let result = str.toLowerCase().replace(searchPattern,'');

   if(result.split('').reverse().join('') == result)
   {
     return true;
   }

   else {

      return false;
   }
  

 


};

// Do not edit below this line
module.exports = palindromes;
