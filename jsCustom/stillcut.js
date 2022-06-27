$(document).ready(function() {
	
	var movedIndex = 0;
	
	function moveSlide(index) {
		movedIndex = index;
		
		var moveLeft = -(index * 880); 
		
		$('#slide').animate({'left':moveLeft}, 'slow');
		
	}
	
	$('#prevButton').on('click', function() {
		if(movedIndex != 0) { 
			movedIndex = movedIndex - 1; 
			
			moveSlide(movedIndex); 
		}
	});
	
	$('#nextButton').on('click', function() {
		if(movedIndex != 4) { 
			movedIndex = movedIndex + 1; 
			
			moveSlide(movedIndex); 
		}
	});
	var randomNumber=
	Math.floor(Math.random()*5);
	moveSlide(randomNumber);
	
});