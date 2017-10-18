
var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

//1
for (var key in students) {
	console.log(students[key].age)
}

//2
for(var key in students) {
	console.log(students[key].name + ',' + students[key].city)
}

//3
for(var key in students) {
	if(students[key].city === 'Boulder') {
		console.log(students[key].name + ' is from ' + students[key].city);
	}
}

//4
for (var key in students) {
	if(students[key].age > 25) {
		console.log(students[key].name + ' is older than 25');
	}
}
// Loop Practice  #4

var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

//1
for(var key in months) {
	for(var i =1; i < months[key].days; i++)
	console.log(months[key].name + [i])
}

//2
for (var j = 0; j < 24; j++) {
	for (var x = 0; x < 60; x++ ) {
		for (var y = 0; y < 60; y++) {
			console.log([j] + ':' + [x] + ':' + [y])
	   }
	}
  }

//3 BONUS
for(var p = 0; p <=2; p++) {
	for (var j = 0; j < 12; j++) {
		for (var x = 0; x < 60; x++ ) {
    		for (var y = 0; y < 60; y++) {
				console.log([j] + ':' + [x] + ':' + [y])
	   		}
		}
  	}
}



for(var p = 0; p <=2; p++) {
	for (var j = 0; j < 12; j++) {
		for (var x = 0; x < 60; x++ ) {
    		for (var y = 0; y < 60; y++) {
    			if(p = 0) {
				console.log([j] + ':' + [x] + ':' + [y] + ' AM')
				}
				else {
					console.log([j] + ':' + [x] + ':' + [y] + ' PM')
				}
	   		}
		}
  	}
}
