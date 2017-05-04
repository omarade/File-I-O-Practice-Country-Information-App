var jsonFileReader = require("./jsonFileReader")

function print(countriesInfo){
	for (var i = 0 ; i < countriesInfo.length ; i++){
		if(countriesInfo[i].name === process.argv[2]){
			console.log("Country:" + " " + countriesInfo[i].name)
			console.log("Top Level Domain:" + " " + countriesInfo[i].topLevelDomain[0])
		}
	}
}

jsonFileReader.ReadParse('countries.json', print)