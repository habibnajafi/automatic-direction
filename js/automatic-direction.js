/*!
 * automatic Direction v1.00
 * By Milad Dehghan (http://dehghan.net)
 * github: https://github.com/miladd3/automatic-direction
 */
$(function() {	
	
	$(".dir-auto").keyup(function(){

		var textareavalue = $(this).val(); //Getting input value
		var arabic = /[\u0600-\u06FF]/g; //setting arabic unicode
		var match = textareavalue.match(arabic); 
		allcount = textareavalue.length;
		farsicount = match ? match.length : 0;
		Englishcount = allcount - farsicount;
    	if (farsicount > Englishcount) {
    		$(this).attr('dir','rtl');
    	}else {
    		$(this).attr('dir','ltr');
    	}


		//Showing character count on front-end
    	$('.count-f').text(farsicount);
    	$('.count-e').text(Englishcount);
    	$('.count-all').text(allcount);

	});
});