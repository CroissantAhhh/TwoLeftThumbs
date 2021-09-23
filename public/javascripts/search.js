const searchValue = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

window.addEventListener("DOMContentLoaded", (e) => {
	searchButton.addEventListener("click", async (e) => {
		console.log(searchValue.value.length);
		let term = searchValue.value.split(" ").join("+");
		window.location.href = `/search?q=${term}`;
	});

	searchButton.addEventListener("keypress", async (e) => {
		if (e.key === "Return") {
			console.log(searchValue.value.length);
			let term = searchValue.value.split(" ").join("+");
			window.location.href = `/search?q=${term}`;
		}
	});
});
