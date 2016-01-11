(function() {
	var app = angular.module('website', []);

	app.controller('TabController', function(){
		this.tab = 1;

		this.setTab = function(newValue){
			this.tab = newValue;
		};

		this.isSet = function(tabName){
			return this.tab === tabName;
		};
	});

	//projects object
	var projects = [{
		name: 'Colour Blitz',
		description: "foobar"
	}];


})();


