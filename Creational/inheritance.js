function Beverage(name, temperature){
	this.name = name;
	this.temperature = temperature;
}

Beverage.prototype.drink = function(){
	console.log("Im drinking " + this.name );
}

function Coffee(type){
	Beverage.call(this, "coffee", "hot");
	this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);

Coffee.prototype.sip = function(){
	console.log("Sipping some awesome "+this.type+" "+this.name);
}

var water = new Beverage("water", "cold");
var coffee = new Coffee("bold dark roast");

console.log(water.drink() );
console.log(coffee.drink() );
