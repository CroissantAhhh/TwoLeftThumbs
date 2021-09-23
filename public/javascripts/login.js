const form = document.querySelector(".login_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const _csrf = formData.get("_csrf");
  const body = { email, password, _csrf };

  let res = await fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 200) {
    window.location.href = "/";
    return;
  }

  if (res.status >= 400 && res.status < 600) {
    const data = await res.json();
    const emailInput = document.querySelector("#email");
    emailInput.value = data.email;
    const errorsContainer = document.querySelector(".errors_container");
    let errorsHtml = [
      `
        <div class="alert alert-danger">
            Something went wrong. Please try again.
        </div>
      `,
    ];
    if (data.errors && Array.isArray(data.errors)) {
      errorsHtml = data.errors.map(
        (message) => `
          <div class="alert alert-danger">
              ${message}
          </div>
        `
      );
    }
    errorsContainer.innerHTML = errorsHtml.join("");
  } else {
    alert(
      "Something went wrong. Please check your internet connection and try again!"
    );
}
});
