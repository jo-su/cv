window.onload = function () {

	//dark mode automatic detection
	const btn_img = document.querySelector(".dk-button i");

	window.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", e => e.matches && setDetectedTheme());

	window.matchMedia("(prefers-color-scheme: light)")
		.addEventListener("change", e => e.matches && setDetectedTheme());

	setDetectedTheme();
	/////

	//feather icons
	feather.replace();
	/////

	//copy to clipboard
	var copyButtons = document.querySelectorAll('.copy');
    copyButtons.forEach(copyButton => copyButton.addEventListener('click', copy, false));
	/////

	//acknowledgements modal button
	var openModalButtons = document.querySelectorAll('.modal-button');
    openModalButtons.forEach(openModalButton => openModalButton.addEventListener('click', openModal, false));

	var modal = document.querySelector("#modal");
	var modalOverlay = document.querySelector("#modal-overlay");
	var closeButton = document.querySelector("#close-button");
	closeButton.addEventListener("click", closeModal);
	modalOverlay.addEventListener("click", closeModal);
	/////

	//portfolio box background
	var boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => setBackground(box));
	/////
    
	//portfolio box more button
    var moreButtons = document.querySelectorAll('.more-button');
    moreButtons.forEach(openModalButton => openModalButton.addEventListener('click', showMore, false));
	/////

	//scroll to top button
	try{
		document.getElementById("scroll-up").addEventListener("click", scrollToTop);
	}catch(e){};
	/////

	//image on hover
	document.getElementById("cursorhover").addEventListener("pointerenter", showImage);
	document.getElementById("cursorhover").addEventListener("pointerleave", hideImage);

	let attached = false;
	let imageContainer = document.querySelector("#cursorimage");

	const followMouse = (event) => {
		imageContainer.style.left = event.x + "px";
		imageContainer.style.top = event.y + "px";
	  }
	  
	function showImage() {
		if (!attached) {
		  attached = true;
		  imageContainer.style.display = "block";
		  document.addEventListener("pointermove", followMouse);
		}
	}
	  
	function hideImage() {
		attached = false;
		imageContainer.style.display = "";
		document.removeEventListener("pointermove", followMouse);
	}
	/////
	
	// dark mode button
	const btn = document.querySelector(".dk-button");
	btn.addEventListener("click", function () {
		if (localStorage.getItem("theme") == "dark") {
			changeTheme("light");
			console.log("manual LIGHT")
		} else {
			changeTheme("dark");
			console.log("manual DARK")
		}
	});
	/////

	// copy to clipboard
	function copy() {
		if(this.classList.contains("copy")){
			this.classList.remove("copy");
			this.classList.add("copying");
			var copyText = this.getAttribute('copy-value');
			console.log(copyText);
			var original = this.innerHTML;
			var input = this.appendChild(document.createElement("input"));
			input.value = copyText;
			input.focus();
			input.select();
			document.execCommand('copy');
			input.parentNode.removeChild(input);
			this.innerHTML = "<i class='feather' data-feather='clipboard'></i>copied!";
			feather.replace();
			setTimeout(function() {
				this.innerHTML = original;
				this.classList.remove("copying");
				this.classList.add("copy");
			}.bind(this), 2500);
		}
	} 
	/////

	// portfolio box
	function showMore() {
        this.parentElement.classList.toggle("opened");
	}

    function setBackground(box){
        var url = box.getAttribute("bg-src");
        box.style.background="url("+url+") no-repeat right"; 
    }
	/////

	// modal (acknowledgements)
	function openModal() {
		document.body.classList.add("modal-open");
		modal.classList.add("opened");
		modalOverlay.classList.add("opened");
	}

	function closeModal() {
		document.body.classList.remove("modal-open");
		modal.classList.remove("opened");
		modalOverlay.classList.remove("opened");
	}
	/////

	//scroll to top
	function scrollToTop() {
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}
	/////


	//dark mode
	function setDetectedTheme() {
		const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
		if (prefersDarkScheme.matches) {
			console.log("detected DARK");
			changeTheme("dark");
		} else {
			console.log("detected LIGHT");
			changeTheme("light");
		}
	}

	function changeTheme(mode) {
		if (mode == "dark") {
			document.body.classList.remove("light-mode");
			document.body.classList.add("dark-mode");
			
				btn_img.classList.remove("bi-moon-fill");
				btn_img.classList.add("bi-sun");
			
			localStorage.setItem("theme", mode);
		} else if (mode == "light") {
			document.body.classList.remove("dark-mode");
			document.body.classList.add("light-mode");
			
				btn_img.classList.remove("bi-sun");
				btn_img.classList.add("bi-moon-fill");
			
			localStorage.setItem("theme", mode);
		}
	}
	/////

};

