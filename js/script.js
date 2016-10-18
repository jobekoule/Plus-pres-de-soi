$( function() {
        /* dietetique - animation de conseil et recette*/
    	$('#recette a').click(function (e) {
    		e.preventDefault()
    		$(this).tab('show')
    	});
    	$('#conseil a').click(function (e) {
    		e.preventDefault()
    		$(this).tab('show')
    	});
    });
$(function() {
    $('.required-icon').tooltip({
        placement: 'left',
        title: 'Required field'
        });
});