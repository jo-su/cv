window.onload = function () {

	const btn = document.querySelector(".dk-button");
	const btn_img = document.querySelector(".dk-button i");
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

	var modal = document.querySelector("#modal");
	var iframe = document.querySelector("iframe");
	var modalOverlay = document.querySelector("#modal-overlay");
	var closeButton = document.querySelector("#close-button");

	var openModalButtons = document.querySelectorAll('.modal-button');
    openModalButtons.forEach(openModalButton => openModalButton.addEventListener('click', openModal, false));


	setDetectedTheme();

	window.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", e => e.matches && setDetectedTheme());

	window.matchMedia("(prefers-color-scheme: light)")
		.addEventListener("change", e => e.matches && setDetectedTheme());

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

	function openModal() {
		iframe.setAttribute("src", this.getAttribute("href"));
		modal.classList.add("opened");
		modalOverlay.classList.add("opened");

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
			btn_img.classList.add("bi-sun-fill");
			localStorage.setItem("theme", mode);
		} else if (mode == "light") {
			document.body.classList.remove("dark-mode");
			document.body.classList.add("light-mode");
			btn_img.classList.remove("bi-sun-fill");
			btn_img.classList.add("bi-moon-fill");
			localStorage.setItem("theme", mode);
		}
	}






};

