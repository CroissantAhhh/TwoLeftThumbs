const searchValue = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

window.addEventListener("DOMContentLoaded", (e) => {
	searchButton.addEventListener("click", async (e) => {
		let term = searchValue.value.split(" ").filter(word => word !== "").join("+");
		window.location.href = `/search?q=${term}`;
	});

	searchValue.addEventListener("keypress", async (e) => {
		if (e.key === "Enter") {
			let term = searchValue.value.split(" ").filter(word => word !== "").join("+");
			window.location.href = `/search?q=${term}`;
		}
	});
});
