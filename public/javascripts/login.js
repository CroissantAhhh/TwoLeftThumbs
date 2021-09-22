const form = document.querySelector(".login_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Im working");
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const csrfToken = formData.get("_csrf");
  const body = { email, password, csrfToken };
  console.log(body);
  let res;
  try {
    res = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status === 401) {
      window.location.href = "/login";
      return;
    }

    window.location.href = "/";
    return;
  } catch (e) {
    if (res.status === 401) {
      window.location.href = "/login";
      return;
    }
  }
});
