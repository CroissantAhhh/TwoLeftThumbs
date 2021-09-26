const answerUpVote = document.querySelectorAll(".answer_upVote");
const answerDownVote = document.querySelectorAll(".answer_downVote");
const questionUpVote = document.querySelector(".question_upVote");
const questionDownVote = document.querySelector(".question_downVote");
const questionDelete = document.querySelector(".question_delete");
const questionEdit = document.querySelector(".question_edit");
const answerDelete = document.querySelectorAll(".answer_delete");
const answerEdit = document.querySelectorAll(".answer_edit");
const form = document.querySelector(".add_answer");

const formData = new FormData(form);
const _csrf = formData.get("_csrf");

answerUpVote.forEach((answer) => {
  answer.addEventListener("click", async (e) => {
    e.stopPropagation();
    const id = e.target.dataset.id;
    console.log(id);
    const body = { id, dir: 1 };
    const res = await fetch(`/votes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const questionId = questionUpVote.dataset.id;
    window.location.href = `/questions/${questionId}`;
  });
});

answerDownVote.forEach((answer) => {
  answer.addEventListener("click", async (e) => {
    e.stopPropagation();
    const id = e.target.dataset.id;
    const body = { id, dir: -1 };
    const res = await fetch(`/votes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const questionId = questionUpVote.dataset.id;
    window.location.href = `/questions/${questionId}`;
  });
});

answerDelete.forEach((answer) => {
  answer.addEventListener("click", async (e) => {
    id = e.target.dataset.id;
    const questionId = questionUpVote.dataset.id;
    const body = { _csrf };
    let res = await fetch(`/answers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      window.location.href = `/questions/${questionId}`;
    }
  });
});

answerEdit.forEach((answer) => {
  answer.addEventListener("click", async (e) => {
    console.log(e.target)
    id = e.target.dataset.id;
    const res = await fetch(`/answers/${id}/edit`)
  });
});

questionUpVote.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  const body = { id, dir: 1 };
  const res = await fetch(`/votes/question/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const questionId = questionUpVote.dataset.id;
  window.location.href = `/questions/${questionId}`;
});

questionDownVote.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  const body = { id, dir: -1 };
  const res = await fetch(`/votes/question/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const questionId = questionUpVote.dataset.id;
  window.location.href = `/questions/${questionId}`;
});

questionDelete.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  const body = { _csrf };
  const res = await fetch(`/questions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 200) {
    window.location.href = "/questions";
  }
});
