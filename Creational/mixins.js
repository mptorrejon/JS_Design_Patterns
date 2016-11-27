/*
	Mixins helps to assign different properties to objects 
*/

function Person(name){
	this.name = name;
}

function Dog(name){
	this.name = name;
}

var speaker = {
	speak: function(){
		return this.name + " is speaking";
	}
}

var mover = {
	walk: function(){
		return this.name+" is walking";
	},
	run: function(){
		return this.name+" is running";
	}
}
var driver = {
	drive: function(){
		return this.name+ " is driving";
	}
}

var Mauricio = new Person("Mauricio");
var Ginger = new Dog("Ginger");

Object.assign(Mauricio, speaker, mover, driver);
Object.assign(Ginger, speaker, mover);

console.log(Mauricio);
console.log(Ginger);

/******************************************/
/******************************************/
/******************************************/


