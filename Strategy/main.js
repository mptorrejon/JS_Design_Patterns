var Shipping = function(){
	this.company = "";
};

Shipping.prototype = {
	setStrategy: function(company){
		this.company = company;
	},
	calculate: function(package) {
		console.log( this.company );
        return this.company.calculate(package);
    }
};

var UPS = function() {
    this.calculate = function(package) {
        return "45.95";
    }
};

var USPS = function(){
	this.calculate = function(pkg){
		return "20.01";
	}
};
var Fedex = function(){
	this.calculate = function(pkg){
		return "32.03";
	}
}

function run(){
	var pack = { from: "76712", to: "10012", weigth: "lkg" };

	//strategies
	var ups = new UPS();
	var	usps = new USPS();
	var fedex = new Fedex();

	var shipping = new Shipping();
	//UPS strategy
	shipping.setStrategy(ups);
	console.log( shipping.calculate( pack ) );
	//USPS strategy
	shipping.setStrategy(usps);
	console.log( shipping.calculate( pack ) );
	//Fedex strategy
	shipping.setStrategy(fedex);
	console.log( shipping.calculate( pack ) );
	
}

run();