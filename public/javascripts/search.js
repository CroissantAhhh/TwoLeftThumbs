const searchValue = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

window.addEventListener("DOMContentLoaded", (e) => {
	searchButton.addEventListener("click", async (e) => {
		const term = searchValue.value.split(" ").join("+");
		window.location.href = `/search?q=${term}`;
	});
});
