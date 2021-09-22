const searchValue = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton");

window.addEventListener("DOMContentLoaded", (e) => {
    searchButton.addEventListener("click", async(e) => {
        console.log(searchValue)
        const term = searchValue.value.split(" ").join("+");
        window.location.href = `/search?term=${term}`;
    });

})
