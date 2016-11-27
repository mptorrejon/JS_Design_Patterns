function ToolbarItem( itemElement ){
	// console.log(itemElement);
	this.__el = itemElement;
	this.__el.addEventListener("click", this.toggleActiveState.bind(this) );
}

Object.defineProperties(ToolbarItem.prototype, {
	enabled: {
		get: function(){
			return !this.__el.classList.contains("disable");
		},
		set: function(value){
			if(value){
				this.__el.classList.remove("disable");
			}else{
				this.__el.classList.add("disable");
			}
		}
	},
	activated: {
		get: function(){
			return this.__el.classList.add("active");
		},
		set: function(value){
			if(value){
				this.__el.classList.add("active");
			}else{
				this.__el.classList.remove("active");
			}
		}
	}
});

ToolbarItem.prototype.toggleActiveState = function(){
	this.actived = !this.activated;
}

var createToolbarItems = function(itemElements){
	console.log(itemElements);
	var items = [];
	
	[].forEach.call(itemElements, function(el, index, array) {
		console.log(el);
		var item = createToolbarItems(el);
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
