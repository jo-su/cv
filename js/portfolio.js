window.onload = function () {

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