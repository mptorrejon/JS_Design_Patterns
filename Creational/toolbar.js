function ToolbarItem( itemElement ){
	this.__el = itemElement;
	this.__el.addEventListener("click", this.toggleActiveState.bind(this) );
}

Object.defineProperties(ToolbarItem.prototype, {
	enabled: {
		get: function(){
			console.log("enable get");
			return !this.__el.classList.contains("disable");
		},
		set: function(value){
			console.log("enable set");
			if(value){
				this.__el.classList.remove("disable");
			}else{
				this.__el.classList.add("disable");
			}
		}
	},
	activated: {
		get: function(){
			console.log("getting");
			return this.__el.classList.contains("active");
		},
		set: function(value){
			console.log("setting");
			console.log(value);
			if(value){
				this.__el.classList.add("active");
			}else{
				this.__el.classList.remove("active");
			}
		}
	},
	toggleActiveState:{
		value: function(){
			this.activated = !this.activated;
		},
		enumerable: true
	}
});

var createToolbarItems = function(itemElements){
	var items = [];
	
	[].forEach.call(itemElements, function(el, index, array) {
		var item = new ToolbarItem(el);
		items.push(item);
	});
	return items;
}

var Toolbar = function(toolbarElement){
	var item = toolbarElement.querySelectorAll(".toolbar-item");
	Object.defineProperties(this, {
		__el:{
			value: toolbarElement
		},
		items: {
			value: createToolbarItems(item),
			enumerable: true
		}
	});
};

var createToolbar = function(elementId){
	var element = document.getElementById(elementId);

	if(!element){
		element = document.createElement("DIV");
		element.id = elementId;
		element.className = "toolbar";
	}
	return new Toolbar(element);
}
