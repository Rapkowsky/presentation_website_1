const nav = document.querySelector(".nav");
const navButton = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navButtonBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.toggle("nav--active");

	navButtonBars.classList.remove("black-bars-color");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const handleTracking = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		// offsetTop - we checked if top border of our section is <= currentSection. 60 pixels is the reserve for indentation (white block elements)
		if (section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
			navButtonBars.classList.add("black-bars-color");
		} else if (!section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
			navButtonBars.classList.remove("black-bars-color");
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navButton.addEventListener("click", handleNav);
window.addEventListener("scroll", handleTracking);
