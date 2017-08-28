function difference(array1, array2){
  return array1.filter(function(i){
    return array2.indexOf(i) < 0;
})
}

function symmetricDiff(arr1, arr2){
  rtn1 = difference(arr1, arr2);
  rtn2 = difference(arr2, arr1);
  return rtn1.concat(rtn2)
}