window.onload = function () {

	const btn_img = document.querySelector(".dk-button i");
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

	var modal = document.querySelector("#modal");
	var iframe = document.querySelector("iframe");
	var modalOverlay = document.querySelector("#modal-overlay");
	var closeButton = document.querySelector("#close-button");

	var copyButtons = document.querySelectorAll('.copy');
    copyButtons.forEach(copyButton => copyButton.addEventListener('click', copy, false));

	var openModalButtons = document.querySelectorAll('.modal-button');
    openModalButtons.forEach(openModalButton => openModalButton.addEventListener('click', openModal, false));

	var boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => setBackground(box));
    
    var moreButtons = document.querySelectorAll('.more-button');
    moreButtons.forEach(openModalButton => openModalButton.addEventListener('click', showMore, false));

	setDetectedTheme();
	
	feather.replace();

	window.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", e => e.matches && setDetectedTheme());

	window.matchMedia("(prefers-color-scheme: light)")
		.addEventListener("change", e => e.matches && setDetectedTheme());

	document.getElementById("scroll-up").addEventListener("click", scrollToTop);

	
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

	closeButton.addEventListener("click", function () {
		modal.classList.remove("opened");
		modalOverlay.classList.remove("opened");
	});

	modalOverlay.addEventListener("click", function () {
		modal.classList.remove("opened");
		modalOverlay.classList.remove("opened");
	});

	function copy() {
		if(this.classList.contains("copy")){
			this.classList.remove("copy");
			this.classList.add("copying");
			var copyText = this.getAttribute('copy-value');
			console.log(copyText);
			var original = this.innerHTML;
			/*var input = document.body.appendChild(document.createElement("input"));*/
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

	function showMore() {
        this.parentElement.classList.toggle("opened");
	}

    function setBackground(box){
        var url = box.getAttribute("bg-src");
        box.style.background="url("+url+") no-repeat right"; 
    }

	// Send message to the iFrame with the theme we want to activate.
	function activateIframeTheme() {
		if (iframe && iframe.contentWindow) {
	  		iframe.contentWindow.postMessage((localStorage.getItem("theme")), "*" );
            console.log("sent message to iframe: "+ (localStorage.getItem("theme")));
		}
 	}

	function openModal() {
		iframe.setAttribute("src", this.getAttribute("href"));
		modal.classList.add("opened");
		modalOverlay.classList.add("opened");
	}

	function scrollToTop() {
		// Scroll to top logic
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

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

};

