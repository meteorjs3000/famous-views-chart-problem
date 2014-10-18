Router.configure({
    layoutTemplate: 'layout'
});



Router.map( function() {

	this.route('index', {
		path: '/',
		template: 'main'
	})

	this.route('chart', {
		path: '/chart',
		template: 'chart'
	})

	this.route('chart2', {
		path: '/chart2/',
		template: 'chart2'
	})

})


