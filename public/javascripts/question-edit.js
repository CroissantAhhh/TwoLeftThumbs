const form = document.querySelector(".add_answer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let body = formData.get("body");
  const questionId = formData.get("questionId");
  const _csrf = formData.get("_csrf");
  const id = form.dataset.id;

  let res = await fetch(`/answers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({body, _csrf}),
  });

  if (res.status === 200) {
    window.location.href = `/questions/${questionId}`;
    return;
  }

  if (res.status >= 400 && res.status < 600) {
    const data = await res.json();
    const errorsContainer = document.querySelector(".errors_container");
    errorsContainer.classList.remove('hidden')
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
    errorsContainer.classList.remove("hidden");
  } else {
    alert(
      "Something went wrong. Please check your internet connection and try again!"
    );
  }
});
