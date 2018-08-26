function cariPelaku(str) {  

  var character = str.match(/abc/g);   
    for(var i = 0; i < character.length;i++){       
    }
return i;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2