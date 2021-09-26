const form = document.querySelector(".add_answer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const body = formData.get("body");
  const _csrf = formData.get("_csrf");

  const docURL = document.URL.split("/");
  const questionId = form.dataset.id;

  let res = await fetch(`/questions/${questionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body, _csrf }),
  });

  if (res.status === 200) {
    window.location.href = `/questions/${questionId}`;
    return;
  }

  if (res.status >= 400 && res.status < 600) {
    const data = await res.json();
    const titleInput = document.querySelector("#title");
    titleInput.value = data.title;
    const bodyInput = document.querySelector("#body");
    bodyInput.value = data.body;
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
  } else {
    alert(
      "Something went wrong. Please check your internet connection and try again!"
    );
  }
});
