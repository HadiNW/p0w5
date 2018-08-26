function cariPelaku(str) {  

  var character = str.match(/abc/g);
    var count = 0;
    for(var i = 0; i < character.length;i++){
        count++;
    }
return count;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2