function highestScore (students) {
  var obj = {}
  var names = []
  for (var i = 0; i < students.length; i++) {
    //console.log(students[i].class)
    obj[students[i].class] = 1
  }
 // console.log(obj)
  //console.log(Object.keys(obj))
  var arrayClass = Object.keys(obj);
  for (var i = 0; i < arrayClass.length; i++) {
    for (var j = 0; j < students.length; j++) {
        if (arrayClass[i] === students[j].class) {
            var tmp = students[j].name
            var score = students[j].score
            names.push([tmp, score]);
        }
    }
    obj[arrayClass[i]] = names;
    names = [];   
  }


  //console.log(Object.values(obj)[0])
  var objValue = Object.values(obj);

  for (var i = 0; i < objValue.length; i++) {
      // console.log(objValue[i])
      for (var j = 0; j < objValue[i].length; j++) {
          console.log(objValue[i][j][1], i, j)
         if (objValue[i][j][1] > objValue[i][j+1]) {
             var winner = objValue[i][j]
             var winnerScore = objValue[i][j][1]
         } else {
            var winner = objValue[i][j+1]
             var winnerScore = objValue[i][j+1]
         }
          //var winner = 

      }
      obj.winner = winner
      obj.winnerScore = winnerScore
  }

 // console.log(Object.keys(obj))
}



// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}