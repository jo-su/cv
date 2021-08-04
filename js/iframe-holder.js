window.onload = function(){
    // Load the light them when the iFrame is ready.
  	iframe.onload = function() {
    	activateIframeTheme();
  	}

	// Send message to the iFrame with the theme we want to activate.
	function activateIframeTheme() {
		if (iframe && iframe.contentWindow) {
	  		iframe.contentWindow.postMessage(theme, (localStorage.getItem("theme")));
            console.log("sent message to iframe: "+ (localStorage.getItem("theme")));
		}
 	}
}