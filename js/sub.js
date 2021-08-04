window.addEventListener(
    "message",
    function (event) {
      if (event.origin === window.location.origin) {
        $("body").attr("class", event.data +"-mode")
      }
    },
    false
)