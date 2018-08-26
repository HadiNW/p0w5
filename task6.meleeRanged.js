function meleeRangedGrouping (str) {
  var result = [];
  var temp = ''
  var temp2 = ''
  var count = 0;
  var arrayStart = [];
  var arrayWord = [];
  var arraySplice = [];
  var arrayEnd = []
  var indexArray = [];
 
  count1 = 0;
  count2 = 0;
  arrayStart.push(0)
  for (var i = 0; i < str.length; i++) {    
   
       if (str[i] === ','){       
         var num = i;          
         arrayWord.push(str.substr(0, num));     
         arrayStart.push(num);
         arrayEnd.push(num)
       }   
  }
  arrayEnd.push(i)
  // console.log(arrayStart)
  // console.log(arrayEnd)
  // console.log(arrayWord)
  
  for (var i = 0; i < arrayStart.length; i++) {
    indexArray.push([arrayStart[i], arrayEnd[i]])
  }
console.log(indexArray)

  for (var i = 0; i < indexArray.length; i++) {
    result.push(str.substring(indexArray[i][0], indexArray[i][1]) )
    console.log(indexArray[i][0], indexArray[i][1])
  }
 console.log(result)
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []
