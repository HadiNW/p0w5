function hapusSimbol(str) {
    var character
  var text = ''
  var kamus = 'abcdefghijklmnopqrstuvwxyz0987654321';
  for (var i = 0; i < kamus.length; i++) {
      for (j = 0; j < str.length; j++) {
        
          if (str[j] === kamus[i]) {
             character = str[i]
          } else {
            character = ''
           
          }
          text += character
          console.log(text)
      }
  }
  //return text
    }
   


// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
// console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbol('ma@#k!an~')); // makan
// console.log(hapusSimbol('coding')); // coding
// console.log(hapusSimbol('1+3-5*2=100')); // 1352100