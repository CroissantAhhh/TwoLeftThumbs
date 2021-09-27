const errorsContainer = document.querySelector(".errors_container");
const bodyInput = document.querySelector("#body");
const titleInput = document.querySelector("#title_input");
const form = document.querySelector(".add_question");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const body = formData.get("body");
  const _csrf = formData.get("_csrf");


  let res = await fetch("/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body, _csrf }),
  });


  if (res.status === 201) {
    window.location.href = "/";
    return;
  }


  if (res.status >= 400 && res.status < 600) {
    const data = await res.json();
    titleInput.value = data.title;
    bodyInput.value = data.body;
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
