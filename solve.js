//from scratch
function reverseString(str){
    var final= ""
    //create a descending for loop
    for(var i = str.length - 1; i>=0; i--){
      final += str[i];
    }
    return final;
  }
  console.log(reverseString("hello"))