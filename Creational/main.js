var obj = {};

obj.firstname = "Mauricio";
obj.lastname = "Torrejon";

let val = "USA";
Object.defineProperty(obj, "country", {
	set: function(newVal){ val = newVal },
	get: function(){return val},
	enumerable: true,
	configurable: true
});

console.log(obj);
console.log(obj.country);
obj.country = "Peru";
console.log(obj.country);

var husband = {
	firstname: "Mauricio",
	lastname: "Torrejon",
	sayname: function(){
		return "My name is "+this.firstname+" "+this.lastname;
	}
}

var wife = Object.create(husband, {
	firstname: {value:"Adriana"}
});

console.log(husband.sayname());
console.log(wife.sayname());
