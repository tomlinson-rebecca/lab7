'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('button.btn.btn-default.likeBtn').click(handleClick);
}

function handleClick(e){
	ga("send", "event", "like", "click");
}