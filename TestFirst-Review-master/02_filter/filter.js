function filter(arr,func){
  rtnArr = [];
  for(i = 0; i < arr.length; i++){
    if(func(arr[i])=== true){
      rtnArr.push(arr[i])
    }
  }
  return rtnArr;
}