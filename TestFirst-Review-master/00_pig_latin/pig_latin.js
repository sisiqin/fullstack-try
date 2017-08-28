function  translate(str){
  str=str.split(" ");
  box = [];
  for(i = 0; i < str.length; i++){
	  if(str[i][0].includes("a")||str[i][0].includes("e")||str[i][0].includes("i")||str[i][0].includes("o")||str[i][0].includes("u") ){
		box.push(str[i] + "ay") ;
	} else{
	  box.push(str[i].slice(1) + str[i][0] + "ay");
	}
  }
  return box.join(" ");
}