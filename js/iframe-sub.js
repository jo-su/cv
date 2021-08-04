window.onload = function(){
  console.log("iframe-sub ready");
  window.addEventListener(
    "message",
    function (event) {
      if (event.origin === window.location.origin) {
        document.body.className = event.data +"-mode";
        console.log("Received mode on iframe: "+ event.data);
      }
    },
    false
  )
}