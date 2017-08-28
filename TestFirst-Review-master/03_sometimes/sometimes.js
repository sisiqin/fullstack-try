function sometimes(func){
  checkpoint = 0;
  var rtnFunc = function(){
  while (checkpoint < 3){
    checkpoint ++;
    return func.apply(null, arguments);
  }
   while (checkpoint >=3 && checkpoint % 2 !== 0){
    checkpoint ++;
    return 'I do not know!';
  }
  while(checkpoint >=3 && checkpoint %2 === 0){
    checkpoint ++;
    return func.apply(null, arguments);
  }
 
  }
  return rtnFunc;
}