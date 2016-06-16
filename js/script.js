$ ( document ).ready( function () {
	console.log('dom is ready')

	$ ( '#portfolio-item' ).click(function (){
		
		 $('.overlay').load();

	})

})
