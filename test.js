function highestScore (students) {
    // Code disini
    var result={};
    for(var i=0;i<students.length;i++){
        var keys=Object.keys(result);
        var kelas=students[i].class;
        var nilai=students[i].score;
        //1. isi object pertama
        if(keys.length===0){
            result[kelas]={
                name: students[i].name,
                score: students[i].score
            }
        }
        //2. membandingkan isi dari object
        for(var j=0;j<keys.length;j++){
            //jika kelas belum ada
            if(result[kelas]===undefined){
                result[kelas]={
                    name: students[i].name,
                    score: students[i].score
                }
            }
            else{
            //jika kelas sudah ada
                if(nilai>result[kelas].score){
                    result[j].name = students[i].name
                    result[j].score= students[i].score
                }
            }
        }
        
    }
    console.log(keys)
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
  
  
//   console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
// console.log(highestScore([])); //{}   