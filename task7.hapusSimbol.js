function hapusSimbol(str) {
    var chars = '';
    var text = '';
    var kamus = 'abcdefghijklmnopqrstuvwxyz0987654321';
   for (var i = 0; i < str.length; i++) {
       for (var j = 0; j < kamus.length; j++) {
           chars = str[i]
           if (str[i] !== kamus[j]) {
               chars = ''        
           }
           text += chars;
       }
       
   }
    return text;
}
  // TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100