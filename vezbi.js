

// var info {name:"Richard", age:"27", profession:"Teacher"}
	
// for (i=0;i<info.lenght;i++){

// }
// 	for (var x in info){
// 		console.log(x)
// 	}

// 	console.log(info.x)



json = {jsonData:{one:[11,12,13,14,15], two:[21,22,23], three:[31,32]}};
for(x in json.jsonData){
	// console.log(x);
		for(k in json.jsonData[x]){
		console.log(json.jsonData[x][k])
		}
	}
