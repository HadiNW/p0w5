function meleeRangedGrouping (str) {
  var result = [];
  var temp = ''
  

  for (var i = 0; i < str.length; i++) {
      if (str[i] === '-' && str[i+1] === 'R') {
        //var lengths = str[]
        //temp += str[i]
       
        for (var j = 0; j < i; j++) {
            var count = j;
            temp += str[count]
           
        }
        result.push(temp);
        temp =''
        //break
      }
  }
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []
