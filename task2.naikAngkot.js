function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var obj = {};
  var result = [];
  var count = 0;
  for (var i = 0; i < arrPenumpang.length; i++) {
    for (var j = 0; j < arrPenumpang[i].length; j++) {
        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang [i][2];
        
        for (var k = 0; k < rute.length; k++) {
            if (rute[k] === arrPenumpang[i][1]) {
                count = 0;
            }
           
            if (rute[k] === arrPenumpang[i][2]) {
                break
            }
            count++
        }
    }
    //console.log(count)
    obj.bayar = count * 2000;
    result.push(obj)
    obj = {}
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]