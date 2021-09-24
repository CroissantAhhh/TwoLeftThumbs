window.addEventListener("load", (event) => {
  const auth = document.querySelector("#authenticated");
  if (auth.dataset.authenticated) {
    window.location.href = "/questions";
  }
});
