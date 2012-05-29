$(function(){


	function initCounter( name, persec ){
		var inc = 1,
		pace = 1 / persec * 1000;
		
		return new flipCounter( name + '-counter', {
			value : 0,
			pace : parseInt( 1 / persec * 1000 ),
			inc: 1
		});
	}


	var total = 8000000000000,
	seconds_in_a_year = (365.25 * 24 * 60 * 60),
	persec = Math.floor(total / seconds_in_a_year),
	
	apps_min = 13000,
	apps_sec = ( apps_min / 60 ),
	
	iphones_min = 925,
	iphones_sec = ( iphones_min / 60 ),
	
	ipads_min = 81,
	ipads_sec = ( ipads_min / 60 ),
	
	kindle_min = 18,
	kindle_sec = ( kindle_min / 60 ),
	
	bb_min = 103,
	bb_sec = ( bb_min / 60 ), 
	
	instagram_sec = 58,
	instagramnew_sec = 1,
	tweets_sec = 1633,

	counters = [];
	
	
	

	
	counters.push( 
		new flipCounter( 'flip' + '-counter', {
			value : 0,
			pace : 10,
			inc: parseInt( persec / 100 )
		}) 
		);
	
	var app_pace = ( 1 / apps_sec * 10000 );
	counters.push( 
		new flipCounter( 'app' + '-counter', {
			value : 0,
			pace : app_pace,
			inc: 10
		}) 
		);
	counters.push( initCounter( 'iphones', iphones_sec ) );
	counters.push( initCounter( 'ipads', ipads_sec ) );
	// counters.push( initCounter( 'kindle', kindle_sec ) );
	// counters.push( initCounter( 'bb', bb_sec ) );

	counters.push( initCounter( 'tweets', tweets_sec ) );
	counters.push( initCounter( 'instagram', instagram_sec ) );
	// counters.push( initCounter( 'instagram_new', instagramnew_sec ) );





});


