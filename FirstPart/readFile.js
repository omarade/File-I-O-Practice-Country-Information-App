var fs = require('fs');

fs.readFile('countries.json', 'utf-8', function(err, data) {
    if (err) {
        throw err;
    }
	data = JSON.parse(data)
	print(process.argv[2], data)
   
});

function print(country, countriesInfo){
	for (var i = 0 ; i < countriesInfo.length ; i++){
		if(countriesInfo[i].name === country){
			console.log("Country: " + countriesInfo[i].name)
			console.log("Top Level Domain: " + countriesInfo[i].topLevelDomain[0])
		}
	}
}



