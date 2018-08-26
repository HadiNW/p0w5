function highestScore (students) {
  var result = {};

  for (var i = 0; i < students.length; i++) {
    //console.log(students[i])
    var resultProps = Object.keys(result) 
    var studentScore = students[i].score;
    var studentClass = students[i].class;
    var studetName = students[i].name;

    if (resultProps.length === 0) {
      result[students[i].class] = {
          name: studetName,
          score: studentScore
      }
    }

    for (var j = 0; j < resultProps.length; j++) {      
      if (result[students[i].class] === undefined) {
        result[students[i].class] = {
          name: studetName,
          score: studentScore
      } 
      } else {
        if (result[students[i].score] > students[i].score ) {
          result[j].name = students[i].name
          result[j].score = students[i].score
        }
      }
      }
    }   
    return result
   
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


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}