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

	//getting url
	var url404 = document.getElementById("url");
	if(typeof(url404) != 'undefined' && url404 != null){
		console.log("page not found")
		url404.innerHTML = window.location.href.replace(/(^\w+:|^)\/\//, '');
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

