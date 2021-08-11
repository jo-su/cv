window.onload = function () {

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

    var boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => setBackground(box));
    
    var openModalButtons = document.querySelectorAll('.more-button');
    openModalButtons.forEach(openModalButton => openModalButton.addEventListener('click', showMore, false));

    function showMore() {
        this.parentElement.classList.toggle("opened");
	}

    function setBackground(box){
        var url = box.getAttribute("bg-src");
        box.style.background="url("+url+") no-repeat right"; 
    }
}