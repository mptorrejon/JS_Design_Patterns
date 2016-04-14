/*
* 	input: any date format (ISO, etc...)
*	output: 12 hour time ex. 1:02 PM
*/
// angular.module('SMSApp.dashboard.sources.dateformat',[])
// .service('DateFormat', function DateFormat(){

	var Command = function(exe, val){
		this.execute = exe;
		this.value = val;
	}
	var addZeroCommand = function(raw){
		return new Command(addZero, raw )
	}
	function addZero(numb){
		if(numb<10)	numb = "0"+numb;
		return numb;
	}
	var Format = function(){
		var current='';
		return{
			execute: function(command){
				current = command.execute(command.value)
				return current;
			}
		}
	}
	//gets a string as a date ('2016-04-13T04:00:00Z') -ISO format; and should return 2016-04-13
	this.getDate = function(raw, divider){
		console.log(raw+" - "+divider);
	};
	// gets a string as a date ('2016-04-13T04:00:00Z') -ISO format; and should return 04:00 AM
	// this.getTime = function(raw){
	function run(raw){
		var date_obj = new Date(raw);
		var format = new Format();
		var hour = format.execute( new addZeroCommand( date_obj.getHours() ) );
		var minutes = format.execute( new addZeroCommand(date_obj.getMinutes() ) )
		return ( ((hour>12)?hour-12:hour)+":"+minutes+(hour>12?' PM':' AM') );
	};
// });

	var time = run('2016-04-13T08:01:00Z');
	console.log(time);