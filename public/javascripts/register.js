const form = document.querySelector(".register_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const userName = formData.get("userName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const _csrf = formData.get("_csrf");
  const body = { userName, email, password, confirmPassword, _csrf };

  let res = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 201) {
    window.location.href = "/";
    return;
  }

  if (res.status >= 400 && res.status < 600) {
    const data = await res.json();
    const emailInput = document.querySelector("#email");
    emailInput.value = data.email;
    const userNameInput = document.querySelector("#userName");
    userNameInput.value = data.userName;
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
