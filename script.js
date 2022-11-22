document.querySelectorAll(".story-btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("change");
		btn.nextElementSibling.classList.toggle("change");
	});
});
// document.querySelector(".team-wrapper").addEventListener("click", (e) => {
// 	debugger;
// 	const element = e.target;
// 	const parent = element.closest(".team-wrapper");
// 	const story = parent.querySelector(".story");

// 	element.classList.toggle("change");
// 	story.classList.toggle("change");
// });
