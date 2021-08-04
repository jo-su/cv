window.addEventListener(
    "message",
    function (event) {
      if (event.origin === window.location.origin) {
        document.body.className = event.data +"-mode";
      }
    },
    false
)