const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const spaceFilter = (val) => {
	const valArr = val.split("");
	let counter = 0;
	valArr.forEach((ele) => {
		if (ele === " ") {
			counter += 1;
		}
	});
	return valArr.length !== counter;
};

window.addEventListener("DOMContentLoaded", (e) => {
	searchButton.addEventListener("click", async (e) => {
		if (spaceFilter(searchBar.value)) {
			let term = searchBar.value
				.split(" ")
				.filter((word) => word !== "")
				.join("+");
			window.location.href = `/search?q=${term}`;
		}
	});

	searchBar.addEventListener("keypress", async (e) => {
		if (spaceFilter(searchBar.value)) {
			if (e.key === "Enter") {
				let term = searchBar.value
					.split(" ")
					.filter((word) => word !== "")
					.join("+");
				window.location.href = `/search?q=${term}`;
			}
		}
	});
});
