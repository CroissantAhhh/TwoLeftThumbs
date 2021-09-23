const answerUpVote = document.querySelector(".answer_upVote");
const answerDownVote = document.querySelector(".answer_downVote");
const questionUpVote = document.querySelector(".question_upVote");
const questionDownVote = document.querySelector(".question_downVote");
answerUpVote.addEventListener("click", async (e) => {
  console.log(e.target.dataset.id);
  //   const res = await fetch(`votes/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
});

answerDownVote.addEventListener("click", async (e) => {
  console.log(e.target.dataset.id);
  //   const res = await fetch(`votes/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
});

questionUpVote.addEventListener("click", async (e) => {
  console.log(e.target.dataset.id);
  //   const res = await fetch(`votes/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
});

questionDownVote.addEventListener("click", async (e) => {
  console.log(e.target.dataset.id);
  //   const res = await fetch(`votes/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
});
