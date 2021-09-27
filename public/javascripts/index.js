window.addEventListener("load", (event) => {
  const auth = document.querySelector("#authenticated");
  if (auth) {
    window.location.href = "/questions";
  }
});
