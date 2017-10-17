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
for(var i=0; i < students.length; i++) {
	console.log(students[i].age);
}

//2
for (var i =0; i < students.length; i++) {
	var namePlace = students[i].name +','+students[i].city;
	console.log(namePlace);
}

//3
for(var i=0; i < students.length; i++) {
	if (students[i].city === 'Boulder') {
	var string = students[i].name + ' is from ' + students[i].city;
	}
	console.log(string);
}

//4
for (var i=0; i < students.length; i++) {
	if (students[i].age > 25) {
		console.log(students[i].name + ' is older than 25');
	}
}

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

//5
for (var i =0; i<months.length; i++) {
	for (var j = 1; j < months[i].days; j++){
		console.log(months[i].name  + months[j].days)
	}
}


/*
function getAge(obj) {
	var ages =[];
	for (var i in obj['age']) {
	for (var key in obj[i])
		ages.push(i);
	}
	return ages;
}
console.log(getAge(students));
*/