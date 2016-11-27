var toolbar = new createToolbar("myToolbar");
var toggle = document.getElementById("itemStateToggle");


toggle.addEventListener("click", function(e){
	console.log(e);
	e.target.toggleActiveState();
	e.preventDefault();
});
console.log(toggle);

function mixin(target, source, methods){
	for (var ii=2, ll=argument.length; ii<ll; ll++){
		var method = arguments[ii];
		target[method] = source[method];
	}
}

mixin(toggle, toolbar.items[0], "toggleActiveState");
