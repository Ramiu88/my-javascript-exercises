const fibonacci = function(member) {

let counter = 3;
let array = [];
array[0] = 1;
array[1] = 1;

for(let i = 2;i < 1000;i++)
{

 

  array[i] = array[i-1] + array[i - 2];



}



if(member == 1 || member == 2)
{
    return 1;
}

else if (member == 0){

    return 0;
}

else if(member < 0)
{
    return "OOPS";
}

else if(typeof(member) == "string"){

    let convertedMember = Number(member);

    return array[convertedMember-1];
}

return array[member-1];


};

// Do not edit below this line
module.exports = fibonacci;
