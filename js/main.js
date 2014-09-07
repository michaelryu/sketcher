var size = 16;
var squaresize = 20;
$(document).ready(function(){
	
	createGrid();
	color();
	resetbutton();
});

function createGrid(){
	for (var i = 0; i<size; i++) {
		$('tr').append('<td></td>');
	};
	for (var i = 0; i<size; i++) {
		$('td').append('<div class="squares"></div>');
	};
	$('.squares').css({width:squaresize,height:squaresize});


}

function color(){
	$('.squares').mouseenter(function(){
		$(this).addClass('highlighted');
	});
}

function resetbutton(){
	$('button').click(function(){
		$('tr').empty();
		size = prompt("How many squares per side for the Grid?");
		if(size>64){
			alert("That was to big!");
		}

		else if(size<1||size.isNan){
			alert("That doesn't work");
		}
		else{
		$('tr').css({width:'352px',height:'352px'});
		squaresize = (352/size);
		squaresize = parseInt(squaresize);
		createGrid();
		color();}
	});
	
}
function prompter(){
	size = prompt("How many squares per side for the Grid?");
}