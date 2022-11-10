const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody = document.getElementsByClassName("accordian_body")[0];

function createfaqs() {
  faqData.forEach((item, index) => {
    const faqDiv = document.createElement("div");
    faqDiv.className = "faq";
    const faqHeaderDiv = document.createElement("div");
    faqHeaderDiv.className = "faq_header";
    const h3 = document.createElement("h3");
    const btn = document.createElement("button");
    h3.textContent = item.question;
    btn.textContent = "+";
    btn.className = "show_btn";
    faqDiv.appendChild(faqHeaderDiv);
    const para = document.createElement("p");
    para.textContent = item.answer;
    para.className = "hidden";
    faqDiv.setAttribute("key", index);
    faqDiv.appendChild(para);
    faqHeaderDiv.appendChild(h3);
    faqHeaderDiv.appendChild(btn);
    accordianBody.appendChild(faqDiv);
  });
}

createfaqs();

const toggleBtn = document.querySelectorAll(".show_btn");
const toogleBtnArray = [...toggleBtn];

toogleBtnArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.parentElement.parentElement.lastChild.className !== "visible") {
      btn.parentElement.parentElement.lastChild.className = "visible";
      btn.innerText = "-";
    } else {
      btn.parentElement.parentElement.lastChild.className = "hidden";
      btn.innerText = "+";
    }
  });
});
