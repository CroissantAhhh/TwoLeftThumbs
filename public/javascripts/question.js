const answerUpVote = document.querySelectorAll(".answer_upVote");
const answerDownVote = document.querySelectorAll(".answer_downVote");
const questionUpVote = document.querySelector(".question_upVote");
const questionDownVote = document.querySelector(".question_downVote");

answerUpVote.forEach((answer) => {
  answer.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;
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
